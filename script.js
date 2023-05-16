function iniciarSimulador() {
    let numeros = [];
    let total = 0;
    let numero;

    do {
        numero = prompt("Ingrese un número (o 'listo' para terminar):");
        if (numero !== 'listo') {
            numero = parseFloat(numero);
            if (!isNaN(numero)) {
                numeros.push(numero);
                total += numero;
            } else {
                alert("No es válido, por favor, ingrese un número válido");
            }
        }
    } while (numero !== 'listo');

    mostrarResultado(numeros, total);
}

function mostrarResultado(numeros, total) {
    let mensaje = "Números ingresados: " + numeros.join(", ") + "\n";
    mensaje += "Total: " + total;

    alert(mensaje);
}
