// ! ------------------------------------------- Variables

let input = document.querySelector(".search input");
let getRepos = document.querySelector(".get-repos");
let results = document.querySelector(".results");
let url = "https://api.github.com/users";

// ! ------------------------------------------- Events

window.addEventListener("load", inputFocus);
input.addEventListener("keydown", enterBtn);
getRepos.addEventListener("click", getInputValue);

// ! ------------------------------------------- Functions

// Input Focus Function
function inputFocus() {
  input.focus();
  fetchRepos();
}

// Get Input Value Function
function getInputValue() {
  let value = input.value;
  if (value) {
    fetchRepos(value);
    input.value = "";
  }
}

// Enter Button Function
function enterBtn(e) {
  if (e.key === "Enter") {
    getInputValue();
  }
}

// Fetch Github Repos
async function fetchRepos(username = "HossamGezo") {
  let repos = await (await fetch(`${url}/${username}/repos`)).json();
  results.innerHTML = "";
  results.innerHTML += `<h1 class="head" 
  style="
  display: inline-block;
  padding: 10px 20px;
  margin-bottom: 10px;
  background-color: #027B8C;
  color: white;
  border-radius: 7px;
  ">${username}</h1>
  <span 
  style="
  display: inline-block;
  padding: 10px 20px;
  margin-bottom: 10px;
  background-color: #FF4B63;
  color: white;
  border-radius: 7px;
  font-size: 32px;
  ">
  ${repos.length} Repos
  </span>
  `
  for (let i = 0; i < repos.length; ++i) {
    results.innerHTML += `
    <div class="repo">
      <p class="repo-name">${repos[i].name}</p>
      <div class="repo-detailes">
        <span class="cnt-stars">${repos[i].stargazers_count}</span>
        <a href="https://github.com/${username}/${repos[i].name}" target="blank" class="visit">visit</a>
      </div>
      <!-- // Repo Detailes -->
    </div>
    <!-- // Repo -->
    `;
  }
}