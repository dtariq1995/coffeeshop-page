import homeLoad from "./Home";
import menuLoad from "./Menu";
import contactLoad from "./Contact";

const pageLoad = function() {


    let content = document.querySelector("#content");

    let header = document.createElement("header");  // header content
    let title = document.createElement("div");
    title.id = "title";

    let nav = document.createElement("div");
    nav.id = "nav";

    let navHome = document.createElement("button");
    navHome.textContent = "Home";
    navHome.classList.add("nav-list");
    navHome.addEventListener("click", homeLoad);

    let navMenu = document.createElement("button");
    navMenu.textContent = "Menu";
    navMenu.classList.add("nav-list");
    navMenu.addEventListener("click", menuLoad);

    let navContact = document.createElement("button");
    navContact.textContent = "Contact";
    navContact.classList.add("nav-list");
    navContact.addEventListener("click", contactLoad);
    nav.append(navHome, navMenu, navContact);

    title.textContent = "Café l’Espérance";
    content.appendChild(header);
    header.append(title, nav);


    let mainContent = document.createElement("div");   // placeholder for main content
    mainContent.id = "main-content";
    header.insertAdjacentElement("afterend", mainContent);


    let footer = document.createElement("footer");  // footer content
    let footerText = document.createElement("p");
    let footerLink = document.createElement("a");
    let footerImg = document.createElement("img");

    footerText.textContent = "Created by:";
    footerImg.src = "/src/Assets/GitHub-Mark-Light-32px.png";
    footerLink.href = "https://github.com/dtariq1995";
    footerLink.textContent = "Daanyaal Tariq";

    content.appendChild(footer);
    footer.append(footerText, footerImg, footerLink);
}

export default pageLoad;

