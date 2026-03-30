import { getQuote } from '../api/your-energy-api';
import { renderQuote } from '../render/render-quote';

export async function setQuote() {
  let quote = JSON.parse(localStorage.getItem('quote'));
  const today = new Date().getDate();

  if (!quote || quote.date != today) {
    const dailyQuote = await getQuote();
    localStorage.setItem(
      'quote',
      JSON.stringify({ ...dailyQuote, date: today })
    );
    quote = JSON.parse(localStorage.getItem('quote'));
  }

  renderQuote(quote.author, quote.quote);
}
