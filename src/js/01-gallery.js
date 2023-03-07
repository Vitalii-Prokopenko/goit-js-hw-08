import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Gallery markup

const imageGallery = document.querySelector('.gallery');
let markup = '';

galleryItems.forEach(galleryItem => {
  let galleryElement = document.createElement('a');
  let galleryImage = document.createElement('img');

  galleryElement.classList.add('gallery__item');
  galleryImage.classList.add('gallery__image');

  galleryElement.setAttribute('href', galleryItem.original);
  galleryImage.setAttribute('src', galleryItem.preview);
  galleryImage.setAttribute('alt', galleryItem.description);

  markup += `<${galleryElement.localName} class="${galleryElement.className}" href="${galleryElement.href}"><${galleryImage.localName} class="${galleryImage.className}" src="${galleryImage.src}" alt="${galleryImage.alt}"/></${galleryElement.localName}>`;
});

imageGallery.insertAdjacentHTML('afterbegin', markup);

// Creation of SimpleLightbox object

const mySimpleLightBox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});

// Event listener on div.gallery and modal window of SimpleLightbox

const handleSimpleLightBox = event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
};

imageGallery.addEventListener('click', handleSimpleLightBox);

// console.log(galleryItems);
