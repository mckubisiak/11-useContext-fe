const apiURL = 'https://rickandmortyapi.com/api/character/';

export const fetchCharacters = async () => {
  const response = await fetch(apiURL);
  const json = await response.json();
  const characters = json.results;

  return characters;
};

export const fetchCharacterById = async (id) => {
  const response = await fetch(`${apiURL}${id}`);
  const json = await response.json();

  return json;
};
