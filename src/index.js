import movieData from '../data/data.js';
import loadGallery from './makeGalleryTemplate.js';
import { readFromQuery } from './query-components.js';
import { updateSearchTerm } from './searchComponents.js';

loadGallery(movieData);

window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const queryObject = readFromQuery(existingQuery);
    updateSearchTerm(queryObject.searchTerm);
    
});