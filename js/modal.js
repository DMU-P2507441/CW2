// this is the JavaScript used for the main part of the modal pop up.
// openModal is the function used to trigger the modal start up.
function openModal(modal, filmID) {
  console.log(filmID)
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

// closeModal closes the modal pop up when the user clicks outside of the modal box.
function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

function updateModalHTML(film) {
  const modal = document.getElementById("modal")
  const selectedFilm = suggestions.find((element) => {
    return element.id === film
  })
  // similarly to how all the data is loaded from the suggestions.js page for the gallery display, this logic was also used to display all the content inside each modal pop up.
  modal.innerHTML = `
  <div class="modal-header">
    <div class="title">${selectedFilm.title} (${selectedFilm.year})</div>
  </div>
  <div class="modal-body"><img src="img/${selectedFilm.img}.jpg" src="img/${selectedFilm.img}.png" src="img/${selectedFilm.img}.gif">
  <p>${selectedFilm.description}</p> <p1>${selectedFilm.rating}</p1></div>
  `
}
