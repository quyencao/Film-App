import {FETCH_POPULAR_FILMS} from './types';
import axios from 'axios';

const API_KEY = "6358eb2ac52b34da42bd4b5f80727332";

export function fetchPopularFilms() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;

  const request = axios.get(url);

  return {
    type: FETCH_POPULAR_FILMS,
    payload: request
  }
}
