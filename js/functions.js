hash = window.location.hash;
home = false;
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

async function ds(x) {
  content.innerHTML = "";
  if (!x) {
    switch (hashi) {
      case "character":
        getCharacters();
        break;
      case "location":
        getLocation();
        break;
      case "episode":
        getEpisode();
    }
  } else {
    switch (hashi) {
      case "character":
        nextCharacter();
        break;
      case "location":
        nextLocation("x");
        break;
      case "episode":
        nextEpisode("x");
    }
  }
  ender();
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
function ender() {
  if (end.innerHTML == "") {
    end.innerHTML = `
      <a id='last' class='btn'>Last page</a><a class='btn' id='next'>Next page</a>`;
  }
}
