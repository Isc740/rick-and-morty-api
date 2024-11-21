import Utils from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
    //const characterName = prompt("Ingrese personaje a buscar:");
    const queryData = await Utils.getCharacterQuery("rick");

    document.querySelector(".query-container").innerHTML += queryData.results
        .map((element) => Utils.getCharacterCard(element))
        .join("");
});
