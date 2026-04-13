const button = document.getElementById("search-btn");

button.addEventListener("click", () => {
  fetchAPI();
});
async function fetchAPI() {
  try {
    const input = document.getElementById("pockemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    if (!response.ok) {
      throw new Error("invalid pokename");
    }
    const data = await response.json();
    const pockemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pockemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
fetchAPI();
