const menuLoad = function() {

    let main = document.querySelector("#main-content");

    main.innerHTML = "";

    let menu = document.createElement("div");
    menu.id = "menu";
    main.appendChild(menu);

}

export default menuLoad;