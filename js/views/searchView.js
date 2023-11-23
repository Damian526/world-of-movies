class SearchView {
    #searchEl;
    #searchInput;

    constructor() {
        this.#searchEl = document.querySelector('.search');
        this.#searchInput = document.querySelector('.search_form');
    }

    getQuery() {
        return this.#searchInput.value;
    }

    clearInput() {
        this.#searchInput.value = '';
    }

    handleSearch(handler) {
        this.#searchEl.addEventListener('submit', (e) => {
            e.preventDefault(); 
            if (this.#searchInput.value.length < 2) {
                alert('Please enter at least 2 characters.');
                
            } else {
                
                handler();
            }
        });
    }
}
export default new SearchView;