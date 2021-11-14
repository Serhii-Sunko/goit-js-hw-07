import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('ul.gallery');

galleryRef.classList.add('.gallery__item');
const createMarkUp = createImages(galleryItems);
galleryRef.insertAdjacentHTML('afterbegin', createMarkUp);
function createImages(galleryItems) {
  return galleryItems.reduce((acc, galleryItem) => (acc += createMarkup(galleryItem)), ' ');
}
function createMarkup({ preview, original, description }) {
  const itemList = `<a class="gallery__item" href=${original}><img class="gallery__image" 
  src='${preview}' 
  data-source='${original}'
  alt='${description}'></a>`;
  return itemList;
}

galleryRef.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
});

var lightbox = new SimpleLightbox('.gallery a', {
  widthRatio: 0.8,
  heightRatio: 0.8,
  captionsData: 'alt',
  captionDelay: 250,
});
lightbox.on('show.simpleLightbox');
// console.log(galleryItems);
