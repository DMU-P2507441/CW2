// similarly to the Top page, this page is dedicated to opening modals for each Bottom movie.

// tutorial on how to get search information from url.
// https://www.sitepoint.com/get-url-parameters-with-javascript/
function updateFilmHTML() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const searchTerm = urlParams.get('search')

  const results = document.querySelector('.results')
  const resultsSentence = document.querySelector('.results-sentence')
  resultsSentence.innerHTML = searchTerm

  const filteredSuggestions = []
  //
  suggestions.forEach(function(film, index) {
    if (searchTerm.length > 2 && film.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      // if search is longer than 2 letters we add results of all films that include those letters in their title to new array filteredSuggestions.
      filteredSuggestions.push(film)
    } else if (searchTerm.length > 0 && film.title.toLowerCase().startsWith(searchTerm.toLowerCase())) {
      // if search term is 2 letters or less we add results of all films that start with those letters to new array filteredSuggestions.
      filteredSuggestions.push(film)
    }
  })

// sort films in alphabetical order
  if (filteredSuggestions.length > 0) {
    results.innerHTML = ''
    filteredSuggestions.sort(function(a, b){
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
    })

    // show results filtered by search parameters.
    filteredSuggestions.forEach(function(film, index) {
      results.innerHTML += renderFilmHTML(film)
    })
  }
}

// generate HTML for each film.
function renderFilmHTML(film) {
  return (
    `
      <div class="poster" data-tags="${film.title.toLowerCase()}">
        <button id="${film.id}" data-modal-target="#modal">
          <img src="img/${film.img}.jpg" src="img/${film.img}.png" src="img/${film.img}.gif" alt="${film.title}">
        </button>
        <div class="top-bottom">
        <p> ${film.title} (${film.year}) </p>
        <p class="page"> ${film.page} </p>
        </div>
      </div>
    `
  )
}


document.addEventListener('DOMContentLoaded', function() {
  updateFilmHTML()

// this also serves to open and close all modals featured on this page.
  const openModalButtons = document.querySelectorAll('[data-modal-target]')
  const closeModalButtons = document.querySelectorAll('[data-close-button]')
  const overlay = document.getElementById('overlay')

  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      updateModalHTML(button.id)
      openModal(modal, button.id)
    })
  })

  overlay.addEventListener('click', () => {
      const modals = document.querySelectorAll('.modal.active')
      modals.forEach(modal => {
        closeModal(modal)
      })
  })

})
