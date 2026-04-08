// Calendario
const calendario = [
  { fecha: "8-10 Abril", circuito: "Suzuka", pais: "Japón" },
  { fecha: "15-17 Abril", circuito: "Nurburgring", pais: "Alemania" },
  { fecha: "22-24 Abril", circuito: "Fuji Raceway", pais: "Japón" },
  { fecha: "29 Abril - 1 Mayo", circuito: "Mandalika Street Circuit", pais: "Indonesia" }
];

// Clasificación
const clasificacion = [
  { nombre: "Pablo", equipo: "Toyota Redbull", puntos: 0 },
  { nombre: "Guillen", equipo: "Mercedes", puntos: 0 },
  { nombre: "Gerardo", equipo: "Nissan MOTUL", puntos: 0 },
  { nombre: "Ever", equipo: "Aston Martin", puntos: 0 },
  { nombre: "Jose Gabriel", equipo: "Porche", puntos: 0 },
  { nombre: "Jose Galindo", equipo: "Lamborghini", puntos: 0 },
  { nombre: "Santiago Alvarado #11", equipo: "BMW", puntos: 0 },
  { nombre: "Vitalino #5", equipo: "Renault", puntos: 0 },
  { nombre: "Josue #10", equipo: "Ferrari", puntos: 0 }
];

// Noticias
const noticias = [
  { titulo: "Inicio de la temporada", contenido: "La liga ISMA 2026 arranca en Suzuka." },
  { titulo: "Nueva fecha para la clasificacion.", contenido: "La clasificacion se corre para el 8 de Abril" }
];

// Renderizar calendario
function mostrarCalendario() {
  const div = document.getElementById("calendario");
  div.innerHTML = "<h2>Calendario</h2>" +
    calendario.map(c => `
      <div class="evento">
        <h2>${c.circuito}</h2>
        <p><strong>${c.fecha}</strong> - ${c.pais}</p>
        <div class="resultados">
          <h3>RESULTADOS</h3>
          <ul>
            <li>P1</li><li>P2</li><li>P3</li><li>P4</li>
            <li>P5</li><li>P6</li><li>P7</li><li>P8</li>
          </ul>
        </div>
      </div>
    `).join("");
}

// Renderizar clasificación
function mostrarClasificacion() {
  const div = document.getElementById("clasificacion");
  div.innerHTML = "<h2>Tabla de Clasificación</h2><table><tr><th>Piloto</th><th>Equipo</th><th>Puntos</th></tr>" +
    clasificacion.map(c => `<tr><td>${c.nombre}</td><td>${c.equipo}</td><td>${c.puntos}</td></tr>`).join("") +
    "</table>";
}

// Renderizar noticias
function mostrarNoticias() {
  const div = document.getElementById("noticias");
  div.innerHTML = "<h2>Noticias</h2>" +
    noticias.map(n => `
      <div class="noticia">
        <h3>${n.titulo}</h3>
        <p>${n.contenido}</p>
      </div>
    `).join("");
}

// Inicializar
mostrarCalendario();
mostrarClasificacion();
mostrarNoticias();
