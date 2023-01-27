const contactLoad = function() {

    let main = document.querySelector("#main-content");

    main.innerHTML = "";

    let body = document.createElement("div");
    body.id = "contact-body";
    main.append(body);

    let contactInfo = document.createElement("div");
    contactInfo.id = "contact-info";

    let phoneArea = document.createElement("div");
    phoneArea.classList.add("contact-area");
    let phoneIcon = document.createElement("img");
    phoneIcon.src = "/src/Assets/phone.png";
    let phoneText = document.createElement("div");
    phoneText.innerText = "+33 1 47 34 16 98";
    phoneArea.append(phoneIcon, phoneText);


    let addressArea = document.createElement("div");
    addressArea.classList.add("contact-area");
    let addressIcon = document.createElement("img");
    addressIcon.src = "/src/Assets/address.png";
    let addressText = document.createElement("div");
    addressText.innerText = "Champ de Mars, 5 Av. Anatole, Paris, France";
    addressArea.append(addressIcon, addressText);

    let map = document.createElement("div");
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.292292616468133!3d48.85837007928744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc314ca897ac2a350!2zNDjCsDUxJzI4LjkiTiAywrAxNyc0MC44IkU!5e0!3m2!1sen!2sus!4v1674803489068!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

    contactInfo.append(phoneArea, addressArea);
    body.append(contactInfo, map);

}

export default contactLoad;