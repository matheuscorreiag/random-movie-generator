"use client";

import { Genres } from "@/actions/get-movie-genres";
import { Button } from "@/components/ui/button";

type MovieGenresProps = {
  genres: Genres[];
};
export function MovieGenres({ genres }: MovieGenresProps) {
  return (
    <div className="flex gap-x-4 overflow-x-scroll">
      {genres.map((genres) => (
        <Button
          key={genres.id}
          className="bg-white hover:bg-zinc-400 text-zinc-600"
        >
          {genres.name}
        </Button>
      ))}
    </div>
  );
}
