import Utils from "./utils.js";

document.querySelector(".query-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const query = document.querySelector(".query-form input").value;
    const charactersData = await Utils.getQuery("character", query);

    document.querySelector(".query-container").innerHTML =
        charactersData.results
            .map((character) => Utils.getCharacterCard(character))
            .join("");

    let pageNum = 1;

    const pageBtnContainer = document.querySelector(".page-btn-container");
    pageBtnContainer.addEventListener("click", async (e) => {
        if (e.target.classList.contains("btn-prev-page") && pageNum > 1) {
            const newPageData = await Utils.getQuery(
                "character",
                query,
                --pageNum,
            );

            Utils.replaceContent(
                document.querySelector(".query-container"),
                newPageData.results,
                Utils.getCharacterCard,
            );
        } else if (e.target.classList.contains("btn-next-page")) {
            const newPageData = await Utils.getQuery(
                "character",
                query,
                ++pageNum,
            );

            Utils.replaceContent(
                document.querySelector(".query-container"),
                newPageData.results,
                Utils.getCharacterCard,
            );
        }
    });
});
