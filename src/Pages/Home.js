const pageLoad = function() {

    let content = document.querySelector("#content");

    let heading = document.createElement("h1");
    heading.id = "title";
    heading.textContent = "Restaurant Name";
    content.appendChild(heading);
}

export default pageLoad;

