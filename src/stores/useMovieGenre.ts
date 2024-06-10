import { create } from "zustand";

type MovieGenre = {
  genreIds: number[];
  setGenreId: (genreId: number) => void;
};
export const useMovieGenre = create<MovieGenre>((set) => ({
  genreIds: [],
  setGenreId: (genreId: number) =>
    set((state) => ({
      genreIds: [...state.genreIds, genreId],
    })),
}));
