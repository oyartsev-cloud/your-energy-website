import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showError(message) {
  iziToast.error({
    title: 'Помилка',
    message,
    position: 'bottomCenter',
  });
}
