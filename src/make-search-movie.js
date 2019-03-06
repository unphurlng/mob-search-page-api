function makeSearchURL(queryObject) {
    const SEARCH_MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';
    const API_KEY = 'a9c1c53b2d714000fd04fb94fe4ad651';

    const url = new URL(SEARCH_MOVIE_URL);
    url.searchParams.set('api_key', API_KEY);
    url.searchParams.set('language', 'en-us');
    url.searchParams.set('include_adult', 'false');
    url.searchParams.set('query', queryObject.searchTerm);
    url.searchParams.set('page', queryObject.page);
    return url.toString();
}

export default makeSearchURL;