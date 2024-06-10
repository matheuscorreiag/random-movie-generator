"use server";

import { env } from "@/env/env";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
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
  genreId: number;
};
export async function getMovie({
  genreId,
}: GetMovieProps): Promise<GetMovieResponse> {
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${env.ACCESS_TOKEN_AUTH}`,
    },
  };

  const response = await fetch(url, options);

  const data = response.json() as Promise<GetMovieResponse>;

  return data;
}
