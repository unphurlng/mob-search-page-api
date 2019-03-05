import { writeSearchToQuery } from '../src/query-components.js';
import { writePageToQuery } from '../src/query-components.js';
import { readFromQuery } from '../src/query-components.js';

const test = QUnit.test;

QUnit.module('SET URL QUERY');


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

test('Read from Query', assert => {
    // arrange
    const query = 'searchTerm=star+wars&page=3';
    const expected = {
        searchTerm: 'star wars',
        page: 3
    };
    // act
    const result = readFromQuery(query);
    // assert
    assert.deepEqual(result, expected);
});