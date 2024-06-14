import { getMovieGenres } from "@/actions/get-movie-genres";
import { GenerateRandomMovie } from "@/components/custom/GenerateRandomMovie";
import { MovieGenres } from "@/components/custom/MovieGenres";
import { Suspense } from "react";

export default async function Home() {
  const movieGenres = await getMovieGenres();

  return (
    <main className="bg-zinc-900 w-full h-full items-center flex justify-center flex-col py-12 px-4">
      <div className="w-full md:max-w-md flex gap-4 flex-col">
        <label className="text-zinc-300 font-bold text-sm">
          Select the movie genres you would like to watch...
        </label>
        <Suspense>
          <MovieGenres genres={movieGenres.genres} />
        </Suspense>
        <label className="text-xs underline text-zinc-300 hover:text-zinc-500 transition-all cursor-pointer">
          Aditional filters
        </label>
        <Suspense>
          <GenerateRandomMovie />
        </Suspense>
      </div>
    </main>
  );
}
