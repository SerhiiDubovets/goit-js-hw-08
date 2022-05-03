// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const createGallery = createItem(galleryItems);
gallery.innerHTML = createGallery;

function createItem(items) {
  return items
    .map(
      item =>
        ` <a class="gallery__link"
        href="${item.original}">
        <img class="gallery__image"
         src="${item.preview}"
         alt="${item.description}"></img>
        </a>`,
    )
    .join('');
}

gallery.addEventListener('click', selectItems);
function selectItems(evt) {
  evt.preventDefault();
  if (evt.target.classList.value !== 'gallery__image') {
    return;
  }
}
let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
