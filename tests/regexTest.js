// Crear una expresión regular para buscar números en una cadena
const regex = /\d+/;

// Cadena en la que buscar coincidencias
const text = "aba 456";

// Usar el método exec para encontrar la primera coincidencia
const match = regex.exec(text);

if (match) {
    console.log("Coincidencia encontrada: " + match[0]); // Imprimirá "Coincidencia encontrada: 123"
} else {
    console.log("No se encontraron coincidencias.");
}