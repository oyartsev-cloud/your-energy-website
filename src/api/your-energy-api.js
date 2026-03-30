import axios from 'axios';
import { state } from '../state/state';
import iziToast from 'izitoast';

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api';

export async function getContentByFilter() {
  const res = await axios.get(
    `/filters?filter=${state.filter}&page=${state.pagination.page}&limit=${state.pagination.perPage}`
  );
  if (state.pagination.page === 1) {
    state.pagination.setMaxPage(res.data.totalPages);
  }
  return res.data.results;
}

export async function getExercises(keyword = '') {
  const params = new URLSearchParams({
    page: state.pagination.page,
    limit: state.pagination.perPage,
  });

  if (keyword != '') {
    params.set('keyword', keyword);
  }

  switch (state.filter) {
    case 'Muscles':
      params.set('muscles', state.filterValue);
      break;
    case 'Body parts':
      params.set('bodypart', state.filterValue);
      break;
    case 'Equipment':
      params.set('equipment', state.filterValue);
  }

  const res = await axios.get(`/exercises?${params}`);
  if (state.pagination.page === 1) {
    state.pagination.setMaxPage(res.data.totalPages);
  }
  return res.data.results;
}

export async function getExercise(id) {
  const res = await axios.get(`/exercises/${id}`);
  return res.data;
}

export async function getQuote() {
  const res = await axios.get('/quote');
  return res.data;
}

export async function subscribe(email) {
  try {
    await axios.post('/subscription', { email: email });
    iziToast.success({
      title: 'Success',
      message: 'You are now subscribed',
      position: 'bottomCenter',
    });
  } catch (e) {
    iziToast.error({
      title: 'Error',
      message: "Couldn't subscribe. Email might be already registered",
      position: 'bottomCenter',
    });
  }
}

export async function patchReview(id, req) {
  await axios.patch(`/exercises/${id}/rating`, req);
}
