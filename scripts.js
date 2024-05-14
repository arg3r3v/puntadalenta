document.addEventListener('DOMContentLoaded', function() {
    // Código para el desplegable de ropa
    const menuRopa = document.getElementById('ropa');
    const subMenuRopa = document.getElementById('sub-menu-ropa');
    
    // Función para mostrar el submenú
    function mostrarSubMenu() {
        subMenuRopa.style.display = 'block';
    }
    
    // Función para ocultar el submenú
    function ocultarSubMenu() {
        subMenuRopa.style.display = 'none';
    }
    
    // Asignar los eventos al botón y al submenú
    menuRopa.addEventListener('mouseover', mostrarSubMenu);
    subMenuRopa.addEventListener('mouseleave', ocultarSubMenu);
    subMenuRopa.addEventListener('mouseenter', mostrarSubMenu);
    subMenuRopa.addEventListener('mouseleave', ocultarSubMenu);


    // Asegúrate de agregar esto al documento cuando esté listo, por ejemplo dentro de DOMContentLoaded.
let indiceActual = 0;
const imagenes = document.querySelectorAll('.carrusel-imagen');
const totalImagenes = imagenes.length;

document.getElementById('carrusel-prev').addEventListener('click', function() {
    cambiarImagen(-1);
});

document.getElementById('carrusel-next').addEventListener('click', function() {
    cambiarImagen(1);
});

function cambiarImagen(cambio) {
    imagenes[indiceActual].style.display = 'none';
    indiceActual = (indiceActual + cambio + totalImagenes) % totalImagenes;
    imagenes[indiceActual].style.display = 'block';
}

});

// Pop up bolcita
    const bolsaCompra = document.querySelector(".bolsa");
    const popupBolsa = document.getElementById("popup-bolsa");
    const cerrarPopupBolsa = popupBolsa.querySelector(".cerrar-popup");
    const imagenPopupBolsa = document.getElementById("imagen-popup-bolsa");

    bolsaCompra.addEventListener("click", function () {
        imagenPopupBolsa.src = 'img/imgpopup2.jpeg'; // Cambia la ruta de la imagen según corresponda
        popupBolsa.style.display = "block";
    });

    cerrarPopupBolsa.addEventListener("click", function () {
        popupBolsa.style.display = "none";
    });

    popupBolsa.addEventListener("click", function (e) {
        if (e.target === popupBolsa) {
            popupBolsa.style.display = "none";
        }
    });