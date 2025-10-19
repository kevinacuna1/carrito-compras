// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    // Cuando se agrega un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // Eliminar cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Mostrar los cursos del Local Storage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || [];
        carritoHTML();
    });

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; // Reseteamos el arreglo

        LimpiarHTML(); // Eliminamos todo el HTML
    });
}

// Funciones
function agregarCurso(e) {
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')) {
        // console.log(e.target); // <a class="u-full-width button-prim…n input agregar-carrito" href="#" data-id="3"> app.js:19:17
        // console.log(e.target.parentElement.parentElement); // <div class="card"> app.js:20:17
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Eliminar curso del carrito
function eliminarCurso(e) {
    // console.log(e.target.classList); // DOMTokenList(2) ['borrar-curso', value: 'borrar-curso']
    if (e.target.classList.contains('borrar-curso')) {
        // console.log(e.target.getAttribute('data-id')); // 3
        const cursoId = e.target.getAttribute('data-id');

        // Elimina del arreglo el articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        // Iterar sobre el carrito 
        carritoHTML();
    }
}

// Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso) {
    // console.log(curso); // <div class="card"> app.js:27:13

    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si un elemento ya existe en el carrito
    // .some permite iterar en un arreglo y verificar si al menos un elemento cumple con la condición
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    
    if(existe) {
        // Actualizar la cantidad
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // Retorna el objeto actualizado
            } else {
                return curso; // Retorna el objeto sin cambios
            }
        });
        articulosCarrito = [...cursos];
    } else {
        // Agrega elementos al arreglo de carrito
        // Tengo que ir copiando mi arreglo anterior para no perder los artículos que fui agregando previamente.
        // Vamos a tomar una copia de lo que haya en el carrito, ya sea que esté vacío, haya uno o veinte elementos agregados y le vamos a ir agregando el objeto de info curso.
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    carritoHTML();
}

// Muestra el carrito de compras en el HTML
function carritoHTML() {
    // Limpiar el HTML
    LimpiarHTML();

    // Recoore el carrito y genera el HTML
    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100"/>
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id=${id}>X</a>
            </td>
        `;
        // Agregar el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });

    // Agregar el carrito de compras al storage
    sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

// Elimina los cursos del tbody
function LimpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = '';

    // Si ese contenedor carrito tiene al menos un elemento dentro, este código se sigue ejecutando y una vez que es limpiado todo el HTML dentro de ese contenedor ya no se ejecuta.
    while(contenedorCarrito.firstChild) {
        // Recuerda, un elemento se borraba desde el padre o por sí mismo.
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}