
// similarly to the Top page, this page is dedicated to opening modals for each Bottom movie.
// there are only minor changes between this page and the top.js page. These changes are just changing the word "top" to "bottom".
function updateFilmHTML() {
  const gallery = document.querySelector('.gallery')
  gallery.innerHTML = ''
  suggestions.forEach(function(film, index) {
    if (film.page === "bottom") {
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
