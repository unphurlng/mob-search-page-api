import loadGallery from './makeGalleryTemplate.js';
import { readFromQuery } from './query-components.js';
import { updateSearchTerm } from './searchComponents.js';
import makeSearchURL from './make-search-movie.js';
import updatePaging from './paging-components.js';

window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const queryObject = readFromQuery(existingQuery);
    updateSearchTerm(queryObject.searchTerm);

    const url = makeSearchURL(queryObject);
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(movieDataObject => {
            loadGallery(movieDataObject.results);
            const pagingInfo = {
                page: movieDataObject.page,
                totalPages: movieDataObject.total_pages
            };

            updatePaging(pagingInfo);
        });
});
