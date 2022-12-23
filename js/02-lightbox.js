import {galleryItems} from './gallery-items.js';

const gallery = document.querySelector('.gallery')
const galleryMarkup = createCardGalleryItems(galleryItems)

gallery.insertAdjacentHTML('beforeend', galleryMarkup)

const lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt' });

function createCardGalleryItems(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>`
    }).join("")
}
