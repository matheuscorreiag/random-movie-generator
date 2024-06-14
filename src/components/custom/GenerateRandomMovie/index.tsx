"use client";

import { Movie, getMovie } from "@/actions/get-movie";
import { RandomMovie } from "@/components/custom/RandomMovie";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export function GenerateRandomMovie() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const genreIds = useSearchParams().get("genreIds");

  async function handleGeneration() {
    if (!genreIds) return;

    const movie = await getMovie({ genreIds });

    setMovie(movie);
  }

  return (
    <>
      <div className="min-h-[550px]">
        <RandomMovie movie={movie || null} />
      </div>
      <Button
        className="bg-green-500 hover:bg-green-800 h-12 font-bold w-full"
        disabled={!genreIds}
        onClick={handleGeneration}
      >
        Generate
      </Button>
    </>
  );
}
