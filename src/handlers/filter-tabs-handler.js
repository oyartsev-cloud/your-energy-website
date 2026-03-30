import { renderFilters } from '../render/render-filters';
import { state } from '../state/state';
import Pagination from '../utility/pagination';
const mainHeading = document.querySelector('.main-heading');
const categoryHeading = document.querySelector('.category-heading');
const exercisesSearch = document.querySelector('.exercises-search');

export function addFilterTabsHandler(filterTabsList) {
  filterTabsList.addEventListener('click', event => {
    const btn = event.target.closest('.filter-tabs-item');
    if (!btn) return;

    state.pagination = new Pagination('filters');
    mainHeading.innerHTML = 'Exercises';
    categoryHeading.style.display = 'none';
    exercisesSearch.style.display = 'none';

    document
      .querySelectorAll('.filter-tabs-item')
      .forEach(item => item.classList.remove('active'));
    btn.classList.add('active');

    state.filter = btn.dataset.filter;
    renderFilters();
  });
}
