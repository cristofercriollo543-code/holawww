const formulario = document.getElementById("formCalculadora");
formulario.addEventListener("submit", function(event) {

    /*Evita que la pagina se recargue*/
    event.preventDefault();

    /*Se llama a los 2 numeros del html*/
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let resultado = document.getElementById("resultado");

    /*Se crea la funcion para identificar el numero primo y el que no lo es*/
    function Primo(numero) {

        if (numero < 2) {
            return false;
        }
        /* mediante un bucle comparamos el numero para identificar el numero primo*/
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i ==0){
                return false;
            }
        }
        return true;
    } 

    /*se crea las variables y condicionales para identificar cual de los 2 numeros es primo y no primo para poder visualizarlo en la pagina web*/

    let primo1 = Primo(numero1);
    let primo2 = Primo(numero2);

    if(primo1) {
        console.log(numero1 + " es primo");
    }else {
        console.log(numero1 + " no es primo");
    }

    if(primo2) {
        console.log(numero2 + " es primo");
    }else {
        console.log(numero2 + " no es primo");
    }

    /*se llama a una comparacion entre los 2 numeros para identificar mediante condicionales cual es el numero mayor y cual es el numero menor*/

    let comparacion = "";

    if (numero1 > numero2) {
        comparacion = "El numero mayor es " + numero1 + " y el numero menor es " + numero2;
    }else if (numero2 > numero1) {
        comparacion = "El numero mayor es " + numero2 + " y el numero menor es " + numero1;
    }else {
        comparacion = "Los dos numero son iguales";
    }

    /*Se entrega el resultado que se va a visualizar en la pagina web*/

    resultado.textContent = "Numero 1: " + numero1 +" - " + (primo1 ? "Es primo" : "No es primo") +
    ". Numero 2: " + numero2 +" - " + (primo2 ? "Es primo" : "No es primo") +". " + comparacion;
});
