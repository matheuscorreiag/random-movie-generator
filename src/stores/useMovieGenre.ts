import { create } from "zustand";

type MovieGenre = {
  genreId: number | null;
  setGenreId: (genreId: number) => void;
};
export const useMovieGenre = create<MovieGenre>((set) => ({
  genreId: null,
  setGenreId: (genreId: number) => set({ genreId }),
}));
