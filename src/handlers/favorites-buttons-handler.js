import { putFavorite, removeFavorite } from './favorites-handler';

const modalBody = document.querySelector('.modal-body');

const onClickFavoritesButtons = function (event) {
  const addFavBtn = event.target.closest('.add-to-favorites-btn');
  const removeFavBtn = event.target.closest('.remove-from-favorites-btn');

  if (addFavBtn) {
    const exerciseId = addFavBtn.dataset.id;
    putFavorite(exerciseId);
    const removeButtonHTML = `
        <button type="button" class="remove-from-favorites-btn" aria-label="Remove from favorites" data-id="${exerciseId}">
            Remove from
            <svg class="bin-icon" width="20" height="20">
                <use href="button-icons/delete.svg"></use>
            </svg>
        </button>
      `;
    const removeButtonElement = new DOMParser().parseFromString(
      removeButtonHTML,
      'text/html'
    ).body.firstChild;
    addFavBtn.replaceWith(removeButtonElement);
  } else if (removeFavBtn) {
    const exerciseId = removeFavBtn.dataset.id;
    removeFavorite(exerciseId);
    const addButtonHTML = `
        <button type="button" class="add-to-favorites-btn" aria-label="Add to favorites" data-id="${exerciseId}">
            Add to favorites
            <svg class="like-icon" width="20" height="20">
                <use href="button-icons/like.svg"></use>
            </svg>
        </button>
      `;
    const addButtonElement = new DOMParser().parseFromString(
      addButtonHTML,
      'text/html'
    ).body.firstChild;
    removeFavBtn.replaceWith(addButtonElement);
  }
};

export function addFavoritesButtonsHandlers() {
  modalBody.addEventListener('click', onClickFavoritesButtons);
}

export function removeFavoritesButtonsHandlers() {
  modalBody.removeEventListener('click', onClickFavoritesButtons);
}
