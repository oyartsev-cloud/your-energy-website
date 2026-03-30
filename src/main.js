import Pagination from './utility/pagination.js';
import { addFilterTabsHandler } from './handlers/filter-tabs-handler.js';
import { renderFilters } from './render/render-filters.js';
import { addPaginationHandler } from './handlers/pagination-handler.js';
import { state } from './state/state.js';
import { addMenuHandlers } from './handlers/menu-handler.js';
import { addFilterHandlers } from './handlers/filter-handler.js';
import { setQuote } from './utility/set-quote.js';
import { addSubscriptionFormHandler } from './handlers/subscription-form-handler.js';
import { addSearchHandler } from './handlers/search-handler.js';
import { addExerciseDetailsHandler } from './handlers/exercise-details-handler.js';
import { renderFavorites } from './render/render-favorites.js';
import { getFavorites } from './handlers/favorites-handler.js';

function initNavigation() {
  let url = window.location;
  const navList = document.querySelector('.nav-list');
  const pathIndex = url.pathname.lastIndexOf('/') + 1;
  let pageName = url.pathname.slice(pathIndex);
  pageName = pageName.length > 0 ? pageName : 'index.html';

  navList
    .querySelector('a[href="' + pageName + '"]')
    .parentNode.classList.add('active');

  if (pageName === 'index.html') {
    initHomePage();
  } else {
    initFavoritesPage();
  }
}

async function initHomePage() {
  addMenuHandlers();

  const filterTabsList = document.querySelector('.filter-tabs-list');
  const contentList = document.querySelector('.content-list');
  addFilterTabsHandler(filterTabsList);

  const searchForm = document.querySelector('.exercises-search');
  addSearchHandler(searchForm);

  state.pagination = new Pagination('filters');
  renderFilters('Muscles');
  addFilterHandlers(contentList);

  setQuote();

  addPaginationHandler();

  addExerciseDetailsHandler(contentList);

  const subscriptionForm = document.querySelector('.subscription-form');
  addSubscriptionFormHandler(subscriptionForm);
}

async function initFavoritesPage() {
  addMenuHandlers();

  setQuote();

  state.pagination = new Pagination('favorites', getFavorites().length);
  addPaginationHandler();

  const contentList = document.querySelector('.favorite-exercises-list');
  addExerciseDetailsHandler(contentList);

  renderFavorites();

  const subscriptionForm = document.querySelector('.subscription-form');
  addSubscriptionFormHandler(subscriptionForm);
}

initNavigation();
