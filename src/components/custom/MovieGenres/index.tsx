"use client";

import { Genres } from "@/actions/get-movie-genres";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type MovieGenresProps = {
  genres: Genres[];
};
export function MovieGenres({ genres }: MovieGenresProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const rawGenreIds = searchParams.get("genreIds");
  const stringGenreIds = rawGenreIds ? rawGenreIds.split("_") : [];
  const genreIds = stringGenreIds.map((id) => parseInt(id, 10));

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex gap-x-4 items-center overflow-auto">
      {genres.map((genres) => (
        <Link
          key={genres.id}
          href={
            pathname +
            "?" +
            createQueryString(
              "genreIds",
              genreIds.includes(genres.id)
                ? genreIds.filter((id) => id !== genres.id).join("_")
                : [...genreIds, genres.id].join("_")
            )
          }
        >
          <Button
            key={genres.id}
            className={cn("bg-white hover:bg-zinc-400 text-zinc-600", {
              "bg-green-500 text-white hover:bg-green-800": genreIds.find(
                (genre) => genre === genres.id
              ),
            })}
          >
            {genres.name}
          </Button>
        </Link>
      ))}
    </div>
  );
}
