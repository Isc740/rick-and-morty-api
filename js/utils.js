const Utils = {
    getCharacterCard: (characterData) => `
        <div class="item-card card mb-3 shadow-sm" style="max-width: 540px;">
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
                        <h5 class="card-title">${characterData.name}</h5>
                        <p class="card-text my-0">Status: ${characterData.status}</p>
                        <p class="card-text my-0">Species: ${characterData.species} ${characterData.type}</p>
                        <p class="card-text my-0">Gender: ${characterData.gender}</p>
                        <p class="card-text my-0">Origin: ${characterData.origin.name}</p>
                        <p class="card-text my-3">
                            <small class="text-body-secondary">
                                Created: ${new Date(characterData.created)}
                            </small>
                        </p>
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
