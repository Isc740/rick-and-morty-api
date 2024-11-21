const Utils = {
    getCharacterCard: (characterData) => `
        <div class="item-card card mb-3 shadow-sm" style="width: 580px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img
                        src=${characterData.image}
                        class="img-fluid rounded-start"
                        alt="..."
                    />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${characterData.name}</h5>
                        <p class="card-text my-0"><strong>Status: </strong><span class="">${characterData.status}</span></p>
                        <p class="card-text my-0"><strong>Species: </strong> ${characterData.species} ${characterData.type}</p>
                        <p class="card-text my-0"><strong>Gender: </strong> ${characterData.gender}</p>
                        <p class="card-text my-0"><strong>Origin: </strong> ${characterData.origin.name}</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    async getQuery(type = "character", name = "", page = 1) {
        const response = await fetch(
            `https://rickandmortyapi.com/api/${type}/?name=${name}&page=${page}`,
        );
        const data = await response.json();
        return data;
    },

    replaceContent(element, content, container) {
        element.innerHTML = content
            .map((character) => container(character))
            .join("");
    },

    addContent(element, content, container) {
        element.innerHTML += content
            .map((character) => container(character))
            .join("");
    },
};

export default Utils;
