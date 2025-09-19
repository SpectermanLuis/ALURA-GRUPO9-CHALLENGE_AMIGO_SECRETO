// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// funcion para agregar amigos  agregarAmigos()

// Tareas específicas:
 
// Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector
// para obtener el texto ingresado por el usuario.

// Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío.
// Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

// Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los 
// nombre de amigos usando el método.push().

// Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a 
// una cadena vacía.



// Array para almacenar los nombres
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Obtener el valor y quitar espacios en blanco

    // Validaciones: Nombre ingresado No vacío 
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }
    // Validaciones : Nombre ingresado no debe existir ya ingresado en el array
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    // Agregar el nombre al array y actualizar la lista
    // Decidi pasar a mayuscula para evitar posibles duplicaciones si 
    // se ingresara el mismo nombre en mayuscula o minuscula
    amigos.push(nombre.toUpperCase());
    actualizarLista();
    
    // Limpiar el input después de agregar
    input.value = "";
}

// Función para actualizar la lista 
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    // recorrer arreglo y generar elementos de una lista 
    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para sortear UN solo nombre al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe haber al menos un nombre para hacer el sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el nombre sorteado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎉</li>`;
}
