
const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15" //substituya la DEMO_KEY por tu llave personal(API Key) 
 
// USO DEL async Y await


// Función asíncrona para obtener y mostrar una lista de imágenes
async function listaImagenes() {
    // Intentamos ejecutar el bloque de código dentro del try
    try {
        // Hacemos una solicitud a la URL especificada para obtener las imágenes
        let fetchImagen = await fetch(url); // 'url' debe ser definido antes de llamar a esta función

        // Convertimos la respuesta a formato JSON
        let datosImagenes = await fetchImagen.json();

        // Imprimimos los datos de las imágenes en la consola para verificar la respuesta
        console.log(datosImagenes);

        // Seleccionamos el elemento del DOM donde se van a insertar las imágenes
        const card = document.querySelector("[data-ul]"); // Asegúrate de que exista un elemento con el atributo 'data-ul'

        // Iteramos sobre cada elemento en el array de datos de imágenes
        datosImagenes.forEach(elemento => {
            // Creamos un string de HTML para cada imagen y su título
            const contenido = `
            <li class="card">
                <img class="card__image" src="${elemento.url}" alt="imagen">
                <h3 class="card__title">${elemento.title}</h3>
            </li>
            `;

            // Añadimos el contenido generado al innerHTML del elemento seleccionado
            card.innerHTML = card.innerHTML + contenido;
        });
        
    } catch (error) {
        // Si ocurre un error en el bloque try, lo capturamos y lo imprimimos en la consola
        console.log(error);
    }
}

listaImagenes(); // Llama a la función para obtener y mostrar las imágenes



// USO DEL then Y catch

/* function listaImagenes(){
    fetch(url)
    .then( response => response.json())
    .then( datosImagenes => {
        console.log(datosImagenes)

        const card = document.querySelector("[data-ul]")

        datosImagenes.forEach( elemento => {
            const contenido =`<li class="card">
            <img class="card__image" src="${elemento.url}" alt="imagen">
            <h3 class="card__title">${elemento.title}</h3>
        </li>
            `
            card.innerHTML = card.innerHTML + contenido
        })
    })
    .catch( error => console.log(error))
}

listaImagenes() */
