import { state } from '../state/state';

export function addPaginationHandler() {
  const pagFirstBut = document.querySelector('.pagination-first-button');
  const pagPrevBut = document.querySelector('.pagination-previous-button');
  const pagNextBut = document.querySelector('.pagination-next-button');
  const pagLastBut = document.querySelector('.pagination-last-button');
  const pagPages = document.querySelector('.pagination-pages');

  const choosePage = function (event) {
    const pageNumber = event.target.closest('.pagination-page-number');
    if (!pageNumber) return;

    state.pagination.choosePage(Number(pageNumber.innerHTML));
  };

  pagFirstBut.addEventListener('click', () => state.pagination.reset());
  pagPrevBut.addEventListener('click', () => state.pagination.back());
  pagNextBut.addEventListener('click', () => state.pagination.next());
  pagLastBut.addEventListener('click', () => state.pagination.last());
  pagPages.addEventListener('click', choosePage);
}
