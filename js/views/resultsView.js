class ResultsView {
  #movieContainer = document.querySelector('.results');
  #result;
  render(result) {
    this.#result = result;
    console.log(result);
    this.#movieContainer.innerHTML = '';
    const markup = this.#result.map(result => this.#generateMarkup(result)).join('');
    this.#movieContainer.insertAdjacentHTML('afterbegin', markup);
   
  }

  #generateMarkup(result) {
    return `<li class= "list___results"> 
        <a class="result__link" href="#${result.id}">       
        <img src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt="${result.title}" class="result__poster"/>       
        <div class="result_info">
        <h2 class="result__title">${result.title} (${result.release_date.slice(0, 4)})</h2>
        
        </div>
        </a>
        
        </li>`;
  }
}

export default new ResultsView();
