//borrar todo
const vaciar = document.querySelector('#vaciar-carrito');
vaciar.addEventListener("mousedown",borrar);
function borrar(){
    const borrarTodo = document.querySelector('#lista-carrito');
    const ultimaPosBorrar = borrarTodo.children[0];
    const filas = ultimaPosBorrar.getElementsByTagName('tr');
    for (let i = filas.length - 1; i > 0; i--) {
        const fila = filas[i];
        fila.parentNode.removeChild(fila);
      }
}
// borrar un solo elemento
const carritoEliminar = document.querySelector('#lista-carrito');
carritoEliminar.addEventListener('click', borrar2);
function borrar2(event) {
  if (event.target.classList.contains('borrar')) {
    // Verificar si el clic se hizo en un elemento con la clase 'borrar'
    const tr = event.target.closest('tr'); // Encontrar el elemento <tr> más cercano al botón
    if (tr) {
      tr.remove(); // Eliminar el <tr>
    }
  }
};

