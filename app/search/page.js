// app/search/page.js
import ServiceHero from "../../components/ServiceHero";
import styles from "../../styles/search.module.scss";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

import penPoint from "../../public/pageHeros/penPoint.webp";
import glassesMob from "../../public/pageHeros/mob/glassesMob.webp";

function highlightQuery(text, query) {
  const words = query.toLowerCase().split(/\s+/);
  let highlightedText = text;

  words.forEach((word) => {
    const regex = new RegExp(`(${word})`, "gi");
    highlightedText = highlightedText.replace(regex, "<mark>$1</mark>");
  });

  return highlightedText;
}

async function SearchPage({ searchParams }) {
  const query = searchParams.q || "";
  const page = parseInt(searchParams.page) || 1;

  if (!query) {
    return <div className={styles.noResults}>Please enter a search term</div>;
  }

  try {
    const headersList = headers();
    const host = headersList.get("host");
    const currentSite = host.replace("www.", "");
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

    const response = await fetch(
      `${protocol}://${host}/api/search?q=${encodeURIComponent(
        query
      )}&page=${page}&site=${currentSite}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error(`Search failed with status: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.message || "Search failed");
    }

    const {
      localResults,
      globalResults,
      totalLocalResults,
      totalGlobalResults,
    } = data;

    return (
      <>
        <ServiceHero
          title="Search Results"
          desktopImage={penPoint}
          mobileImage={glassesMob}
          altDesk={"pen pointing to a point"}
          altMob={"glasses on a table"}
        />
        <div className={styles.searchResults}>
          <h1>Search Results for "{query}"</h1>

          {localResults.length > 0 && (
            <section className={styles.resultsSection}>
              <h2>Results from this site ({totalLocalResults})</h2>
              {localResults.map((result, index) => (
                <article key={index} className={styles.searchResult}>
                  <h3>
                    <a
                      href={result.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {result.title}
                    </a>
                  </h3>
                  <p className={styles.url}>{result.url}</p>
                  {result.snippets.map((snippet, i) => (
                    <p
                      key={i}
                      className={styles.snippet}
                      dangerouslySetInnerHTML={{
                        __html: highlightQuery(snippet, query),
                      }}
                    />
                  ))}
                </article>
              ))}
            </section>
          )}

          {globalResults.length > 0 && (
            <section className={styles.resultsSection}>
              <h2>Results from other sites ({totalGlobalResults})</h2>
              {globalResults.map((result, index) => (
                <article key={index} className={styles.searchResult}>
                  <h3>
                    <a
                      href={result.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {result.title}
                    </a>
                  </h3>
                  <p className={styles.url}>{result.url}</p>
                  <p className={styles.domain}>From {result.domain}</p>
                  {result.snippets.map((snippet, i) => (
                    <p
                      key={i}
                      className={styles.snippet}
                      dangerouslySetInnerHTML={{
                        __html: highlightQuery(snippet, query),
                      }}
                    />
                  ))}
                </article>
              ))}
            </section>
          )}

          {localResults.length === 0 && globalResults.length === 0 && (
            <p className={styles.noResults}>No results found</p>
          )}
        </div>
      </>
    );
  } catch (error) {
    console.error("Search page error:", error);
    return (
      <>
        <ServiceHero
          title="Search Error"
          desktopImage={penPoint}
          mobileImage={glassesMob}
          altDesk={"pen pointing to a point"}
          altMob={"glasses on a table"}
        />
        <div className={styles.error}>
          Error performing search: {error.message}. Please try again.
        </div>
      </>
    );
  }
}

export default SearchPage;
