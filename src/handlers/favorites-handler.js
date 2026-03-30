import { getExercise } from '../api/your-energy-api';
import { renderFavorites } from '../render/render-favorites';
import { state } from '../state/state';

const clearOutdatedLocalStorage = function () {
  const version = localStorage.getItem('version');

  if (version === null) {
    localStorage.clear();
    localStorage.setItem('version', '1.0.1');
  }
};

clearOutdatedLocalStorage();

let cacheFavoriteIds;

rebuildCache();

export function getFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) ?? [];
  return favorites;
}

export async function putFavorite(newExerciseId) {
  const favorites = getFavorites();
  const newFavorites = JSON.stringify([...favorites, newExerciseId]);
  localStorage.setItem('favorites', newFavorites);
  putCache(newExerciseId);
}

export function removeFavorite(exerciseId) {
  const favorites = getFavorites();
  const newFavorites = JSON.stringify(
    favorites.filter(item => item != exerciseId)
  );
  localStorage.setItem('favorites', newFavorites);
  popCache(exerciseId);
  if (state.pagination.purpose === 'favorites') {
    state.pagination.updateSize(getFavorites().length);
    renderFavorites();
  }
}

export function isFavorite(exerciseId) {
  return cacheFavoriteIds.has(exerciseId);
}

function rebuildCache() {
  cacheFavoriteIds = new Set(getFavorites());
}

function putCache(exerciseId) {
  cacheFavoriteIds.add(exerciseId);
}

function popCache(exerciseId) {
  cacheFavoriteIds.delete(exerciseId);
}
