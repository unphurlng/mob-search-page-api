import { writePageToQuery } from './query-components.js';
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPageContainer = document.getElementById('current-page');
const totalPagesContainer = document.getElementById('total-pages');

let currentPageNumber = 1;


//make updatePaging function which effects URL
export default function updatePaging(pagingInfo) {
    previousButton.disabled = currentPageNumber === 1;
    nextButton.disabled = currentPageNumber === pagingInfo.totalPages;

    totalPagesContainer.textContent = pagingInfo.totalPages;
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writePageToQuery(existingQuery, currentPageNumber);
    window.location.hash = newQuery;
}

previousButton.addEventListener('click', () => {
    currentPageNumber--;
    updatePaging(currentPageNumber);
    currentPageContainer.textContent = currentPageNumber;
});

nextButton.addEventListener('click', () => {
    currentPageNumber++;
    updatePaging(currentPageNumber);
    currentPageContainer.textContent = currentPageNumber;

});