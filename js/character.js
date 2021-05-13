async function getCharacters(x) {
  if (!x) {
    const res = await get("https://rickandmortyapi.com/api/character");
    console.log(res);
    datainfo = res.info;
    let data = res.results;
    for (c = 0; c < data.length; c++) {
      const div = document.createElement("div");
      div.id = data[c].id;
      div.innerHTML = `<div class="card">
      <a class='taker'><div class="img card-content"></a>
        <img src="${data[c].image}" alt="" />
      </div>
      <a class='taker'><h3 class="name card-content">${data[c].name}</h3></a>
      <h4 class="status card-content">${data[c].status}</h4>
      <h4 class="species card-content">${data[c].species}</h4>
      <h4 class="type card-content">${data[c].type}</h4>
      <h4 class="gender card-content">${data[c].gender}</h4>
      <h4 class="location card-content">${data[c].location.name}</h4>
    </div>`;
      div.firstChild.addEventListener("click", (e) => {
        if (e.target.parentNode.classList.contains("img")) {
          alonChar(div.id);
        }
      });
      content.appendChild(div);
    }
  }
}
async function nextCharacter() {
  const res = await get(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  console.log(res);
  let datainfo = res.info;
  let, (div = res.results);
  for (c = 0; c < data.length; c++) {
    const div = document.createElement("div");
    div.id = data[c].id;

    div.innerHTML = `<div class="card">
      <a class='taker'><div class="img card-content"></a>
        <img src="${data[c].image}" alt="" />
      </div>
      <a class='taker'><h3 class="name card-content">${data[c].name}</h3></a>
      <h4 class="status card-content">${data[c].status}</h4>
      <h4 class="species card-content">${data[c].species}</h4>
      <h4 class="type card-content">${data[c].type}</h4>
      <h4 class="gender card-content">${data[c].gender}</h4>
      <h4 class="location card-content">${data[c].location.name}</h4>
    </div>`;
    div.firstChild.addEventListener("click", () => {
      alonChar(div.id);
    });
    content.appendChild(div);
  }
}

async function alonChar(id) {
  const res = await get("https://rickandmortyapi.com/api/character/" + id);
  console.log(res);

  content.innerHTML = ``;
  let divi = document.createElement("div");
  divi.className = "all-content";
  divi.id = res.id;
  divi.innerHTML = `
  <div class='title'><h1>${res.name}</h1></div>
  <div class='char-content'>
    <img src='${res.image}' />
    <div class='inside-content'>
      <h3>Status: ${res.status}</h3>
      <h4 class="species card-content">Specie: ${res.species}</h4>
      <h4 class="type card-content">Type: ${res.type}</h4>
      <h4 class="gender card-content"Gender: >Gender: ${res.gender}</h4>
      <h4 class="location card-content">Location: ${res.location.name}</h4>
      <h4>Origin : ${res.origin.name}</h4>
    </div>
  </div>
  `;
  for (x = 0; x < res.episode.length; x++) {
    divi.innerHTML += `<h3>${res.episode[x]}</h3>`;
  }

  content.appendChild(divi);
}
