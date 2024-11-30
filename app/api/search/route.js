// app/api/search/route.js
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");
  const page = parseInt(searchParams.get("page")) || 1;
  const currentSite = searchParams.get("site");
  const ITEMS_PER_PAGE = 10;

  if (!query) {
    return Response.json({
      localResults: [],
      globalResults: [],
      totalResults: 0,
      currentPage: page,
      totalPages: 0,
    });
  }

  // Search terms processing - more lenient
  const searchTerms = query.toLowerCase().split(/\s+/);

  const processUrl = async (url, site) => {
    try {
      const response = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; NextJSBot/1.0)" },
        signal: AbortSignal.timeout(5000), // Increased timeout
      });

      if (!response.ok) return null;

      const html = await response.text();

      // Extract content - simpler approach
      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      const title = titleMatch
        ? titleMatch[1].replace(/&#8211;|&amp;|&nbsp;/g, " ").trim()
        : url.split("/").pop().replace(/-/g, " ");

      // Find meta description
      const descMatch = html.match(
        /<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i
      );
      const description = descMatch ? descMatch[1] : "";

      // Simplified content extraction
      const content = html
        .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, "")
        .replace(/<[^>]+>/g, " ")
        .replace(/&\w+;/g, " ")
        .toLowerCase();

      let score = 0;
      const titleLower = title.toLowerCase();
      const descLower = description.toLowerCase();

      // Simplified scoring
      for (const term of searchTerms) {
        if (titleLower.includes(term)) score += 50;
        if (descLower.includes(term)) score += 30;
        if (content.includes(term)) score += 10;
      }

      // Include if any term matches
      if (score > 0) {
        // Find relevant snippets
        const snippets = [];
        let usedSnippets = new Set();

        for (const term of searchTerms) {
          let index = content.indexOf(term);
          if (index !== -1) {
            const start = Math.max(0, index - 60);
            const end = Math.min(content.length, index + term.length + 60);
            const snippet = content.slice(start, end);
            if (!usedSnippets.has(snippet)) {
              snippets.push(snippet);
              usedSnippets.add(snippet);
            }
          }
        }

        return {
          title,
          url,
          description,
          snippets: snippets.slice(0, 2).map((s) => `...${s}...`),
          domain: site,
          score,
        };
      }
      return null;
    } catch (error) {
      console.warn(`Error processing ${url}:`, error);
      return null;
    }
  };

  const searchSite = async (site) => {
    try {
      const siteMapUrl = `https://${site}/sitemap.xml`;
      const response = await fetch(siteMapUrl, {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; NextJSBot/1.0)" },
        signal: AbortSignal.timeout(5000),
      });

      if (!response.ok) return [];

      const siteMapText = await response.text();
      const urls = [...siteMapText.matchAll(/<loc>([^<]+)<\/loc>/g)]
        .map((match) => match[1].trim())
        .filter(
          (url) =>
            !url.includes("wp-json") &&
            !url.includes("feed") &&
            !url.endsWith(".xml") &&
            !url.endsWith(".php")
        );

      // Process in batches of 5
      const results = [];
      const uniqueUrls = [...new Set(urls)].slice(0, 30); // Increased from 20 to 30

      for (let i = 0; i < uniqueUrls.length; i += 5) {
        const batch = uniqueUrls.slice(i, i + 5);
        const batchResults = await Promise.all(
          batch.map((url) => processUrl(url, site))
        );
        results.push(...batchResults.filter(Boolean));
      }

      return results;
    } catch (error) {
      console.warn(`Error searching ${site}:`, error);
      return [];
    }
  };

  const searchAllSites = async () => {
    const sites = [
      "officeexperts.com.au",
      "powerplatformexperts.com.au",
      "wordexperts.com.au",
      "excelexperts.com.au",
      "accessexperts.com.au",
    ];

    try {
      // Search current site first if specified
      const localResults = currentSite ? await searchSite(currentSite) : [];

      // Search other sites
      const otherSites = sites.filter((site) => site !== currentSite);
      const globalResults = (
        await Promise.allSettled(otherSites.map((site) => searchSite(site)))
      )
        .filter((result) => result.status === "fulfilled")
        .map((result) => result.value)
        .flat();

      return {
        localResults: localResults.sort((a, b) => b.score - a.score),
        globalResults: globalResults.sort((a, b) => b.score - a.score),
      };
    } catch (error) {
      console.error("Search error:", error);
      throw error;
    }
  };

  try {
    const { localResults, globalResults } = await searchAllSites();

    return Response.json({
      localResults: localResults.slice(0, ITEMS_PER_PAGE),
      globalResults: globalResults.slice(0, ITEMS_PER_PAGE),
      totalLocalResults: localResults.length,
      totalGlobalResults: globalResults.length,
      currentPage: page,
      totalPages: Math.ceil(
        (localResults.length + globalResults.length) / ITEMS_PER_PAGE
      ),
    });
  } catch (error) {
    console.error("Search API error:", error);
    return Response.json(
      { error: "Search failed", message: error.message },
      { status: 500 }
    );
  }
}
