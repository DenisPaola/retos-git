

function resta(operacion, op1, op2 = 1) {
    if (operacion == "subs") {
        let resultado = op1 - op2;
        console.log("resta es igual a" + resultado)
        return resultado;
    }
};


function multiplicacion(operacion, op1, op2 = 1) {
    if (operacion == "mult") {
        let resultado = op1 * op2;
        console.log("multiplicacion es igual a" + resultado)
        return resultado;
    }
};


function division(operacion, op1, op2 = 1) {
    if (operacion == "div") {
        let resultado = op1 / op2;
        console.log("division es igual a" + resultado)
        return resultado;
    }
};

function cuadrado(numero) {
    const result = numero * numero;
    console.log('El cuadrado de ' + numero + ' es ' + result);
    return result;
}



//Main===================================================================


resta("subs", 20,);
multiplicacion("mult", 20,);
division("div", 36,);
cuadrado(8);


resta("subs", -12,);
multiplicacion("mult", 0,);
division("div", 0,);
cuadrado(2);


resta("subs", 1,);
multiplicacion("mult", 1,);
division("div", 1,);
cuadrado(10);




module.exports = { suma, resta, multiplicacion, division }

