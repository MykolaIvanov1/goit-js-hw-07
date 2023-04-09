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

const instance = basicLightbox.create(`<img src="" width="800" height="600">`, {
  onShow: instance => {
    galleryEl.addEventListener('keydown', onEscKeyPress);
    console.log('open');
  },
  onClose: instance => {
    galleryEl.removeEventListener('keydown', onEscKeyPress);
    console.log('close');
  },
});

const clickOnImage = evt => {
  evt.preventDefault();
  const sorceEvent = evt.target.dataset.source;
  if (sorceEvent) {
    instance.element().querySelector('img').src = sorceEvent;
    instance.show();
  }
  return;
};

const onEscKeyPress = evt => {
  console.log(evt);
  const ESC_KEY_CODE = 'Escape';
  const IsEscKeY = evt.code === ESC_KEY_CODE;

  if (IsEscKeY) {
    instance.close();
  }
};

galleryEl.addEventListener('click', clickOnImage);
// console.log(galleryItems);
