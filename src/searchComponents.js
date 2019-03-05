import { writeSearchToQuery } from './query-components.js';
const inputForm = document.getElementById('movie-input-form');
const searchTermInput = document.getElementById('movie-search-input');

inputForm.addEventListener('submit', event => {
    event.preventDefault();

    const existingQuery = window.location.hash.slice(1);
    const searchTermValue = searchTermInput.value;
    const newQuery = writeSearchToQuery(existingQuery, searchTermValue);
    window.location.hash = newQuery;
});

export function updateSearchTerm(searchTerm) {
    searchTermInput.value = searchTerm;
}