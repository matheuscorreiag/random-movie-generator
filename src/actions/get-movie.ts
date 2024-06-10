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
  total_pages: number;
  total_results: number;
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
  let formattedGenres =
    genresSplitted.length > 0
      ? genresSplitted.join("|")
      : genresSplitted[0].toString();

  const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${formattedGenres}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${env.ACCESS_TOKEN_AUTH}`,
    },
  };

  const response = await fetch(url, {
    ...options,
    cache: "no-store",
  });

  let jsonResp = (await response.json()) as GetMovieResponse;

  const page = jsonResp.total_pages > 500 ? 500 : jsonResp.total_pages;

  const randomPage = Math.floor(Math.random() * page) + 1;

  const randomUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=${formattedGenres}&page=${randomPage}&sort_by=popularity.desc`;

  const randomResponse = await fetch(randomUrl, options);

  jsonResp = (await randomResponse.json()) as GetMovieResponse;

  if (!jsonResp.results) return null;

  const randomMovie = jsonResp.results[0];

  return randomMovie;
}
