import { getExercise } from '../api/your-energy-api';
import { isFavorite } from '../handlers/favorites-handler';
import { capitalize } from '../utility/capitalize';

const modalBackdrop = document.querySelector('.modal-backdrop');
const modalBody = document.querySelector('.modal-body');

export async function renderExerciseDetails(id) {
  const ex = await getExercise(id);
  modalBody.innerHTML = `
    <div class="exercise-details-wrapper">
        <img src="${ex.gifUrl}" class="exercise-gif" alt="Gif example of how to do the exercise" width="258" height="258"/>
        <div class="exercise-details-container">
            <div class="exercise-header">
                <h3 class="exercise-details-title">${capitalize(ex.name)}</h3>
                <div class="exercise-details-rating">
                    <span class="exercise-details-rating-value">${ex.rating.toFixed(1)}</span>
                    <div class="rating-stars-container">
                        
                    </div>
                </div>
            </div>
            <ul class="quick-info-list">
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Target</p>
                    <p class="quick-info-value">${capitalize(ex.target)}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Body Part</p>
                    <p class="quick-info-value">${capitalize(ex.bodyPart)}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Equipment</p>
                    <p class="quick-info-value">${capitalize(ex.equipment)}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Popular</p>
                    <p class="quick-info-value">${ex.popularity}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Burned Calories</p>
                    <p class="quick-info-value">${ex.burnedCalories}/${ex.time} min</p>
                </li>
            </ul>
            <p class="exercise-detailed-description">${ex.description}</p>

            <div class="exercise-action-buttons">
                ${isFavorite(ex._id) ? '<button type="button" class="remove-from-favorites-btn" data-id="' + ex._id + '" aria-label="Remove from favorites">Remove from<svg class="bin-icon" width="20" height="20"><use href="button-icons/delete.svg"></use></svg></button>' : '<button type="button" class="add-to-favorites-btn" data-id="' + ex._id + '" aria-label="Add to favorites">Add to favorites<svg class="like-icon" width="20" height="20"><use href="button-icons/like.svg"></use></svg></button>'}
                <button type="button" class="give-rating-btn" data-id="${ex._id}" aria-label="Give exercise a rating">
                    Give a rating
                </button>
            </div>
        </div>
    </div>
    `;

  const rating = ex.rating;
  const starsContainer = modalBody.querySelector('.rating-stars-container');

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.classList.add('star', 'filled');
    star.innerHTML = '★';

    let fill = 0;
    if (rating >= i) {
      fill = 100;
    } else if (rating > i - 1) {
      fill = (rating - (i - 1)) * 100;
    } else {
      fill = 0;
    }

    star.style.setProperty('--percent', `${fill}%`);
    starsContainer.appendChild(star);
  }
  modalBackdrop.classList.remove('is-hidden');
}
