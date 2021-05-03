async function get(url) {
  const req = await fetch(url);
  const res = await req.json();
  return res;
}
get("https://rickandmortyapi.com/api/character");
