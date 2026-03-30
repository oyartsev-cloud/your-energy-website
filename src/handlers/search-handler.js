import { renderExercises } from '../render/render-exercises';
import Pagination from '../utility/pagination';
import { state } from '../state/state';

const searchInput = document.getElementById('exercises-search');
const searchResetBtn = document.querySelector('.search-delete-button');

export function addSearchHandler(searchForm) {
  searchForm.addEventListener('submit', event => {
    event.preventDefault();

    state.pagination = new Pagination('exercises');
    if (searchInput.value != '') {
      renderExercises(searchInput.value);
    } else {
      renderExercises();
    }
  });
  searchForm.addEventListener('input', event => {
    if (event.target.value != '') {
      searchResetBtn.style.display = 'block';
    } else {
      searchResetBtn.style.display = 'none';
    }
  });
  searchForm.addEventListener('reset', () => {
    searchResetBtn.style.display = 'none';
    state.pagination = new Pagination('exercises');
    renderExercises();
  });
}
