let arreglo = [];
let arregloCant = [];
let max = 0;
let recorrido = 0;

//Voy cargando la suma de los dados en un arreglo
for (i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;

  arreglo[i] = dado1 + dado2;
  console.log(arreglo[i]);
}

//Sumo la cantidad de apariciones de cada suma, y las cargo en otro arreglo (arregloCant)
for (i = 2; i <= 12; i++) {
  let cantAparic = 0;
  for (j = 0; j < 50; j++) {
    if (arreglo[j] == i) {
      cantAparic = cantAparic + 1;
    }
  }

  document.write(`La suma ${i} aparece ${cantAparic} veces.<br>`);
  arregloCant[recorrido] = cantAparic;
  recorrido++;
}

//Busco el mayor de los elementos en el arreglo de cantidades
for (i = 0; i < 12; i++) {
  if (arregloCant[i] > max) {
    posicMax = i;
    max = arregloCant[i];
    console.log(posicMax);
  }
}

//Interpreto el mayor por suma en las posiciones, comparado con el arregloCant y la posicion que fueron tomando al sumar las apariciones
document.write(`<br>La suma que sale mas veces es la del ${posicMax + 2}`);
