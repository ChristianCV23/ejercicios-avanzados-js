function swap(array, index1, index2) {
    if (index1 >= 0 && index1 < array.length && index2 >= 0 && index2 < array.length) {
      [array[index1], array[index2]] = [array[index2], array[index1]];
    }
    return array;
  }
  
  // Ejemplos
  let numeros = [1, 2, 3, 4, 5];
  console.log(swap(numeros, 0, 3)); // [4, 2, 3, 1, 5]
  console.log(swap(numeros, 1, 4)); // [4, 5, 3, 1, 2]
  