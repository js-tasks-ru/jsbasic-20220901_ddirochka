
function read(a, b) { // Читает переменные и добавляет их в объет
  calculator.variableA = a;
  calculator.variableB = b;
  return a, b;
} 

function sum(variables) {
  let sumResult = 0;
  for (let key in variables) {
    if (Number.isFinite(variables[key])) {
      sumResult += variables[key];
    }
  }
  return sumResult;
}

function mul(variables) {
  let mulResult = 1;
  for (let key in variables) {
    if (Number.isFinite(variables[key])) {
      mulResult *= variables[key];
    }
  }
  return mulResult;
}

let calculator = {
  read: read,
  sum: sum,
  mul: mul,
};


calculator.read(7, 0);
console.log(calculator);
console.log('Sum is ' + calculator.sum(calculator));
console.log('Mul is ' + calculator.mul(calculator));

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
// window.calculator = calculator; // делает ваш калькулятор доступным глобально
