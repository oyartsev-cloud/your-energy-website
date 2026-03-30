import { getExercises } from '../api/your-energy-api';
import { capitalize } from '../utility/capitalize';
import { state } from '../state/state';
import { renderPagination } from './render-pagination';
const contentList = document.querySelector('.content-list');

export async function renderExercises(keyword = '') {
  const data = (await getExercises(keyword))
    .map(el => {
      return `
      <li class="exercise">
        <div class="exercise-line-wrapper">
            <span class="workout">workout</span>
            <div class="rating">
                <span class="rating-value">${el.rating.toFixed(1)}</span>
                <svg class="star-icon" width="18" height="18">
                    <use href="icon-pack/star-icon.svg"></use>
                </svg>
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
    .join('');

  contentList.innerHTML = data;
  renderPagination(state.pagination.page, state.pagination.maxPage);
}
