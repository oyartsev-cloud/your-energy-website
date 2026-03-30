import { renderExercises } from '../render/render-exercises';
import { renderFavorites } from '../render/render-favorites';
import { renderFilters } from '../render/render-filters';
import { renderPagination } from '../render/render-pagination';

export default class Pagination {
  perPage;
  page;
  maxPage;
  purpose;

  constructor(purpose, numberOfElements = null) {
    this.purpose = purpose;
    this.page = 1;

    if (this.purpose === 'filters') {
      if (window.matchMedia('(min-width: 768px)').matches) {
        this.perPage = 12;
      } else {
        this.perPage = 9;
      }
    } else if (
      this.purpose === 'favorites' &&
      window.matchMedia('(min-width: 1440px)').matches
    ) {
      this.perPage = 200;
    } else if (this.purpose === 'exercises' || 'favorites') {
      if (window.matchMedia('(min-width: 768px)').matches) {
        this.perPage = 10;
      } else {
        this.perPage = 8;
      }
    }
    if (numberOfElements) {
      this.updateSize(numberOfElements);
    } else {
      this.maxPage = 1;
    }

    renderPagination(this.page, this.maxPage);
  }

  getPage() {
    return this.page;
  }

  setMaxPage(maxPage) {
    this.maxPage = maxPage;
  }

  updateSize(numberOfElements) {
    this.maxPage = Math.ceil(numberOfElements / this.perPage);
  }

  choosePage(pageNumber) {
    this.page = pageNumber;

    renderPagination(this.page, this.maxPage);
    if (this.purpose === 'filters') {
      renderFilters();
    } else if (this.purpose === 'exercises') {
      renderExercises();
    } else if (this.purpose === 'favorites') {
      renderFavorites();
    }
  }

  next() {
    if (this.page < this.maxPage) {
      this.page++;
    }

    renderPagination(this.page, this.maxPage);
    if (this.purpose === 'filters') {
      renderFilters();
    } else if (this.purpose === 'exercises') {
      renderExercises();
    } else if (this.purpose === 'favorites') {
      renderFavorites();
    }
  }

  back() {
    if (this.page > 1) {
      this.page--;
    }
    renderPagination(this.page, this.maxPage);
    if (this.purpose === 'filters') {
      renderFilters();
    } else if (this.purpose === 'exercises') {
      renderExercises();
    } else if (this.purpose === 'favorites') {
      renderFavorites();
    }
  }

  reset() {
    this.page = 1;
    renderPagination(this.page, this.maxPage);
    if (this.purpose === 'filters') {
      renderFilters();
    } else if (this.purpose === 'exercises') {
      renderExercises();
    } else if (this.purpose === 'favorites') {
      renderFavorites();
    }
  }

  last() {
    this.page = this.maxPage;
    renderPagination(this.page, this.maxPage);
    if (this.purpose === 'filters') {
      renderFilters();
    } else if (this.purpose === 'exercises') {
      renderExercises();
    } else if (this.purpose === 'favorites') {
      renderFavorites();
    }
  }
}
