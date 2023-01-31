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
    setActiveButton(navHome);
    navHome.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(navHome);
        homeLoad();
    });

    let navMenu = document.createElement("button");
    navMenu.textContent = "Menu";
    navMenu.classList.add("nav-list");
    navMenu.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(navMenu);
        menuLoad();
    });

    let navContact = document.createElement("button");
    navContact.textContent = "Contact";
    navContact.classList.add("nav-list");
    navContact.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(navContact);
        contactLoad();
    });


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
    footerImg.src = "/dist/Assets/GitHub-Mark-Light-32px.png";
    footerLink.href = "https://github.com/dtariq1995";
    footerLink.textContent = "Daanyaal Tariq";

    content.appendChild(footer);
    footer.append(footerText, footerImg, footerLink);
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".nav-list");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
}
  

export default pageLoad;

