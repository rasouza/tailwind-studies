import { Card } from "src/components/Card";

import { useHero } from "../hooks/useHero";

export function Heroes() {
  const { isLoading, data, isError, error } = useHero(3);
  if (isLoading)
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  if (!data) return null;
  if (isError) return <div>Error {(error as Error).message}</div>;
  return (
    <div>
      <Card
        image={data.image.url}
        title={data.name}
        subtitle={data.biography.publisher}
      />
    </div>
  );
}
