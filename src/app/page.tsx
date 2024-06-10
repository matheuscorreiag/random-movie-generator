import { getMovie } from "@/actions/get-movie";
import { getMovieGenres } from "@/actions/get-movie-genres";
import { MovieGenres } from "@/components/custom/MovieGenres";
import { RandomMovie } from "@/components/custom/RandomMovie";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const movieGenres = await getMovieGenres();

  return (
    <main className="bg-zinc-900 w-screen h-screen items-center flex justify-center flex-col">
      <div className="max-w-lg flex gap-4 flex-col">
        <h1 className="text-white"></h1>
        <MovieGenres genres={movieGenres.genres} />

        {searchParams.genreId && (
          <RandomMovie genreId={parseInt(searchParams.genreId as string)} />
        )}

        <Button className="bg-green-500 w-full hover:bg-green-800 h-12 font-bold">
          Generate
        </Button>
      </div>
    </main>
  );
}
