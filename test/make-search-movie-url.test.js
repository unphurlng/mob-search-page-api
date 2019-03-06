import makeSearchURL from '../src/make-search-movie.js';
const test = QUnit.test;


QUnit.module('MAKE SEARCH MOVIE URL');

test('update movie url based on search', assert => {
    // arrange
    const expected = 'https://developers.themoviedb.org/3/search/movie?api_key=a9c1c53b2d714000fd04fb94fe4ad651&language=en-us&include_adult=false&query=harry+potter&page=3';
    const queryOptions = {
        searchTerm: 'harry potter',
        page: 3
    };
    // act
    const result = makeSearchURL(queryOptions);
    // assert
    assert.equal(result, expected);
});