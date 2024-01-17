import { ThunkAction } from 'redux-thunk';
import { Artwork, ArtworkDetail } from '../types';
import {
  FETCH_ARTWORKS_REQUEST,
  FETCH_ARTWORKS_SUCCESS,
  FETCH_ARTWORKS_FAILURE,
  ActionTypes,
  FETCH_ARTWORK_DETAIL_REQUEST,
  FETCH_ARTWORK_DETAIL_SUCCESS,
  FETCH_ARTWORK_DETAIL_FAILURE,
  RESET_ARTWORK_DETAIL
} from './actionTypes';
import type { RootState } from './reducer';
import { convertToCamelCase } from '../utils';

type ThunkResult<R> = ThunkAction<R, RootState, undefined, ActionTypes>;

export const fetchArtworksRequest = (): ActionTypes => ({
  type: FETCH_ARTWORKS_REQUEST
});

export const fetchArtworksSuccess = (artworks: Artwork[]): ActionTypes => {

  return {
    type: FETCH_ARTWORKS_SUCCESS,
    payload: artworks
  }
}

export const fetchArtworksFailure = (error: string): ActionTypes => ({
  type: FETCH_ARTWORKS_FAILURE,
  payload: error
});

export const fetchArtworks = (): ThunkResult<void> => async (dispatch) => {
  dispatch(fetchArtworksRequest());
  try {
    const response = await fetch('https://corsproxy.io/?https://api.artic.edu/api/v1/artworks');
    const data = await response.json();
    const artworks = data.data.map((artwork: { [x: string]: any; }) => convertToCamelCase(artwork));
    dispatch(fetchArtworksSuccess(artworks));
  } catch (error) {
    dispatch(fetchArtworksFailure(error as string));
  }
};

export const fetchArtworkDetailRequest = (): ActionTypes => ({
  type: FETCH_ARTWORK_DETAIL_REQUEST
});

export const fetchArtworkDetailSuccess = (artworkDetail: ArtworkDetail): ActionTypes => ({
  type: FETCH_ARTWORK_DETAIL_SUCCESS,
  payload: artworkDetail
});

export const fetchArtworkDetailFailure = (error: string): ActionTypes => ({
  type: FETCH_ARTWORK_DETAIL_FAILURE,
  payload: error
});


export const fetchArtworkDetail = (id: number): ThunkResult<void> => async (dispatch) => {
  dispatch(fetchArtworkDetailRequest());
  try {
    // Fetch the artwork details
    const response = await fetch(`https://corsproxy.io/?https://api.artic.edu/api/v1/artworks/${id}`);
    const data = await response.json();
    let artworkDetail = convertToCamelCase(data.data) as ArtworkDetail;

    // Check if the image_id exists and then fetch the image using the IIIF Image API
    if (data.data.image_id) {
      const imageUrl = `https://www.artic.edu/iiif/2/${data.data.image_id}/full/843,/0/default.jpg`;
      // Add the imageUrl to the artworkDetail object
      artworkDetail = { ...artworkDetail, imageUrl };
    }

    dispatch(fetchArtworkDetailSuccess(artworkDetail));
  } catch (error) {
    dispatch(fetchArtworkDetailFailure(error as string));
  }
};


// export const fetchArtworkDetail = (id: number): ThunkResult<void> => async (dispatch) => {
//   dispatch(fetchArtworkDetailRequest());
//   try {
//     const response = await fetch(`https://corsproxy.io/?https://api.artic.edu/api/v1/artworks/${id}`);
//     const data = await response.json();
//     const artworkDetail = convertToCamelCase(data.data) as ArtworkDetail;
//     dispatch(fetchArtworkDetailSuccess(artworkDetail));
//   } catch (error) {
//     dispatch(fetchArtworkDetailFailure(error as string));
//   }
// };

export const resetArtworkDetail = (): ActionTypes => ({
  type: RESET_ARTWORK_DETAIL
});


