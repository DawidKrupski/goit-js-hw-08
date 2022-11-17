import { galleryItems } from './gallery-items.js';
// Change code below this line
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';
import simpleLightbox from 'simplelightbox';

const gallery = document.querySelector('.gallery');

for (let i = 0; i < galleryItems.length; i++) {
  const link = document.createElement('a');
  gallery.append(link);
  link.insertAdjacentHTML(
    'beforeend',
    `<img 
        class="gallery__image"
        src=${galleryItems[i].preview}
        alt= "${galleryItems[i].description}"/>`
  );
  link.className = 'gallery__item';
  link.href = `${galleryItems[i].original}`;
}
let image = new simpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
