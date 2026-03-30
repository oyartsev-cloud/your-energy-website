const motivationText = document.querySelector('.motivation-text');
const motivationAuthor = document.querySelector('.motivation-author');

export function renderQuote(author, quote) {
  motivationText.innerHTML = quote;
  motivationAuthor.innerHTML = author;
}
