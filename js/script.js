const text = "¿Quieres ser mi novia?";
const messageEl = document.getElementById("message");

let index = 0;
function showText() {
    if (index < text.length) {
        messageEl.innerHTML += text.charAt(index);
        messageEl.style.opacity = 1;
        index++;
        setTimeout(showText, 100);
    }
}

window.onload = showText;