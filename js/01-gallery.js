import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

galleryRef.classList.add('.gallery__item');
const markUp = createImages(galleryItems);
galleryRef.insertAdjacentHTML('afterbegin', markUp);
function createImages(galleryItems) {
  return galleryItems.reduce((acc, galleryItem) => (acc += createMarkup(galleryItem)), ' ');
}
function createMarkup({ preview, original, description }) {
  const itemList = `<div class="gallery__item"><a class="gallery__link" href=${original}><img class="gallery__image" 
  src='${preview}' 
  data-source='${original}'
  alt='${description}'></a></div>`;

  return itemList;
}

galleryRef.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  instance.element().querySelector('img').src = e.target.dataset.source;

  instance.show();
});

const instance = basicLightbox.create(`<img src="" />`, {
  onShow: instance => ('onShow', instance),
  onClose: instance => ('onClose', instance),
});
