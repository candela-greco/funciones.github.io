function pintar(color = "green"){
    elemento = document.getElementById("ele1");
    elemento.style.backgroundColor = color;
}


/*--------- SCRIPT COLORES.HTML ---------*/

function cambiarColor(cuadrado) {
    cuadrado.target.style.backgroundColor = "black";
}

document.getElementById("colorAzul").addEventListener("click", cambiarColor);
document.getElementById("colorRojo").addEventListener("click", cambiarColor);
document.getElementById("colorVerde").addEventListener("click", cambiarColor);
document.getElementById("colorAmarillo").addEventListener("click", cambiarColor);


