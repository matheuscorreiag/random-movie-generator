import { Movie } from "@/actions/get-movie";
import Image from "next/image";

type RandomMovieProps = {
  movie: Movie | null;
};
export function RandomMovie({ movie }: RandomMovieProps) {
  return (
    movie && (
      <>
        <Image
          alt="movie poster"
          src={"http://image.tmdb.org/t/p/w500" + movie?.poster_path}
          width={400}
          height={200}
          className="w-full max-h-[200px] min-h-[200px] object-contain rounded-lg mt-12 mb-6"
        />
        )
        <h2 className="text-white font-bold">
          {movie && movie?.title + " - " + movie?.release_date.split("-")[0]}
        </h2>
        <h2 className="text-white max-h-[200px] overflow-y-scroll mt-12 mb-16">
          {movie?.overview}
        </h2>
      </>
    )
  );
}
