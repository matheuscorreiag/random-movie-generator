"use client";

import { Genres } from "@/actions/get-movie-genres";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMovieGenre } from "@/stores/useMovieGenre";

type MovieGenresProps = {
  genres: Genres[];
};
export function MovieGenres({ genres }: MovieGenresProps) {
  const { genreIds, setGenreId, removeGenreId } = useMovieGenre();

  function handleMovieGenres(genreId: number) {
    if (genreIds.find((genre) => genre === genreId)) {
      removeGenreId(genreId);
      return;
    }
    setGenreId(genreId);
  }
  return (
    <div className="flex gap-x-4 items-center w-[350px] overflow-auto sm:w-full max-w-lg">
      {genres.map((genres) => (
        <Button
          key={genres.id}
          className={cn("bg-white hover:bg-zinc-400 text-zinc-600", {
            "bg-green-500 text-white hover:bg-green-800": genreIds.find(
              (genre) => genre === genres.id
            ),
          })}
          onClick={() => handleMovieGenres(genres.id)}
        >
          {genres.name}
        </Button>
      ))}
    </div>
  );
}
