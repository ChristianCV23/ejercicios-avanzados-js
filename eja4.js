// Función findArrayIndex: devuelve el índice de un texto en el array
function findArrayIndex(array, texto) {
    return array.indexOf(texto);
  }
  
  // Función removeItem: usa findArrayIndex para obtener el índice y eliminar el elemento del array
  function removeItem(array, texto) {
    const index = findArrayIndex(array, texto);
    if (index !== -1) {
      array.splice(index, 1);  // Elimina el elemento en el índice encontrado
    }
    return array;
  }
  
  // Ejemplos de uso
  
  let frutas = ["manzana", "banana", "pera", "uva"];
  
  console.log(removeItem(frutas, "banana"));  // ["manzana", "pera", "uva"]
  console.log(removeItem(frutas, "uva"));     // ["manzana", "pera"]
  console.log(removeItem(frutas, "melon"));   // ["manzana", "pera"] (no existe "melon")
  