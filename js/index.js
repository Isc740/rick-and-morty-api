async function getCharacterQuery(name) {
    const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}`,
    );
    const data = await response.json();
    return data;
}

const getCharacterCard = (characterData) => `
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${characterData.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${characterData.name}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
`;

document.addEventListener("DOMContentLoaded", async () => {
    const characterName = prompt("Ingrese personaje a buscar:");
    const queryData = await getCharacterQuery(characterName);

    document.querySelector(".query-container").innerHTML += queryData.results
        .map((element) => getCharacterCard(element))
        .join("");
});
