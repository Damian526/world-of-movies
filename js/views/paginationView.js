class PaginationView {
  #paginationContainer = document.querySelector('.pagination');
  #data;
  render(data) {
    if (!data) return;
    this.#data = data;

    const markup = this.#generateMarkup();
    this.#paginationContainer.innerHTML = '';
    this.#paginationContainer.insertAdjacentHTML('afterbegin', markup);
  }
  addHandlerClick(handler) {
    this.#paginationContainer.addEventListener('click', function (e) {
      const btn = e.target.closest('.pagination__btn');
      console.log(btn);
      if (!btn) return;

      const nearestPage = +btn.dataset.nearestpage;
      console.log(nearestPage);
      handler(nearestPage);
    });
  }
  #generateMarkup() {
    const numberOfPages = Math.ceil(this.#data.results.length / 10);
    console.log(numberOfPages);
    const currentPage = this.#data.page;

    // if current page is 1 and have more pages
    if (currentPage === 1 && numberOfPages > 1) {
      return ` <button class="pagination__btn btn__right" data-nearestpage="${
        currentPage + 1
      }">
            <span>${currentPage + 1}</span
            ><svg
            class="pag__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>`;
    }

    //other page(not 1 and last)

    if (currentPage < numberOfPages) {
      return ` <button class="pagination__btn" data-nearestpage="${
        currentPage - 1
      }">
      <svg class="pag__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            <span>${currentPage - 1}</span>
          </button>
          <button class="pagination__btn btn__right" data-nearestpage="${
            currentPage + 1
          }">
            <span>${currentPage + 1}</span
            ><svg
            class="pag__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>`;
    }

    // last page
    if (currentPage === numberOfPages && numberOfPages > 1) {
      return ` <button class="pagination__btn" data-nearestpage="${
        currentPage - 1
      }">
      <svg class="pag__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            <span>${currentPage - 1}</span
            >
          </button>`;
    }

    return ``;
  }
}
export default new PaginationView();
