// Creation of hamburger menu for mobile view.
// code adapted from tutorial at https://www.youtube.com/watch?v=At4B7A4GOPg&ab_channel=WebDevSimplified -->
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// this is the JavaScript for the autocompleting search results, which display when the user stars to search something.
// This code was adapted from a tutorial at https://www.youtube.com/watch?v=QxMBHi_ZiT8&ab_channel=CodingNepal
const searchWrapper = document.querySelector(".searchbar");
const inputBox = searchWrapper.querySelector('input');
const suggBox = searchWrapper.querySelector(".autocom-box");

inputBox.onkeyup = (e)=>{
  let userData = e.target.value;
  let emptyArray = [];
  if(userData){
    emptyArray = suggestions.filter((data)=>{
      return data.title.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data)=>{
      // this is the logic used to display the film names, taken from the suggestions.js
      return data = '<li>'+ data.title +'</li>';
    });
    searchWrapper.classList.add("active");
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute("onclick", "select(this)");
    }
  }else{
    searchWrapper.classList.remove("active");
  }
}

function select(element){
  let selectUserData = element.textContent;
  inputBox.value = selectUserData;
  searchWrapper.classList.remove("active");
}

// logic to make suggestions appear.
function showSuggestions(list){
  let listData;
  if(!list.length){
      userValue = inputBox.value;
      listData = '<li>'+ userValue +'</li>';
  }else{
    listData = list.join('');
  }
  suggBox.innerHTML = listData;
}


const searchButton = document.getElementsByClassName("search-icon")[0]

// function that fires when you click the search button.
searchButton.addEventListener("click", () =>{
  let searchTerm = document.getElementsByClassName('film-search')[0].value;
  location.href = `results.html?search=${searchTerm}`;
})

// This displays the search results in the search bar.

// This allows the user to change the font size.
  var fontSizeDD = document.getElementById('fontSize');
  fontSizeDD.onchange = function () {
      var txtBox = document.getElementById("txtBox")
      txtBox.style.fontSize = this.value +"px";
  };
