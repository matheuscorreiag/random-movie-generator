import { getMovieGenres } from "@/actions/get-movie-genres";
import { GenerateRandomMovie } from "@/components/custom/GenerateRandomMovie";
import { MovieGenres } from "@/components/custom/MovieGenres";
import { RandomMovie } from "@/components/custom/RandomMovie";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const movieGenres = await getMovieGenres();

  return (
    <main className="bg-zinc-900 w-full h-full items-center flex justify-center flex-col">
      <div className="w-full md:max-w-md flex gap-4 flex-col p-4 bg-red-600">
        <label className="text-zinc-300 font-bold text-sm">
          Select the movie genres you would like to watch...
        </label>
        <MovieGenres genres={movieGenres.genres} />
        <RandomMovie genreIds={searchParams.genreIds as string} />
        <GenerateRandomMovie />
      </div>
    </main>
  );
}
