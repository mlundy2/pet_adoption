/*Variables*/

/*Helper Functions*/
function fetchData(url) {
  return fetch(url)
          .then(checkStatus)
          .then(res => res.json())
}

function checkStatus(response) {
  return(response.ok ? Promise.resolve(response) : Promise.reject(new Error(response.statusText)));
}

/*Functions*/
function showMenuLinks() {
  document.getElementById("header-nav").style.width = "250px";
}

function hideMenuLinks() {
  document.getElementById("header-nav").style.width = "0px";
}

function showSearchBar() {
  document.getElementById("header-search-box").style.display = "block";
  document.getElementById("header-search-box").style.width = "200px";
  document.getElementsByClassName("site-identity")[0].style.display = "none";
  document.getElementsByClassName("fa-search")[0].style.display = "none";
  document.getElementsByClassName("search-close")[0].style.display = "block";
  document.getElementsByClassName("fa-bars")[0].style.position = "absolute";
  document.getElementsByClassName("fa-bars")[0].style.top = "50%";
  document.getElementsByClassName("fa-bars")[0].style.right = "1.25em";
  document.getElementsByClassName("fa-bars")[0].style.transform = "translate(-50%, -50%)";
}

function hideSearchBar() {
  document.getElementById("header-search-box").style.display = "none";
  document.getElementById("header-search-box").style.width = "0";
  document.getElementsByClassName("site-identity")[0].style.display = "flex";
  document.getElementsByClassName("fa-search")[0].style.display = "block";
  document.getElementsByClassName("search-close")[0].style.display = "none";
  document.getElementsByClassName("fa-bars")[0].style.position = "static";
  document.getElementsByClassName("fa-bars")[0].style.top = "0%";
  document.getElementsByClassName("fa-bars")[0].style.transform = "translate(0%, 0%)";
}

function displayDogs() {
  fetchData("https://random.dog/woof.json")
    .then(data => {
      data.url.includes('.mp4') || data.url.includes('.gif') ? displayDogs() : showDogImg(data);
    })
}

function showDogImg(data) {
  let photo = `<div class='container'>
    <div class='dog-listing'>
      <img src='${data.url}' class="dog-pic"/>
      <div class="dog-info">
        <p>Name</p>
        <p>Age</p>
      </div>
    </div>
  `;

  photo += "</div>";
  document.getElementById("here").innerHTML = photo;
}

displayDogs();

