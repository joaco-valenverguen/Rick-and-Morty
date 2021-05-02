const content = document.querySelector(".content");
const end = document.querySelector(".end");
let hash = window.location.hash;
let page = 1;
let home = false;
let hashi = "";

window.addEventListener("load", () => {
  gethash();
  if (home == true) {
    homer();
  } else {
    ds();
  }
});

window.addEventListener("hashchange", () => {
  content.innerHTML = "";
  hash = window.location.hash;

  gethash();
  if (!home) {
    ds();
  } else {
    homer();
  }
});

function gethash() {
  switch (hash) {
    case "#/":
    case "":
      home = true;
      break;
    case "#/character":
      hashi = "character";
      home = false;
      return "hashi";
    case "#/episode":
      hashi = "episode";
      home = false;
      return hashi;
    case "#/location":
      hashi = "location";
      home = false;
      return hashi;
  }
}
const ds = async () => {
  content.innerHTML = "";
  const req = await fetch(
    `https://rickandmortyapi.com/api/${hashi}?page=${page}`
  );
  const res = await req.json();
  const datainfo = res.info;

  const data = res.results;
  console.log(datainfo, data);
  switch (hashi) {
    case "character":
      getCharacters(datainfo, data);
      break;
    case "location":
      getLocation(datainfo, data);
    case "episode":
      getEpisode(datainfo, data);
  }
};
ds();

function getCharacters(datainfo, data) {
  for (c = 0; c < data.length; c++) {
    const div = document.createElement("div");
    div.innerHTML = `<div class="card">
    <a class='taker'><div class="img card-content"></a>
      <img src="${data[c].image}" alt="" />
    </div>
    <h3 class="name card-content">${data[c].name}</h3>
    <h4 class="status card-content">${data[c].status}</h4>
    <h4 class="species card-content">${data[c].species}</h4>
    <h4 class="type card-content">${data[c].type}</h4>
    <h4 class="gender card-content">${data[c].gender}</h4>
    <h4 class="location card-content">${data[c].location.name}</h4>
  </div>`;
    content.appendChild(div);
  }
}
function getEpisode(datainfo, data) {
  for (c = 0; c < data.length; c++) {
    const div = document.createElement("div");
    div.innerHTML = `<div class="card">
    <a class='taker'><div class="img card-content"></a>
      <img src="${data[c].image}" alt="" />
    </div>
    <h3 class="name card-content">${data[c].name}</h3>
    <h4 class="status card-content">${data[c].air_date}</h4>
    <h4 class="species card-content">${data[c].episode}</h4>
    
  </div>`;
    content.appendChild(div);
  }
}
function getLocation(datainfo, data) {
  for (c = 0; c < data.length; c++) {
    const div = document.createElement("div");
    div.innerHTML = `<div class="card">
    <div class="img card-content">
     <a class='taker'> <img src="${data[c].image}" alt="" /></a>
    </div>
    <h3 class="name card-content">${data[c].name}</h3>
    <h4 class="status card-content">${data[c].type}</h4>
    <h4 class="species card-content">${data[c].dimension}</h4>
    <h4 class="type card-content">${data[c].type}</h4>
    
  </div>`;
    content.appendChild(div);
  }
}

function homer() {
  content.innerHTML = `<p>
There are not many things right here. \nif you are lookin for something
about Rick and Morty, go for it. \nyou can see info about
<a href="#/character">Characters</a>,
<a href="#/location">Locations</a> and
<a href="#/episode">Episodes</a>
</p>`;
  home = true;
  end.innerHTML = "";
}

if (!home) {
  const pass = document.createElement("div");
  pass.classList.add("btns");
  pass.innerHTML = `
  <a id='last' class='btn'>Last page</a><a class='btn' id='next'>Next page</a>`;
  end.appendChild(pass);
}
const next = document.getElementById("next");
next.addEventListener("click", () => {
  switch (hashi) {
    case "character":
      if (page < 34) {
        page++;
        console.log(page);
        ds();
      } else {
        alert("no more pages");
      }
      break;
    case "episode":
      if (page < 3) {
        page++;
        console.log(page);
        ds();
      } else {
        alert("no more pages");
      }
      break;
    case "location":
      if (page < 6) {
        page++;
        console.log(page);
        ds();
      } else {
        alert("no more pages");
      }
  }
});
const last = document.getElementById("last");
last.addEventListener("click", () => {
  if (page != 1) {
    page -= 1;
    console.log(page);
    ds();
  } else if (page == 1) {
    alert("first page");
  }
});
