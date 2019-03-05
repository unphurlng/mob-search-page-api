const test = QUnit.test;

QUnit.module('TEMPLATE GALLERY TEST');

const movie = {
    title: 'Star Wars',
    release_date: 1977,
    poster_path: '/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg'
};


function makeGalleryTemplate(movie) {
    return `
        <li>
            <p class="title">${movie.title}</p>
            <img src="https://image.tmdb.org/t/p/w1280${movie.poster_path}">
            <p class="release">${movie.release_date}</p>
        </li>
    `;
}

test('populate each movie to gallery', assert => {
    // arrange
    const expected = `
        <li>
            <p class="title">Star Wars</p>
            <img src="https://image.tmdb.org/t/p/w1280/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg">
            <p class="release">1977</p>
        </li>
    `;
    // act
    const result = makeGalleryTemplate(movie);

    // assert
    assert.equal(result, expected);
});


