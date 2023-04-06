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
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>
        </li>`
    )
    .join('');
}

const addElementMarkup = createGalleryMarkup(galleryItems);

// Додає розмітку галереї в HTML документ

galleryEl.innerHTML = addElementMarkup;

// Додає слухача кліку галераї

galleryEl.addEventListener('click', onImgClick);

function onImgClick(event) {
  //   Блокує перехід за замовчуванням при кліці на посилання
  blockStandartAction(event);
  // Перевіряє клік на картинку
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  // Відкриває модальне вікно
  openModal(event);
  // Закриває модальне вікно клавіщею Escape
  closeModalOnEsc(event);
}

function blockStandartAction(event) {
  event.preventDefault();
}

function openModal(event) {
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width = '800' height = '600'/>`
  );
  instance.show();
}

function closeModalOnEsc(event) {
  galleryEl.addEventListener(
    'keydown',
    event => {
      if (event.code === 'Escape') {
        instance.close();
      }
    },
    { once: true }
  );
}
// console.log(galleryItems);
