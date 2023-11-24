//script para cambiar la hojade estilo

document.getElementById("toggleBtn").addEventListener("click", function() {
    // Obtener la hoja de estilo actual
    var estiloActual = document.getElementById("estiloHoja").getAttribute("href");

    // Definir las hojas de estilo alternativas
    var estiloClaro = "css/style.css";
    var estiloOscuro = "css/styleOscuro.css";

    // Cambiar a la hoja de estilo alternativa
    if (estiloActual === estiloClaro) {
        document.getElementById("estiloHoja").setAttribute("href", estiloOscuro);
    } else {
        document.getElementById("estiloHoja").setAttribute("href", estiloClaro);
    }
     // Obtener la imagen actual
     var imagenActual = document.querySelector("#imagenPrincipal").getAttribute("src");

     // Definir las imágenes alternativas
     var imagenClara = "images/geranio9.png";
     var imagenOscura = "images/geranioOscuro3.png";
 
     // Cambiar a la imagen alternativa
     if (imagenActual === imagenClara) {
         document.getElementById("imagenPrincipal").setAttribute("src",imagenOscura);
     } else {
         document.getElementById("imagenPrincipal").setAttribute("src", imagenClara);
     }
});



// const accionSlideTwo = document.querySelector("#geranio");
// let cambioSTwo = document.querySelector("#cambioSlide")

// function toggleSlide() {
//     if (cambioSTwo.style.flexDirection === 'row-reverse') {
//         cambioSTwo.style.flexDirection = 'row'; // Change to the other state
//     } else {
//         cambioSTwo.style.flexDirection = 'row-reverse'; // Change to the initial state
//     }
// }

// accionSlideTwo.addEventListener('click', function() {
//     toggleSlide();
// });

// const cambioS = document.getElementById("cambioSlide");
// const geranioImages = [
//     "images/geranio9.jpg",
//     "images/geranios7.jpg",
//     "images/geranios6.jpg"
// ];
// const geranioTexts = [
//     "Familia Geraniaceae dicotiledóneas    Hojas simples o compuestas, con estípulas. Flores con 5 sépalos y 5 pétalos libres. Androceo con 5-15 estambres.",
//     " Gineceo súpero, con 5 carpelos con sendos estilos muy desarrollados y concrescentes formando un pico. Fruto en esquizocarpo",
//     "Sus hermosas hojas verdes y fabulosas flores vibrantes, son ideales por el colorido y elegancia que tienen"
// ];

// let currentIndex = 0;

// function updateSlide() {
//     cambioS.innerHTML = ''; // Limpiar el contenido actual
//     //  crear el contenedor con imagenes
//     const img = document.createElement('img');
//     img.src = geranioImages[currentIndex];
//     img.alt = "Imagen de geranio";
//     img.classList.add("slideGeranio");
//     // crear el contenedor conel párrafo
//     const p = document.createElement('p');
//     p.classList.add("descripcionGeranio__p2", "slideGeranio"); 
//     p.textContent = geranioTexts[currentIndex];

//     cambioS.appendChild(img);//cambioSes un creador y estos dos elementos son sus hijos 
//     cambioS.appendChild(p);
// }

// function slideOne() {
//     cambioS.style.flexDirection = 'row-reverse';
//     currentIndex = (currentIndex + 1) % geranioImages.length; // Avanzar al siguiente elemento circularmente
//     updateSlide();
// }

// function slideTwo() {
//     cambioS.style.padding = "3%";
//     cambioS.style.flexDirection = 'row'; // Cambia al otro estado si es necesario
//     currentIndex = (currentIndex + 1) % geranioImages.length; // Avanzar al siguiente elemento circularmente
//     updateSlide();
// }

// document.getElementById("geran").addEventListener('click', function() {
//     slideOne();
// });

// document.getElementById("geranio").addEventListener('click', function() {
//     slideTwo();
// });


//AHORA LO MISMO PERO CON OBJETOS

const cambioS = document.getElementById("cambioSlide");

const geranioSlideShow = {

    images: [
        "images/geranio1.jpg",
        "images/geranio2.jpg",
        "images/geranio3.jpg",
        "images/geranio4.jpg",
        "images/geranio5.jpg",
        "images/geranio6.jpg"
    ],
    texts: [
            "Familia Geraniaceae dicotiledóneas    Hojas simples o compuestas, con estípulas. Flores con 5 sépalos y 5 pétalos libres. Androceo con 5-15 estambres.",
            " Gineceo súpero, con 5 carpelos con sendos estilos muy desarrollados y concrescentes formando un pico. Fruto en esquizocarpo",
            "Sus hermosas hojas verdes y fabulosas flores vibrantes, son ideales por el colorido y elegancia que tienen",
            "El género Geranium, comúnmente llamado geranio, agrupa 422 especies de plantas anuales, bienales y perennes frecuentemente utilizadas en jardinería por sus atractivas flores y su aroma característico",
            "Flores irregulares (con simetría bilateral) Los dos pétalos superiores y los tres inferiores tienen formas diferentes","Flor regular (radialmente simétrica) Todos los pétalos de forma y tamaño similares"

    ],
    currentIndex: 0,

    updateSlide: function () {
        cambioS.innerHTML = '';

        const img = document.createElement('img');
        img.src = this.images[this.currentIndex];
        img.alt = "Imagen de geranio";
        img.classList.add("slideGeranio");

        const p = document.createElement('p');
        p.classList.add("descripcionGeranio__p2", "slideGeranio");
        p.textContent = this.texts[this.currentIndex];

        cambioS.appendChild(img);
        cambioS.appendChild(p);
    },

    slideOne: function () {
        // cambioS.style.flexDirection = 'row-reverse';
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateSlide();
    },

    slideTwo: function () {
        // cambioS.style.flexDirection = 'row';
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateSlide();
    }
};

document.getElementById("geran").addEventListener('click', function () {
    geranioSlideShow.slideOne();
});

document.getElementById("geranio").addEventListener('click', function () {
    geranioSlideShow.slideTwo();
});


