import { getMovieGenres } from "@/actions/get-movie-genres";
import { MovieGenres } from "@/components/custom/MovieGenres";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const movieGenres = await getMovieGenres();

  console.log(movieGenres);
  return (
    <main className="bg-zinc-900 w-screen h-screen items-center flex justify-center flex-col">
      <div className="max-w-lg flex gap-4 flex-col">
        <h1 className="text-white"></h1>
        <MovieGenres genres={movieGenres.genres} />

        <Button className="bg-green-500 w-full hover:bg-green-800">
          Generate
        </Button>
      </div>
    </main>
  );
}
