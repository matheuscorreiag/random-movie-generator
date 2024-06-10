"use server";

import { env } from "@/env/env";

export type Genres = {
  id: number;
  name: string;
};
type MovieGenresResponse = {
  genres: Genres[];
};
export async function getMovieGenres(): Promise<MovieGenresResponse> {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${env.ACCESS_TOKEN_AUTH}`,
    },
  };

  const response = await fetch(url, options);

  const data = response.json() as Promise<MovieGenresResponse>;

  return data;
}
