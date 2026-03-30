import iziToast from 'izitoast';
import { isValidEmail } from '../utility/email-validator';
import { subscribe } from '../api/your-energy-api';

export function addSubscriptionFormHandler(subscriptionForm) {
  subscriptionForm.addEventListener('submit', event => {
    try {
      event.preventDefault();
      const subscriptionEmail = document.getElementById('subscription-email');
      if (!isValidEmail(subscriptionEmail.value)) throw new Error();
      subscribe(subscriptionEmail.value);
      subscriptionEmail.value = '';
    } catch (e) {
      iziToast.error({
        title: 'Error',
        message: 'Invalid email',
        position: 'bottomCenter',
      });
    }
  });
}
