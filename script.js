
function cambiarColorFondo(color) {
    document.body.style.backgroundColor = color;
}


function cambiarTamanoTexto(tamano) {
    
    document.getElementById("tituloQuienesSomos").style.fontSize = tamano + "px";
}

function tacharElemento(elemento) {
    
    if (elemento.style.textDecoration === "line-through") {
        elemento.style.textDecoration = "none"; 
    } else {
        elemento.style.textDecoration = "line-through";  
    }
}
