async function getEpisode() {
  const res = await get("https://rickandmortyapi.com/api/episode");
  console.log(res);
  let datainfo = res.info;
  let data = res.results;
  for (c = 0; c < data.length; c++) {
    const div = document.createElement("div");
    div.innerHTML = `<div class="card">
        <a class='taker'><div class="img card-content"></a>
          <img src="${data[c].image}" alt="" />
        </div>
        <a class='taker'><h3 class="name card-content">${data[c].name}</h3></a>
        <h4 class="status card-content">${data[c].air_date}</h4>
        <h4 class="species card-content">${data[c].episode}</h4>
        
      </div>`;
    content.appendChild(div);
  }
}

async function nextEpisode() {
  const res = await get(`https://rickandmortyapi.com/api/episode?page=${page}`);
  console.log(res);
  let datainfo = res.info;
  let data = res.results;
  for (c = 0; c < data.length; c++) {
    const div = document.createElement("div");
    div.innerHTML = `<div class="card">
        <a class='taker'><div class="img card-content"></a>
          <img src="${data[c].image}" alt="" />
        </div>
        <a class='taker'><h3 class="name card-content">${data[c].name}</h3></a>
        <h4 class="status card-content">${data[c].air_date}</h4>
        <h4 class="species card-content">${data[c].episode}</h4>
        
      </div>`;
    content.appendChild(div);
  }
}
