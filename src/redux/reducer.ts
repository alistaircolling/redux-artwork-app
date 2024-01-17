import { combineReducers } from 'redux';
import {
  FETCH_ARTWORKS_REQUEST,
  FETCH_ARTWORKS_SUCCESS,
  FETCH_ARTWORKS_FAILURE,
  ActionTypes,
  FETCH_ARTWORK_DETAIL_REQUEST,
  FETCH_ARTWORK_DETAIL_SUCCESS,
  FETCH_ARTWORK_DETAIL_FAILURE,
  RESET_ARTWORK_DETAIL,
} from './actionTypes';
import { Artwork, ArtworkDetail } from '../types';

interface ArtworkDetailState {
  loading: boolean;
  artworkDetail: ArtworkDetail | null
  error: string;
}
interface ArtworksState {
  loading: boolean;
  artworks: Artwork[];
  error: string;
}

export type RootState = {
  artworks: ArtworksState;
  artworkDetail: ArtworkDetailState;
};

const initialArtworksState: ArtworksState = {
  loading: false,
  artworks: [],
  error: '',
};

const initialArtworkDetailState: ArtworkDetailState = {
  loading: false,
  artworkDetail: null,
  error: ''
};


const artworkDetailReducer = (
  state = initialArtworkDetailState,
  action: ActionTypes
): ArtworkDetailState => {
  switch (action.type) {
    case FETCH_ARTWORK_DETAIL_REQUEST:
      return { ...state, loading: true };
    case FETCH_ARTWORK_DETAIL_SUCCESS:
      return { ...state, loading: false, artworkDetail: action.payload, error: '' };
    case FETCH_ARTWORK_DETAIL_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case RESET_ARTWORK_DETAIL:
      return { ...initialArtworkDetailState };
    default:
      return state;
  }
};


const artworksReducer = (
  state = initialArtworksState,
  action: ActionTypes
): ArtworksState => {
  switch (action.type) {
    case FETCH_ARTWORKS_REQUEST:
      return { ...state, loading: true };
    case FETCH_ARTWORKS_SUCCESS:
      return { ...state, loading: false, artworks: action.payload, error: '' };
    case FETCH_ARTWORKS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  artworks: artworksReducer,
  artworkDetail: artworkDetailReducer,
});

export default rootReducer;
