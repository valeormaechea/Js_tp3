function caracteres(cadena) {
  let analisis;
  if (cadena == cadena.toUpperCase()) {
    analisis = "La cadena está formada solo por mayúsculas.";
  } else if (cadena == cadena.toLowerCase()) {
    analisis = "La cadena está formada solo por minúsculas.";
  } else {
    analisis = "La cadena está formada por minúsculas y mayúsculas.";
  }

  return analisis;
}

let cadena = prompt("Ingrese un texto: ");
let analisis = caracteres(cadena);
document.write(analisis);
