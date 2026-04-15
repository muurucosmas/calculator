const form = document.getElementById("form");
const input = document.getElementById("pokemonName")
form.addEventListener("click", (e) => {
  e.preventDefault()
  const inputSearch = input.value
  fetchAPI();
  input.value = ""
});

async function fetchAPI() {
  try {
    // FIX: correct ID
    const input = document
      .getElementById("pokemonName")
      .value
      .toLowerCase()
      .trim();

    if (!input) return; // prevent empty search

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${input}`
    );

    if (!response.ok) {
      throw new Error("Invalid Pokémon name");
    }

    const data = await response.json();

    const pokemonSprite = data.sprites.front_default;

    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";

  } catch (error) {
    console.error(error);
  }
}
