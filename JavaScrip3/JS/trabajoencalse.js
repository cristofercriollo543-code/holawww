const formulario = document.getElementById("formCalculadora");
formulario.addEventListener("submit", function(event) {

    /*Evita que la pagina se recargue*/
    event.preventDefault();

    /*Se llama a los 3 numeros del html*/
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let numero3 = Number(document.getElementById("numero3").value);

    
    let resultado = document.getElementById("resultado");

    /*Se crea una funcion para resolver la ecuacion cuadratica*/

    function formulaG(a, b, c) {

        /*se determina que el numero no puede ser igual a 0*/

        if (a == 0) {

            return "el numero no puede ser cero";
        }

        /*se llama a un discriminante que va a resolver la raiz cuadrada de la formula general*/

        let discriminante = (b * b) - (4 * a * c);

        /*se crea una condicional con el discriminante para determinar si la ecuacion tiene 2 soluciones, 1 solucion o ninguna solucion*/

        if (discriminante > 0) {

        let x1 = (-b + Math.sqrt(discriminante))/(2*a);
        let x2 = (-b - Math.sqrt(discriminante))/(2*a);

        return "la ecuacion tiene 2 soluciones : x1 = " + x1 + " y x2 = " + x2;

       }else if (discriminante === 0){

        let x = -b / (2 *a);

        return "la ecuacion tiene 1 solucion: x = " + x;

        }else{

        return "la ecuacion no tiene soluciones";
        }

    }

    /*Se entrega el resultado de la ecuacion de la formula general y se muestra en la pagina web*/

    let solucion = formulaG (numero1, numero2, numero3);
    resultado.textContent = solucion;

});
