import { getFavorites } from '../handlers/favorites-handler';
import { capitalize } from '../utility/capitalize';
import { state } from '../state/state';
import { getExercise } from '../api/your-energy-api';

const favoriteList = document.querySelector('.favorite-exercises-list');
const pagination = document.querySelector('.pagination');

export async function renderFavorites() {
  const favoriteExercises = getFavorites();
  if (favoriteExercises.length === 0) {
    favoriteList.innerHTML = `
    <li class="favorites-placeholder">
        It appears that you haven't added any exercises to your
        favorites yet. To get started, you can add exercises that you
        like to your favorites for easier access in the future.
    </li>`;

    pagination.style.display = 'none';
    return;
  }

  const start = (state.pagination.page - 1) * state.pagination.perPage;
  const end = state.pagination.page * state.pagination.perPage;
  const pageIds = favoriteExercises.slice(start, end);

  const items = await Promise.all(
    pageIds.map(async exerciseId => {
      const el = await getExercise(exerciseId);
      return `
          <li class="exercise">
            <div class="exercise-line-wrapper">
                <span class="workout">workout</span>
                <div class="rating">
                    <button type="button" class="remove-favorite-quick-btn" data-id="${el._id}">
                        <svg class="bin-icon" width="18" height="18">
                            <use href="button-icons/delete.svg"></use>
                        </svg>
                    </button>
                </div>
                <button class="start-button" data-id="${el._id}" aria-label="Start exercise">
                    Start
                    <svg class="start-arrow" width="16" height="16">
                        <use href="icon-pack/start-arrow.svg"></use>
                    </svg>
                </button>
            </div>
            <div class="exercise-line-wrapper">
                <div class="exercise-icon-wrapper">
                    <svg class="exercise-icon" width="24" height="24">
                        <use href="icon-pack/running-icon.svg"></use>
                    </svg>
                </div>
                <p class="exercise-name">${capitalize(el.name)}</p>
            </div>
            <div class="exercise-line-wrapper">
                <p class="exercise-info">Burned calories: <span class="exercise-info-value">${el.burnedCalories} / ${el.time}</span></p>
                <p class="exercise-info">Body part: <span class="exercise-info-value">${capitalize(el.bodyPart)}</span></p>
                <p class="exercise-info">Target: <span class="exercise-info-value">${capitalize(el.target)}</span></p>
            </div>
          </li>`;
    })
  );

  favoriteList.innerHTML = items.join('');
}
