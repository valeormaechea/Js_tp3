function paridad(numero) {
  let par = "";
  if (numero % 2 == 0) {
    par = "El número es par.";
  } else {
    par = "El número es impar.";
  }
  return par;
}

let numero = parseInt(prompt("Ingrese un numero: "));
document.write(paridad(numero));
