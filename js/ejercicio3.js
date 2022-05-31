let arreglo = [];

for (i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;

  console.log(dado1);
  console.log(dado2);

  suma = dado1 + dado2;

  arreglo[i] = suma;
  contar(suma);
}

function contar(suma) {
  switch (suma) {
    case 2:
      let contador2 = contador2 + 1;
      break;
    case 3:
      let contador3 = contador3 + 1;
      break;
    case 4:
      let contador4 = contador4 + 1;
      break;
    case 5:
      let contador5 = contador5 + 1;
      break;
    case 6:
      let contador6 = contador6 + 1;
      break;
    case 7:
      let contador7 = contador7 + 1;
      break;
    case 8:
      let contador8 = contador8 + 1;
      break;
    case 9:
      let contador9 = contador9 + 1;
      break;
    case 10:
      let contador10 = contador10 + 1;
      break;
    case 11:
      let contador11 = contador11 + 1;
      break;
    case 12:
      let contador12 = contador12 + 1;
      break;
  }
}
