const homeLoad = function() {

    let header = document.querySelector("header");

    let homeContent = document.createElement("div");  // home content
    homeContent.id = "home";
    header.insertAdjacentElement('afterend', homeContent);

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
}

export default homeLoad;