export async function getCharacters(pageNumber: number) {
  const r = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
  );
  return r.json();
}
