const fetch = require("node-fetch");
const fs = require("fs");

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    const getAllPokeUrls = data.results.map((pokemon) => {
      return fetch(pokemon.url).then((poke) => {
        return poke.json();
      });
    });
    return Promise.all(getAllPokeUrls);
  })
  .then((pokemons) => {
    return pokemons.reduce((acc, pokemon) => {
      return `${acc}<div><img src="${pokemon.sprites.front_default}"><h1>${pokemon.name}</h1></div>`;
    }, "");
  })
  .then((pokeHtml) => {
    fs.writeFile("./9.html", pokeHtml, () => {});
  });
