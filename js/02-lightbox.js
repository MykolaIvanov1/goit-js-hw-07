import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

// Створює розмітку галереї

function createGalleryMarkup(items) {
  return items
    .map(
      item =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
            </a>
        </li>`
    )
    .join('');
}

const addElementMarkup = createGalleryMarkup(galleryItems);

// Додає розмітку галереї в HTML документ

galleryEl.innerHTML = addElementMarkup;

// Генерує модальне вікно за допомогою бібліотеки SimpleLightbox

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionPosition: 'bottom',
  captionDelay: 250,
});
