const pageLoad = function() {


    let content = document.querySelector("#content");

    let header = document.createElement("header");
    let title = document.createElement("div");
    title.id = "title";
    let nav = document.createElement("div");
    nav.id = "nav";
    nav.textContent = "menu";
    title.textContent = "Le Café de l’Espérance";
    content.appendChild(header);
    header.append(title, nav);




}

export default pageLoad;

