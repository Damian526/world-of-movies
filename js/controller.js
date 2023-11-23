import * as model from './model.js';
import movieView from './views/movieView.js';
import paginationView from './views/paginationView.js';
import resultsView from './views/resultsView.js';
import searchView from './views/searchView.js';




const controlMovies =  async function()  {
  try {
    
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;
    await model.loadMovies(id);
    movieView.render(model.state.movie)

    
  } catch (error) {
    movieView.renderError();
  }
}

const controlSearchResults =  async function()  {
  try {
    
    const query = searchView.getQuery();
    if(!query) return; 
    console.log(query);
    await model.searchMovies(query);
    resultsView.render(model.getSearchResultsPage());
    searchView.clearInput();

    paginationView.render(model.state.search);

    
  } catch (error) {
    console.log(error);
  }
}

const controlPagination = function(page) {
 resultsView.render(model.getSearchResultsPage(page));
 
 paginationView.render(model.state.search);
}


const init = function(){
  movieView.handleRender(controlMovies);
  searchView.handleSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
 
 

}
init();


