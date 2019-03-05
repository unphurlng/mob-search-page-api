const test = QUnit.test;

QUnit.module('SET URL QUERY');

function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}

test('Add search to empty query', assert => {
    // arrange
    const expected = 'searchTerm=star+wars&page=1';
    const searchTerm = 'star wars';
    const existingQuery = '';
    // act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    // assert
    assert.equal(result, expected);
});

test('Adds search to existing query', assert => {
    // arrange
    const expected = 'searchTerm=harry+potter&page=1';
    const searchTerm = 'harry potter';
    const existingQuery = 'searchTerm=star+wars&page=3';
    // act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    // assert
    assert.equal(result, expected);
});

function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

test('Write page to existing query', assert => {
    // arrange
    const expected = 'searchTerm=harry+potter&page=3';
    const page = 3;
    const existingQuery = 'searchTerm=harry+potter&page=2';
    // act
    const result = writePageToQuery(existingQuery, page);
    // assert
    assert.equal(result, expected);
});