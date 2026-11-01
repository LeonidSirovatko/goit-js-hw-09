import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview: new URL('../images/gallery-1.png', import.meta.url).href,
    original: new URL('../images/gallery-1-original.png', import.meta.url).href,
    description: 'Team planning a website design',
  },
  {
    preview: new URL('../images/gallery-2.png', import.meta.url).href,
    original: new URL('../images/gallery-2.png', import.meta.url).href,
    description: 'A hand holding a light bulb',
  },
  {
    preview: new URL('../images/gallery-3.png', import.meta.url).href,
    original: new URL('../images/gallery-3.png', import.meta.url).href,
    description: 'A phone, succulent, and iced coffee on a desk',
  },
  {
    preview: new URL('../images/gallery-4.png', import.meta.url).href,
    original: new URL('../images/gallery-4.png', import.meta.url).href,
    description: 'A modern meeting room',
  },
  {
    preview: new URL('../images/gallery-5.png', import.meta.url).href,
    original: new URL('../images/gallery-5.png', import.meta.url).href,
    description: 'A bright creative office',
  },
  {
    preview: new URL('../images/gallery-6.png', import.meta.url).href,
    original: new URL('../images/gallery-6.png', import.meta.url).href,
    description: 'People working in an open office',
  },
  {
    preview: new URL('../images/gallery-7.png', import.meta.url).href,
    original: new URL('../images/gallery-7.png', import.meta.url).href,
    description: 'A laptop and coffee on a wooden desk',
  },
  {
    preview: new URL('../images/gallery-8.png', import.meta.url).href,
    original: new URL('../images/gallery-8.png', import.meta.url).href,
    description: 'A person working at a desk',
  },
  {
    preview: new URL('../images/gallery-9.png', import.meta.url).href,
    original: new URL('../images/gallery-9.png', import.meta.url).href,
    description: 'A team meeting in a conference room',
  },
];

const gallery = document.querySelector('.gallery');

gallery.innerHTML = images
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img class="gallery-image" src="${preview}" alt="${description}" />
        </a>
      </li>
    `
  )
  .join('');

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
