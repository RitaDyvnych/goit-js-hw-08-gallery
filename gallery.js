import { galleryItems } from './app.js';

const galleryArrayCollection = galleryItems.map(item => item.original);

const galleryConteiner = document.querySelector('.js-gallery');
const lightboxContainer = document.querySelector('.js-lightbox');
const closeBtn = document.querySelector('.lightbox__button');
const lightboxOverlay = document.querySelector('.lightbox__overlay');
const lightboxImg = document.querySelector('.lightbox__image');



function createGalleryCardsMarkup (galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
        .join('');
}

console.log(createGalleryCardsMarkup(galleryItems));
