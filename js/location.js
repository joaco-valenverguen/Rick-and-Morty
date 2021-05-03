async function getLocation() {
  const res = await get("https://rickandmortyapi.com/api/location");
  console.log(res);
  let datainfo = res.info;
  let data = res.results;
  for (c = 0; c < data.length; c++) {
    const div = document.createElement("div");
    div.innerHTML = `<div class="card">
    <div class="img card-content">
     <a class='taker'> <img src="${data[c].image}" alt="" /></a>
    </div>
    <a class='taker'><h3 class="name card-content">${data[c].name}</h3></a>
    <h4 class="status card-content">${data[c].type}</h4>
    <h4 class="species card-content">${data[c].dimension}</h4>
    <h4 class="type card-content">${data[c].type}</h4>
    
  </div>`;
    content.appendChild(div);
  }
}
async function nextLocation() {
  const res = await get(
    `https://rickandmortyapi.com/api/location?page=${page}`
  );
  console.log(res);
  let datainfo = res.info;
  let data = res.results;
  for (c = 0; c < data.length; c++) {
    const div = document.createElement("div");
    div.innerHTML = `<div class="card">
    <div class="img card-content">
     <a class='taker'> <img src="${data[c].image}" alt="" /></a>
    </div>
    <a class='taker'><h3 class="name card-content">${data[c].name}</h3></a>
    <h4 class="status card-content">${data[c].type}</h4>
    <h4 class="species card-content">${data[c].dimension}</h4>
    <h4 class="type card-content">${data[c].type}</h4>
    
  </div>`;
    content.appendChild(div);
  }
}
