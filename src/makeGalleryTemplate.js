export function makeGalleryTemplate(movie) {
    const html = `
        <li>
            <p class="title">${movie.title}</p>
            <img src="https://image.tmdb.org/t/p/w1280${movie.poster_path}">
            <p class="release">${movie.release_date}</p>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}
