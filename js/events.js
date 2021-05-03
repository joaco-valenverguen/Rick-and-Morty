window.addEventListener("hashchange", () => {
  content.innerHTML = "";
  hash = window.location.hash;
  page = 1;

  gethash();
  if (!home) {
    ds();
  } else {
    homer();
  }
});

window.addEventListener("load", () => {
  gethash();
  if (home == true) {
    homer();
  } else {
    ds();
    ender();
  }
});

if (!home) {
  end.innerHTML = `
      <a id='last' class='btn'>Last page</a><a class='btn' id='next'>Next page</a>`;
}

const next = document.getElementById("next");
next.addEventListener("click", () => {
  switch (hashi) {
    case "character":
      if (page < 34) {
        page++;
        console.log(page);
        ds(1);
      } else {
        alert("no more pages");
      }
      break;
    case "episode":
      if (page < 3) {
        page++;
        console.log(page);
        ds(1);
      } else {
        alert("no more pages");
      }
      break;
    case "location":
      if (page < 6) {
        page++;
        console.log(page);
        ds(1);
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
    ds(1);
  } else if (page == 1) {
    alert("first page");
  }
});
