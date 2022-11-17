import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

for (let i = 0; i < galleryItems.length; i++) {
  const div = document.createElement('div');
  gallery.append(div);
  const link = document.createElement('a');
  div.append(link);
  link.insertAdjacentHTML(
    'beforeend',
    `<img 
    class="gallery__image"
    src=${galleryItems[i].preview}
    data-source=${galleryItems[i].original} alt= "${galleryItems[i].description}"/>`
  );
  div.className = 'gallery__item';
  link.className = 'gallery__link';
  link.href = `${galleryItems[i].original}`;
}

const clickElement = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source}>
`);

  instance.show(() => console.log('lightbox now visible'));
  const clickEscape = event => {
    if (event.keyCode === 27) {
      gallery.removeEventListener('keydown', clickEscape);
      instance.close(() => console.log('lightbox not visible anymore'));
    }
  };
  gallery.addEventListener('keydown', clickEscape);
};

gallery.addEventListener('click', clickElement);
