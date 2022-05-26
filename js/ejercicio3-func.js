function perimetro(largo, ancho) {
  perimetro = 2 * (largo + ancho);
  return perimetro;
}

let largo = parseInt(prompt("Ingrese el largo del rectangulo (cm): "));
let ancho = parseInt(prompt("Ingrese el ancho del rectangulo (cm): "));

let rdoPerimetro = perimetro(largo,ancho);
document.write("El perimetro del rectangulo es de " +rdoPerimetro +" cm.");