export interface Film {
  id: number;
  name: string;
  year: number;
  description: string;
  genre: number[],
  imageUrl?: string
}

export interface FilmPopupData extends Film{
  isFavorite: boolean;
  toggleFavorite: () => void;
}

export const Genres = [null, 'драма', 'биография', 'история', 'фэнтези', 'приключения', 'боевик', 'мультфильм', 'комедия', 'триллер', 'детектив', 'фантастика'];



