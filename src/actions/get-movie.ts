"use server";

import { env } from "@/env/env";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type GetMovieResponse = {
  page: number;
  results: Movie[];
};

type GetMovieProps = {
  genreIds: string;
};
export async function getMovie({
  genreIds,
}: GetMovieProps): Promise<Movie | null> {
  if (!genreIds) return null;

  const genresSplitted = genreIds.split("_").map((genre) => parseInt(genre));
  const formattedGenres = genresSplitted.join(",");

  console.log("formattedGenres", formattedGenres);

  const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${formattedGenres}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${env.ACCESS_TOKEN_AUTH}`,
    },
  };

  const response = await fetch(url, options);

  const data = (await response.json()) as Promise<GetMovieResponse>;

  return (await data).results[0];
}
