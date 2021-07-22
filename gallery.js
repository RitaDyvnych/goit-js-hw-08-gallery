import { galleryItems } from './app.js';

const galleryArrayCollection = galleryItems.map(item => item.original);

const galleryConteiner = document.querySelector('.js-gallery');
const lightboxContainer = document.querySelector('.js-lightbox');
const closeBtn = document.querySelector('.lightbox__button');
const lightboxOverlay = document.querySelector('.lightbox__overlay');
const lightboxImg = document.querySelector('.lightbox__image');


  