const pageLoad = function() {


    let content = document.querySelector("#content");

    let header = document.createElement("header");
    let title = document.createElement("div");
    title.id = "title";

    let nav = document.createElement("div");
    nav.id = "nav";

    let navHome = document.createElement("div");
    navHome.textContent = "Home";
    navHome.classList.add("nav-list");

    let navMenu = document.createElement("div");
    navMenu.textContent = "Menu";
    navMenu.classList.add("nav-list");

    let navContact = document.createElement("div");
    navContact.textContent = "Contact Us";
    navContact.classList.add("nav-list");

    nav.append(navHome, navMenu, navContact);


    title.textContent = "Le Café de l’Espérance";
    content.appendChild(header);
    header.append(title, nav);

}

export default pageLoad;

