import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
  {
    preview: 'https://pixabay.com',
    original: 'https://pixabay.com',
    description: 'Hokkaido Flower',
  },
  {
    preview: 'https://pixabay.com',
    original: 'https://pixabay.com',
    description: 'Container Ship',
  },
  {
    preview: 'https://pixabay.com',
    original: 'https://pixabay.com',
    description: 'Mountain Lake',
  }
];

const galleryContainer = document.querySelector('.gallery');

// Створення розмітки карток за новим шаблоном
const galleryMarkup = images
  .map(({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img 
          class="gallery-image" 
          src="${preview}" 
          alt="${description}" 
        />
      </a>
    </li>
  `)
  .join('');

galleryContainer.innerHTML = galleryMarkup;

// Ініціалізація SimpleLightbox (поза межами функцій)
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
