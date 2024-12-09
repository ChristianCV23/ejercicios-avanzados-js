const usuarios = [
    { nombre: "Juan", sonidosFavoritos: { sonido1: { volumen: 70 }, sonido2: { volumen: 60 } } },
    { nombre: "Ana", sonidosFavoritos: { sonido1: { volumen: 80 }, sonido3: { volumen: 75 } } },
    { nombre: "Pedro", sonidosFavoritos: { sonido2: { volumen: 65 }, sonido3: { volumen: 85 } } }
  ];
  
  const conteoSonidos = {};
  
  for (const usuario of usuarios) {
    for (const sonido in usuario.sonidosFavoritos) {
      if (conteoSonidos[sonido]) {
        conteoSonidos[sonido]++;
      } else {
        conteoSonidos[sonido] = 1;
      }
    }
  }
  
  console.log(conteoSonidos); // { sonido1: 2, sonido2: 2, sonido3: 2 }
  