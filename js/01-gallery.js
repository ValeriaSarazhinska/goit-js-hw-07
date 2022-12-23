import {galleryItems} from './gallery-items.js';

const gallery = document.querySelector('.gallery')
const galleryMarkup = createCardGalleryItems(galleryItems)
let instance

gallery.insertAdjacentHTML('beforeend', galleryMarkup)
gallery.addEventListener("click", openModal);
gallery.addEventListener("keydown", closeModal)

function createCardGalleryItems(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
           <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
`;
    }).join("")
}

function openModal(event) {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return
    }
    const source = event.target.dataset.source;
    instance = basicLightbox.create(`
    <img src="${source}">
`)
    instance.show()
}

function closeModal(event) {
    if (event.code === "Escape" && instance.visible()) {
        instance.close()
    }
}
