import { apiKey, urlApi } from './config.js';

import { getData } from './helpers.js';

export const state = {
  movie: {},
  search: {
    query: '',
    results: [],
    page: 1,
  
  },
};

export const loadMovies = async function (id) {
  try {
    const movie = await getData(`${urlApi}movie/${id}${apiKey}`);
    console.log(movie);
    state.movie = movie;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const searchMovies = async function (query) {
  try {
    let page = 1;
    let totalPages;
    let allResults = [];
    state.search.query = query;
    do {
      const results = await getData(
        `${urlApi}search/movie${apiKey}&query=${query}&page=${page}`
      );
      totalPages = results.total_pages;
      allResults = allResults.concat(results.results);
      page++;
      
    } while (page <= totalPages);

    state.search.results = allResults;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const getSearchResultsPage = function(page = state.search.page){
  state.search.page = page;
  console.log(state.search.page);
  const start=  (page-1)*10;
  const end = page*10;
  console.log(start,end);
  return state.search.results.slice(start,end);
}


// getData2();

/* const searchInput = document.querySelector('.search_form');
searchInput.value = 'micha';
const query = 'Avengers'; // The search query

// Construct the API URL
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=7a277796818f8bf98fc2dfd9c96feed3&query=${query}`;
${urlApi}search/movie${id}${apiKey}&query=${query}
// Make the API request
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Handle the response data
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  }); */
