import { renderExercises } from '../render/render-exercises';
import { state } from '../state/state';
import Pagination from '../utility/pagination';
import { capitalize } from '../utility/capitalize';
const mainHeading = document.querySelector('.main-heading');
const categoryHeading = document.querySelector('.category-heading');
const exercisesSearch = document.querySelector('.exercises-search');

export function addFilterHandlers(contentList) {
  contentList.addEventListener('click', event => {
    const filterTile = event.target.closest('.filter-tile');
    if (!filterTile) return;

    state.pagination = new Pagination('exercises');
    mainHeading.innerHTML = 'Exercises /';
    categoryHeading.innerHTML = capitalize(filterTile.dataset.value);
    categoryHeading.style.display = 'block';
    exercisesSearch.style.display = 'flex';

    state.filterValue = filterTile.dataset.value;
    renderExercises();
  });
}
