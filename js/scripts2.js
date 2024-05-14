
document.addEventListener('DOMContentLoaded', function() {

    // Lógica para el pop-up de la imagen
    var botonPopup = document.getElementById('boton-popup');
    var popupImagen = document.getElementById('popup-imagen');
    var cerrarPopup = document.getElementsByClassName('cerrar-popup')[0];

    botonPopup.onclick = function() {
        popupImagen.style.display = 'block';
    };

    cerrarPopup.onclick = function() {
        popupImagen.style.display = 'none';
    };

    // Cerrar el pop-up al hacer clic fuera de él
    window.onclick = function(event) {
        if (event.target === popupImagen) {
            popupImagen.style.display = 'none';
        }
    };
});
document.addEventListener('DOMContentLoaded', function() {
    var imagenesGaleria = document.querySelectorAll('.imagen-galeria');
    var popup = document.getElementById('popup-imagen');
    var imagenPopup = popup.querySelector('img');
    var cerrarPopup = popup.querySelector('.cerrar-popup');
    var flechaIzquierda = popup.querySelector('.flecha-izquierda');
    var flechaDerecha = popup.querySelector('.flecha-derecha');
    var indiceActual = 0; // Índice de la imagen actualmente visible en el pop-up

    // Función para cambiar la imagen en el pop-up y actualizar el índice actual
    function cambiarImagen(nuevaIndice) {
        imagenPopup.src = imagenesGaleria[nuevaIndice].src;
        indiceActual = nuevaIndice;
    }

    imagenesGaleria.forEach((imagen, indice) => {
        imagen.addEventListener('click', () => {
            cambiarImagen(indice);
            popup.style.display = 'flex'; // Mostrar el pop-up
        });
    });

    cerrarPopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    flechaDerecha.addEventListener('click', () => {
        cambiarImagen((indiceActual + 1) % imagenesGaleria.length);
    });

    flechaIzquierda.addEventListener('click', () => {
        cambiarImagen((indiceActual - 1 + imagenesGaleria.length) % imagenesGaleria.length);
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Lista preestablecida de imágenes
    const imagenes = [
        "ruta/imagen2.jpg",
        "ruta/imagen3.jpg"
        //Agregar más imagenes?
    ];

    // Elementos del pop-up
    const botonCompra = document.getElementById("boton-compra");
    const popup = document.getElementById("popup-compra");
    const cerrarPopup = document.querySelector(".cerrar-popup");
    const imagenPopup = document.getElementById("imagen-popup");

    // Abrir el pop-up con una imagen diferente cada vez
    botonCompra.addEventListener("click", function () {
        imagenPopup.src = '../img/imgpopup.jpeg'; // Establece la imagen en el pop-up
        popup.style.display = "block"; // Muestra el pop-up
    });

    // Cerrar el pop-up al hacer clic en la 'x'
    cerrarPopup.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Cerrar el pop-up al hacer clic fuera del contenido
    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});

// Pop up bolcita

document.addEventListener("DOMContentLoaded", function () {
    const bolsaCompra = document.querySelector(".bolsa");
    const popupCompra = document.getElementById("popup-bolsa");
    const cerrarPopupCompra = popupCompra.querySelector(".cerrar-popup");
    const imagenPopup2 = document.getElementById("imagen-popup-2");

    bolsaCompra.addEventListener("click", function () {
        imagenPopup2.src = '../img/imgpopup2.jpeg';
        popupCompra.style.display = "block";
    });

    cerrarPopupCompra.addEventListener("click", function () {
        popupCompra.style.display = "none";
    });

    popupCompra.addEventListener("click", function (e) {
        if (e.target === popupCompra) {
            popupCompra.style.display = "none";
        }
    });
});