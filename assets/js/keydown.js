let colorBackground = "white";

document.addEventListener('keydown', function(event) {
    const keyDiv = document.getElementById('key');

    if (event.key === "a" || event.key === "A") {
        colorBackground = "pink";
    } else if (event.key === "s" || event.key === "S") {
        colorBackground = "orange";
    } else if (event.key === "d" || event.key === "D") {
        colorBackground = "lightblue";
    }

    keyDiv.style.backgroundColor = colorBackground;

    if (event.key === "q" || event.key === "Q") {
        agregaDiv("purple");
    } else if (event.key === "w" || event.key === "W") {
        agregaDiv("gray");
    } else if (event.key === "e" || event.key === "E") {
        agregaDiv("brown");
    }
});


function agregaDiv(color) {
    const div = document.createElement("div");
    div.className = "nuevoDiv";
    div.style.backgroundColor = color;
    const div2 = document.getElementById('key2');
    div2.appendChild (div);
}