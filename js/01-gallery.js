import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryItemsRef = document.querySelector('.gallery');

const galleryItemMarcup = galleryItems.map(item => 
    ` <div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div> `
);

galleryItemsRef.insertAdjacentHTML('beforeend',  galleryItemMarcup.join(''));

const onHandleLargePhoto = e => {
    e.preventDefault();
   basicLightbox.create(`
   <img width="1400" height="900" src="${e.target.dataset.source}">
`).show() 
};



galleryItemsRef.addEventListener('click', onHandleLargePhoto);