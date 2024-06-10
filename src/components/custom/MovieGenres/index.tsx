"use client";

import { Genres } from "@/actions/get-movie-genres";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type MovieGenresProps = {
  genres: Genres[];
};
export function MovieGenres({ genres }: MovieGenresProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleMovieGenres(genreId: number) {
    const params = new URLSearchParams(searchParams);

    params.set("genreId", genreId.toString());

    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="flex gap-x-4 overflow-x-scroll">
      {genres.map((genres) => (
        <Button
          key={genres.id}
          className={cn("bg-white hover:bg-zinc-400 text-zinc-600", {
            "bg-green-500 text-white hover:bg-green-800":
              searchParams.get("genreId") === genres.id.toString(),
          })}
          onClick={() => handleMovieGenres(genres.id)}
        >
          {genres.name}
        </Button>
      ))}
    </div>
  );
}
