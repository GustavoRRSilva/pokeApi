/* sem clean code
fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
  .then((response) => response.json())
  .then((allPokemon) => {
    var pokemons = [];
    allPokemon.results.map((val) => {
      fetch(val.url)
        .then((response) => response.json())
        .then((pokemonSingle) => {
          pokemons.push({
            name: val.name,
            id: formatId(pokemonSingle.id),
            img: pokemonSingle.sprites.front_default,
          });
          if (pokemons.length == 100) {
            pokemons.map((pokemon) => {
              document.querySelector(".pokemons").innerHTML += `
            <div class="pokemon">
            <img src="${pokemon.img}" alt=" foto do ${pokemon.name}">
            <p class="numeroPokemon">${pokemon.id}</p>
            <h2 class="nomeDoPokemon">${pokemon.name}</h2>
        </div>`;
            });
          }
        });
    });
  });
*/
function formatId(id) {
  if (id <= 9) {
    return "#00" + id;
  }
  if (id <= 99) {
    return "#0" + id;
  }
  return "#" + id;
}

//com clean code
async function fetchPokemon(){
  const response = fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
  const allPokemon = await (await response).json();
  const pokemons = await Promise.all(allPokemon.results.map(async (val) =>{
    const response = await fetch(val.url);
    const pokemonSingle = await response.json();
    return{
      name: val.name,
      id: formatId(pokemonSingle.id),
      img: pokemonSingle.sprites.front_default
    }
  }))
  pokemons.forEach((pokemon)=>{
    document.querySelector(".pokemons").innerHTML += `
    <div class="pokemon">
    <img src="${pokemon.img}" alt=" foto do ${pokemon.name}">
    <p class="numeroPokemon">${pokemon.id}</p>
    <h2 class="nomeDoPokemon">${pokemon.name}</h2>
</div>`;
  })
}
fetchPokemon()