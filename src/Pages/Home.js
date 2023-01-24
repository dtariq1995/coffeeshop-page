const pageLoad = function() {


    let content = document.querySelector("#content");

    let header = document.createElement("header");  // header content
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

    title.textContent = "Café l’Espérance";
    content.appendChild(header);
    header.append(title, nav);


    let homeContent = document.createElement("div");  // home content
    homeContent.id = "home";
    content.appendChild(homeContent);

    let homeText = document.createElement("div");
    homeText.classList.add("homeText");
    homeText.textContent = "Experience France's Greatest Coffee";

    let homeTextTwo = document.createElement("div");
    homeTextTwo.classList.add("homeText");
    homeTextTwo.textContent = "Serving Delicious Coffee Since 1995";

    let homeImg = document.createElement("img");
    homeImg.src = "/src/Assets/coffee-profile2.jpg";

    let homeTextThree = document.createElement("div");
    homeTextThree.classList.add("homeText");
    homeTextThree.textContent = "Order Online Or Visit Us Today";


    homeContent.append(homeText, homeTextTwo, homeImg, homeTextThree);




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

