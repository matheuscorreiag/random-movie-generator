import { create } from "zustand";

type MovieGenre = {
  genreIds: number[];
  setGenreId: (genreId: number) => void;
  removeGenreId: (genreId: number) => void;
};
export const useMovieGenre = create<MovieGenre>((set) => ({
  genreIds: [],
  setGenreId: (genreId: number) =>
    set((state) => ({
      genreIds: [...state.genreIds, genreId],
    })),
  removeGenreId: (genreId: number) =>
    set((state) => ({
      genreIds: state.genreIds.filter((genre) => genre !== genreId),
    })),
}));
