import { flatten } from "lodash/fp";
import { useEffect, useRef } from "react";

import { Card } from "src/components/Card";

import { useHeroes } from "../hooks/useHeroes";

export function Heroes() {
  const loadMoreButtonRef = useRef<HTMLButtonElement>(null);
  const {
    isLoading,
    data,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useHeroes(30);

  useEffect(() => {
    if (!hasNextPage) {
      return;
    }
    const observer = new IntersectionObserver((entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      })
    );
    const el = loadMoreButtonRef && loadMoreButtonRef.current;
    if (!el) {
      return;
    }
    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, [hasNextPage, fetchNextPage]);

  if (isLoading)
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  if (!data) return null;
  if (isError) return <div>Error {error?.message}</div>;

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {flatten(data.pages).map((hero, key) => (
          <Card
            image={hero.image.url}
            title={hero.name}
            subtitle={hero.biography.publisher}
            key={key}
          />
        ))}
      </div>
      <button
        className="p-2 rounded-xl bg-grey flex justify-center"
        ref={loadMoreButtonRef}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}
