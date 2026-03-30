import { renderExerciseDetails } from '../render/render-exercise-details';
import { renderFavorites } from '../render/render-favorites';
import { addFavoritesButtonsHandlers } from './favorites-buttons-handler';
import { removeFavorite } from './favorites-handler';
import { addModalHandlers } from './modal-handler';

const header = document.querySelector('header');
const body = document.querySelector('body');

export function addExerciseDetailsHandler(contentList) {
  contentList.addEventListener('click', event => {
    const quickRemoveBtn = event.target.closest('.remove-favorite-quick-btn');
    const startBtn = event.target.closest('.start-button');

    if (startBtn) {
      header.style.visibility = 'hidden';
      body.classList.add('modal-open');
      addModalHandlers();
      addFavoritesButtonsHandlers();
      renderExerciseDetails(startBtn.dataset.id);
    } else if (quickRemoveBtn) {
      removeFavorite(quickRemoveBtn.dataset.id);
      renderFavorites();
    }
  });
}
