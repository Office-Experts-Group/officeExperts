export const dynamic = "force-dynamic";

async function searchContent(query, page = 1) {
  // Remove common words
  const cleanQuery = query
    .toLowerCase()
    .replace(/\b(and|or|the|in|on|at|to)\b/g, "")
    .trim();

  // Sample content structure (you'll need to implement your actual content loading)
  const allContent = {
    "officeexperts.com.au": [
      { path: "/services", title: "Office Services", content: "..." },
      // ... more pages
    ],
    // ... other domains
  };

  const results = [];
  const wordsToMatch = cleanQuery.split(/\s+/);

  // Search through all domains and content
  Object.entries(allContent).forEach(([domain, pages]) => {
    pages.forEach((page) => {
      const searchableText = `${page.title} ${page.content}`.toLowerCase();

      // Check if all words match
      const matches = wordsToMatch.every((word) =>
        searchableText.includes(word)
      );

      if (matches) {
        // Find the best snippet containing the search terms
        const snippet = findBestSnippet(page.content, wordsToMatch);

        results.push({
          domain,
          title: page.title,
          path: page.path,
          snippet,
          relevance: calculateRelevance(searchableText, wordsToMatch),
        });
      }
    });
  });

  // Sort by relevance
  results.sort((a, b) => b.relevance - a.relevance);

  // Paginate results
  const ITEMS_PER_PAGE = 10;
  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginatedResults = results.slice(start, start + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);

  return {
    results: paginatedResults,
    totalResults: results.length,
    currentPage: page,
    totalPages,
  };
}

function findBestSnippet(content, searchTerms, snippetLength = 200) {
  // Find the best section of content containing search terms
  let bestSnippet = "";
  let bestScore = 0;

  const words = content.split(/\s+/);

  for (let i = 0; i < words.length - snippetLength; i++) {
    const section = words.slice(i, i + snippetLength).join(" ");
    const score = searchTerms.reduce(
      (acc, term) =>
        acc + (section.toLowerCase().match(new RegExp(term, "g")) || []).length,
      0
    );

    if (score > bestScore) {
      bestScore = score;
      bestSnippet = section;
    }
  }

  return bestSnippet + "...";
}

function calculateRelevance(text, searchTerms) {
  return searchTerms.reduce((score, term) => {
    const matches = (text.match(new RegExp(term, "g")) || []).length;
    return score + matches;
  }, 0);
}

export default async function SearchPage({ searchParams }) {
  const query = searchParams.q || "";
  const page = parseInt(searchParams.page) || 1;

  if (!query) {
    return <div className={styles.noResults}>Please enter a search term</div>;
  }

  const { results, totalResults, currentPage, totalPages } =
    await searchContent(query, page);

  return (
    <div className={styles.searchResults}>
      <h1>Search Results for "{query}"</h1>
      <p>{totalResults} results found</p>

      {results.map((result, index) => (
        <article key={index} className={styles.searchResult}>
          <h2>
            <a href={`https://${result.domain}${result.path}`}>
              {result.title}
            </a>
          </h2>
          <p className={styles.domain}>{result.domain}</p>
          <p className={styles.snippet}>{result.snippet}</p>
        </article>
      ))}

      {totalPages > 1 && (
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, i) => (
            <a
              key={i + 1}
              href={`/search?q=${encodeURIComponent(query)}&page=${i + 1}`}
              className={currentPage === i + 1 ? styles.activePage : ""}
            >
              {i + 1}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
