const Num1 = document.getElementById('numero1');
const Num2 = document.getElementById('numero2');
const Operacion = document.getElementById('operacion');
const resultado = document.getElementById('resultado');
const button = document.getElementById('performCalculation');

function calculator(num1, num2, operation) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
        return "unknown value";
    }

    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "unknown value";
    }
}

function performCalculation() {
    const num1 = parseFloat(Num1.value);
    const num2 = parseFloat(Num2.value);
    const operation = Operacion.value;

    const result = calculator(num1, num2, operation);

    resultado.innerText = 'El resultado de:'+ num1 +' '+ operation+ ' '+num2 +'es' +result;
}

button.addEventListener('click', performCalculation);
