import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryItemsRef = document.querySelector('.gallery');

const galleryItemMarcup = galleryItems.map(item => 
    `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a> `
);

galleryItemsRef.insertAdjacentHTML('beforeend',  galleryItemMarcup.join(''));

const onHandleLargePhoto = e => 
    e.preventDefault();
   let lightbox = new SimpleLightbox('.gallery a', { 
    captionType: "attr",
    captionsData: "alt",
    captionDelay: 250
    });




galleryItemsRef.addEventListener('click', onHandleLargePhoto);