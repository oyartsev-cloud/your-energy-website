import { getContentByFilter } from '../api/your-energy-api';
import { capitalize } from '../utility/capitalize';
import { state } from '../state/state';
import { renderPagination } from './render-pagination';
const contentList = document.querySelector('.content-list');

export async function renderFilters() {
  const data = (await getContentByFilter(state.filter))
    .map(el => {
      return `<li class="filter-tile" data-value="${el.name}" aria-label="${el.name}">
            <img src="${el.imgURL}" class="filter-image" alt="${el.name}" loading="lazy"/>
            <h3 class="filter-name">${capitalize(el.name)}</h3>
            <p class="filter-category">${el.filter}</p>
        </li>`;
    })
    .join('');

  contentList.innerHTML = data;
  renderPagination(state.pagination.page, state.pagination.maxPage);
}
