"use client";

import { Button } from "@/components/ui/button";
import { useMovieGenre } from "@/stores/useMovieGenre";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function GenerateRandomMovie() {
  const { genreId } = useMovieGenre();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  function handleGenerateRandomMovie() {
    if (!genreId) return;

    const params = new URLSearchParams(searchParams);

    params.set("genreId", genreId.toString());

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Button
      className="bg-green-500 w-full hover:bg-green-800 h-12 font-bold"
      onClick={handleGenerateRandomMovie}
    >
      Generate
    </Button>
  );
}
