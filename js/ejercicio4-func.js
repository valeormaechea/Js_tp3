function tablaMultiplicar(numero){
    document.write(`Tabla de multiplicar del ${numero}<br><br>`);
    document.write(`<table><tbody>`);
    for(i=1;i<=10;i++){
        document.write(`<tr><td>`);
        document.write(`${numero} x ${i} = ${numero*i}`);
        document.write(`</tr></td>`);
    }
    document.write(`</tbody></table>`);
}

let numero = parseInt(prompt("Ingrese un numero para saber su tabla de multiplicar."));
tablaMultiplicar(numero);