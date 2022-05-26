let ciudades = [];
let iCiudades = 0;

do {
  ciudades[iCiudades] = prompt("Ingrese el nombre de una ciudad: ");
  iCiudades++;
} while (confirm("Quiere continuar?"));

document.write("Ciudades ingresadas:<br>");

for (let i = 0; i < ciudades.length; i++) {
  document.write(ciudades[i] + "<br>");
}

document.write(`<br>Longitud del arreglo: ${ciudades.length}<br>`);
document.write(
  `Elemento de:<br>-primera posicion: ${ciudades[0]}<br>-tercera posicion: ${
    ciudades[2]
  }<br>-última posicion: ${ciudades[ciudades.length - 1]}<br>`
);

ciudades.push("Paris");
document.write(`<br>Elemento de segunda posicion: ${ciudades[1]}<br>`);
ciudades[1] = "Barcelona";

document.write("<br>Nueva lista de ciudades:<br>");
for (let i = 0; i < ciudades.length; i++) {
  document.write(ciudades[i] + "<br>");
}
