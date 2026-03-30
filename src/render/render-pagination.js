const paginationDiv = document.querySelector('.pagination');
const paginationPagesList = document.querySelector('.pagination-pages');
const paginationBackButtons = document.querySelector(
  '.pagination-back-wrapper'
);
const paginationNextButtons = document.querySelector(
  '.pagination-next-wrapper'
);

export function renderPagination(curPage, maxPage) {
  if (maxPage === 1) {
    paginationDiv.style.display = 'none';
  } else {
    paginationDiv.style.display = 'flex';
  }

  if (curPage === 1) {
    paginationBackButtons.style.opacity = '20%';
  } else {
    paginationBackButtons.style.opacity = '100%';
  }

  if (curPage === maxPage) {
    paginationNextButtons.style.opacity = '20%';
  } else {
    paginationNextButtons.style.opacity = '100%';
  }

  let pageNumbers = [];
  for (let i = curPage - 2; i <= curPage + 2; i++) {
    if (i > 0 && i <= maxPage) {
      pageNumbers.push(i);
    }
  }
  let markup = pageNumbers
    .map(pageNumber => {
      return `<li class="pagination-page-number ${pageNumber == curPage ? 'current' : ''}">${pageNumber}</li>`;
    })
    .join('');

  if (curPage < maxPage - 2) {
    markup += '<li class="pagination-continues">...</li>';
  }

  paginationPagesList.innerHTML = markup;
}
