const usuarios = [
    { nombre: "Juan", sonidosFavoritos: { sonido1: { volumen: 70 }, sonido2: { volumen: 60 } } },
    { nombre: "Ana", sonidosFavoritos: { sonido1: { volumen: 80 }, sonido3: { volumen: 75 } } },
    { nombre: "Pedro", sonidosFavoritos: { sonido2: { volumen: 65 }, sonido3: { volumen: 85 } } }
  ];
  
  let totalVolumen = 0;
  let cantidadVolumenes = 0;
  
  for (const usuario of usuarios) {
    for (const key in usuario.sonidosFavoritos) {
      totalVolumen += usuario.sonidosFavoritos[key].volumen;
      cantidadVolumenes++;
    }
  }
  
  const media = totalVolumen / cantidadVolumenes;
  console.log(`La media del volumen es: ${media}`);
  