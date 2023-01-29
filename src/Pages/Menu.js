const menuLoad = function() {

    let main = document.querySelector("#main-content");

    main.innerHTML = "";

    let menu = document.createElement("div");
    menu.id = "menu";
    main.appendChild(menu);

    let coffeeTitle = document.createElement("div");
    coffeeTitle.classList.add("menu-title");
    coffeeTitle.textContent = "Coffee";

    let coffeeMenu = document.createElement("div");
    coffeeMenu.id = "coffee-menu";

    let itemOne = document.createElement("div");
    let itemOneImage = document.createElement("img");
    itemOneImage.src = "/src/Assets/menu-2.jpg";
    let itemOneText = document.createElement("div");
    itemOne.append(itemOneImage, itemOneText);

    let itemTwo = document.createElement("div");
    let itemTwoImage = document.createElement("img");
    itemTwoImage.src = "/src/Assets/menu-3.jpg";
    let itemTwoText = document.createElement("div");
    itemTwo.append(itemTwoImage, itemTwoText);

    let itemThree = document.createElement("div");
    let itemThreeImage = document.createElement("img");
    itemThreeImage.src = "/src/Assets/menu-4.jpg";
    let itemThreeText = document.createElement("div");
    itemThree.append(itemThreeImage, itemThreeText);

    let itemFour = document.createElement("div");
    let itemFourImage = document.createElement("img");
    itemFourImage.src = "/src/Assets/menu-5.jpg";
    let itemFourText = document.createElement("div");
    itemFour.append(itemFourImage, itemFourText);

    let itemFive = document.createElement("div");
    let itemFiveImage = document.createElement("img");
    itemFiveImage.src = "/src/Assets/menu-6.jpg";
    let itemFiveText = document.createElement("div");
    itemFive.append(itemFiveImage, itemFiveText);

    let itemSix = document.createElement("div");
    let itemSixImage = document.createElement("img");
    itemSixImage.src = "/src/Assets/menu-7.jpg";
    let itemSixText = document.createElement("div");
    itemSix.append(itemSixImage, itemSixText);

    let itemSeven = document.createElement("div");
    let itemSevenImage = document.createElement("img");
    itemSevenImage.src = "/src/Assets/menu-8.jpg";
    let itemSevenText = document.createElement("div");
    itemSeven.append(itemSevenImage, itemSevenText);

    coffeeMenu.append(itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix, itemSeven);

    menu.append(coffeeTitle, coffeeMenu);


}

export default menuLoad;