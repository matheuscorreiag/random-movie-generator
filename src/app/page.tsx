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
    <main className="bg-zinc-900 w-screen h-screen items-center flex justify-center flex-col">
      <div className="max-w-lg flex gap-4 flex-col">
        <label className="text-zinc-300 font-bold">
          Select the movie genres you would like to watch...
        </label>

        <MovieGenres genres={movieGenres.genres} />

        <RandomMovie genreIds={searchParams.genreIds as string} />

        <GenerateRandomMovie />
      </div>
    </main>
  );
}
