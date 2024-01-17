import { Artwork, ArtworkDetail } from "../types";

export const FETCH_ARTWORKS_REQUEST = 'FETCH_ARTWORKS_REQUEST';
export const FETCH_ARTWORKS_SUCCESS = 'FETCH_ARTWORKS_SUCCESS';
export const FETCH_ARTWORKS_FAILURE = 'FETCH_ARTWORKS_FAILURE';

export const FETCH_ARTWORK_DETAIL_REQUEST = 'FETCH_ARTWORK_DETAIL_REQUEST';
export const FETCH_ARTWORK_DETAIL_SUCCESS = 'FETCH_ARTWORK_DETAIL_SUCCESS';
export const FETCH_ARTWORK_DETAIL_FAILURE = 'FETCH_ARTWORK_DETAIL_FAILURE';
export const RESET_ARTWORK_DETAIL = 'RESET_ARTWORK_DETAIL';


export type ActionTypes =
  | { type: typeof FETCH_ARTWORKS_REQUEST }
  | { type: typeof FETCH_ARTWORKS_SUCCESS; payload: Artwork[] }
  | { type: typeof FETCH_ARTWORKS_FAILURE; payload: string }
  | { type: typeof FETCH_ARTWORK_DETAIL_REQUEST }
  | { type: typeof FETCH_ARTWORK_DETAIL_SUCCESS; payload: ArtworkDetail }
  | { type: typeof FETCH_ARTWORK_DETAIL_FAILURE; payload: string }
  | { type: typeof RESET_ARTWORK_DETAIL };

