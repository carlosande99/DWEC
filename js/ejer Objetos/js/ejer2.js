// Constructor de libros
function Libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;
}

// Constructor de biblioteca
function Biblioteca() {
    this.libros = [];
    this.usuarios = {};
}

// Prototipo para incluir libros en la biblioteca
Biblioteca.prototype.incluirLibro = function(libro) {
    this.libros.push(libro);
    console.log(`El libro "${libro.titulo}" de ${libro.autor} ha sido añadido a la biblioteca.`);
};

// Prototipo para buscar libros por título
Biblioteca.prototype.buscarLibroPorTitulo = function(titulo) {
    const libroEncontrado = this.libros.find(libro => libro.titulo === titulo);
    if (libroEncontrado) {
        console.log(`Libro encontrado: "${libroEncontrado.titulo}" de ${libroEncontrado.autor}`);
    } else {
        console.log(`Libro "${titulo}" no encontrado en la biblioteca.`);
    }
};

// Prototipo para prestar libros
Biblioteca.prototype.prestarLibro = function(titulo, usuario) {
    const libro = this.libros.find(libro => libro.titulo === titulo);

    if (libro) {
        if (!libro.prestado) {
            libro.prestado = true;
            this.usuarios[usuario] = this.usuarios[usuario] || [];
            this.usuarios[usuario].push(libro);
            console.log(`El libro "${libro.titulo}" ha sido prestado a ${usuario}.`);
        } else {
            console.log(`El libro "${libro.titulo}" ya está prestado.`);
        }
    } else {
        console.log(`Libro "${titulo}" no encontrado en la biblioteca.`);
    }
};

// Prototipo para devolver libros
Biblioteca.prototype.devolverLibro = function(titulo, usuario) {
    if (this.usuarios[usuario]) {
        const libroIndex = this.usuarios[usuario].findIndex(libro => libro.titulo === titulo);
        if (libroIndex !== -1) {
            const libroPrestado = this.usuarios[usuario].splice(libroIndex, 1)[0];
            libroPrestado.prestado = false;
            console.log(`El libro "${libroPrestado.titulo}" ha sido devuelto.`);
        } else {
            console.log(`El usuario ${usuario} no tiene el libro "${titulo}" prestado.`);
        }
    } else {
        console.log(`El usuario ${usuario} no tiene ningún libro prestado.`);
    }
};

// Ejemplo de uso
const bibliotecaSerra = new Biblioteca();
const libro1 = new Libro("El nombre del viento", "Patrick Rothfuss");
const libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez");

bibliotecaSerra.incluirLibro(libro1);
bibliotecaSerra.incluirLibro(libro2);

bibliotecaSerra.prestarLibro("El nombre del viento", "Usuario1");
bibliotecaSerra.prestarLibro("Cien años de soledad", "Usuario2");

bibliotecaSerra.devolverLibro("El nombre del viento", "Usuario1");
bibliotecaSerra.devolverLibro("Cien años de soledad", "Usuario2");

bibliotecaSerra.buscarLibroPorTitulo("El nombre del viento");
bibliotecaSerra.buscarLibroPorTitulo("Cien años de soledad");

