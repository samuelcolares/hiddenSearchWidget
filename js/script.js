
const SearchButton = {
    init: function () {
        this.cacheSelectors();
        this.bindEvents();

    },

    cacheSelectors: function () {
        this.button = document.querySelector('.btn')
        this.input = document.querySelector('.input')
        this.search = document.querySelector('.search')
    },

    bindEvents: function () {
        this.button.addEventListener('click', () => {
            this.input.classList.toggle('open')
            this.input.value = ''

        })

        this.input.addEventListener('blur', () => {
            this.input.classList.remove('open')
            this.input.value = ''
        })
    },

}

SearchButton.init();


