

// This page is dedicated to displaying each modal for all the movies on the Top page.

function updateFilmHTML() {
  const gallery = document.querySelector('.gallery')
  gallery.innerHTML = ''
  suggestions.forEach(function(film, index) {
    if (film.page === "top") {
      // Instead of creating each individual image in a gallery on the HTML page, this javascript loads data from the suggestions.js and displays it as a gallery.
      // the use of the "${}" allows the JavaScript to understand which information to display taken from suggestions.js
      gallery.innerHTML += `
        <div class="poster" data-tags="${film.title.toLowerCase()}">
          <button id="${film.id}" data-modal-target="#modal">
            <img src="img/${film.img}.jpg" src="img/${film.img}.png" src="img/${film.img}.gif" alt="${film.title}">
          </button>
          <p> ${film.title} </p>
          <p> (${film.year}) </p>
        </div>
      `
    }
  })
}


document.addEventListener('DOMContentLoaded', function() {
  updateFilmHTML()

// this allows the user to open and close all modals included on the page.
  const openModalButtons = document.querySelectorAll('[data-modal-target]')
  const closeModalButtons = document.querySelectorAll('[data-close-button]')
  // when the modal is active, the overlay display is also active.
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
