import Utils from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
    const queryData = await Utils.getQuery("character");

    Utils.replaceContent(
        document.querySelector(".query-container"),
        queryData.results,
        Utils.getCharacterCard,
    );
});
