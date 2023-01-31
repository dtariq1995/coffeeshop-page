const menuLoad = function() {

    let main = document.querySelector("#main-content");

    main.innerHTML = "";

    let menu = document.createElement("div");
    menu.id = "menu";
    main.appendChild(menu);

    let coffeeTitle = document.createElement("div");
    coffeeTitle.classList.add("menu-title");
    coffeeTitle.textContent = "Drink Menu";

    let coffeeMenu = document.createElement("div");
    coffeeMenu.id = "coffee-menu";

    let itemOne = document.createElement("div");
    let itemOneImage = document.createElement("img");
    itemOneImage.src = "/dist/Assets/menu-2.jpg";
    let itemOneText = document.createElement("div");
    itemOne.append(itemOneImage, itemOneText);

    let itemTwo = document.createElement("div");
    let itemTwoImage = document.createElement("img");
    itemTwoImage.src = "/dist/Assets/menu-3.jpg";
    let itemTwoText = document.createElement("div");
    itemTwo.append(itemTwoImage, itemTwoText);

    let itemThree = document.createElement("div");
    let itemThreeImage = document.createElement("img");
    itemThreeImage.src = "/dist/Assets/menu-4.jpg";
    let itemThreeText = document.createElement("div");
    itemThree.append(itemThreeImage, itemThreeText);

    let itemFour = document.createElement("div");
    let itemFourImage = document.createElement("img");
    itemFourImage.src = "/dist/Assets/menu-5.jpg";
    let itemFourText = document.createElement("div");
    itemFour.append(itemFourImage, itemFourText);

    let itemFive = document.createElement("div");
    let itemFiveImage = document.createElement("img");
    itemFiveImage.src = "/dist/Assets/menu-6.jpg";
    let itemFiveText = document.createElement("div");
    itemFive.append(itemFiveImage, itemFiveText);

    let itemSix = document.createElement("div");
    let itemSixImage = document.createElement("img");
    itemSixImage.src = "/dist/Assets/menu-7.jpg";
    let itemSixText = document.createElement("div");
    itemSix.append(itemSixImage, itemSixText);

    coffeeMenu.append(itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix);

    let coffeeText = document.createElement("div");
    coffeeText.classList.add("menu-text");
    coffeeText.textContent= "Items are fully customizable and made to order. We carry a large variety of locally crafted syrups and sweeteners! Come give them a try today!";

    menu.append(coffeeTitle, coffeeMenu, coffeeText);


}

export default menuLoad;