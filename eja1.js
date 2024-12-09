const peliculas = [
    { titulo: "Película 1", categoria: "comedia" },
    { titulo: "Película 2", categoria: "acción" },
    { titulo: "Película 3", categoria: "aventura" },
    { titulo: "Película 4", categoria: "thriller" },
    { titulo: "Película 5", categoria: "comedia" },
    { titulo: "Película 6", categoria: "animación" }
  ];
  
  const categorias = [];
  
  for (const pelicula of peliculas) {
    if (!categorias.includes(pelicula.categoria)) {
      categorias.push(pelicula.categoria);
    }
  }
  
  console.log(categorias); // ["comedia", "acción", "aventura", "thriller", "animación"]
  