export class MovieView {
  #movieContainer = document.querySelector('.main-container');
  #data;
  #errorMessage = 'Not found movie, try again!'
  #message = ' ';
  render(data) {
    this.#data = data;
    this.#movieContainer.innerHTML = '';

    this.#movieContainer.insertAdjacentHTML(
      'afterbegin',
      this.#generateMarkup()
    );
  }

  renderError(message = this.#errorMessage) {
    const markup = `<div class="error">
    <div>  <svg xmlns="http://www.w3.org/2000/svg" width="32.002" height="32" viewBox="0 0 32.002 32" id="error"><path d="M2.062 32h27.812a2 2 0 0 0 1.766-2.942l-13.876-26A1.997 1.997 0 0 0 16.002 2H16c-.738 0-1.414.406-1.762 1.056L.3 29.056a2.004 2.004 0 0 0 .046 1.972A2.005 2.005 0 0 0 2.062 32zM16 24a2 2 0 1 1-.001 4.001A2 2 0 0 1 16 24zm-2-3.968v-8a2 2 0 0 1 4 0v8a2 2 0 0 1-4 0z"></path></svg>
    <p>${message}</p>
    </div>
    </div>`;
    this.#movieContainer.innerHTML = '';

    this.#movieContainer.insertAdjacentHTML('afterbegin', markup);
  }
  renderMessage(message = this.#message) {
    const markup = `<div class="message">
    <div>  <svg xmlns="http://www.w3.org/2000/svg" width="32.002" height="32" viewBox="0 0 32.002 32" id="error"><path d="M2.062 32h27.812a2 2 0 0 0 1.766-2.942l-13.876-26A1.997 1.997 0 0 0 16.002 2H16c-.738 0-1.414.406-1.762 1.056L.3 29.056a2.004 2.004 0 0 0 .046 1.972A2.005 2.005 0 0 0 2.062 32zM16 24a2 2 0 1 1-.001 4.001A2 2 0 0 1 16 24zm-2-3.968v-8a2 2 0 0 1 4 0v8a2 2 0 0 1-4 0z"></path></svg>
    <p>${message}</p>
    </div>
    </div>`;
    this.#movieContainer.innerHTML = '';

    this.#movieContainer.insertAdjacentHTML('afterbegin', markup);
  }

  handleRender(handler) {
    ['hashchange', 'load'].forEach(e => window.addEventListener(e, handler));
  }

  #getGenries(genre) {
    const firstLeter = genre.charAt(0).toLowerCase();
    return firstLeter + `${genre.slice(1)}`;
  }

  #generateMarkup() {
    return `
    <div class="movie">
    <img src="https://image.tmdb.org/t/p/w500${
      this.#data.poster_path
    }" class ='movie_poster'/>
    <div class="movie-info">
    <h1 class="movie_title">${
      this.#data.title
    } (${this.#data.release_date.slice(0, 4)})</h1>
    <h3 class ="movie-genries">Genres: ${this.#data.genres
      .map(genre => this.#getGenries(genre.name))
      .join(', ')} </h3>
    <span class="movie-description" >${this.#data.overview} <span>
    </div>
    </div>`
    
    ;
    
  }
}

export default new MovieView();
