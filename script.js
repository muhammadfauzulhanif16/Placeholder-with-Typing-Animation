let i = 0;
let placeholder = "";
const txt = "example@domain.com";
const speed = 100;

function type() {
    placeholder += txt.charAt(i);
    document.getElementById("email").setAttribute("placeholder", placeholder);
    i++;
    setTimeout(type, speed);
}

type();