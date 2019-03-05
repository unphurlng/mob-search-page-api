
export function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}

export function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

export function readFromQuery(query) {
    const searchParams = new URLSearchParams(query);
    const searchTerm = searchParams.get('searchTerm');
    const page = parseInt(searchParams.get('page'));
    return {
        searchTerm,
        page
    };
}

