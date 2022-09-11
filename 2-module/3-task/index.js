let calculator = {
  read: function(a, b) {
    this.a = a;
    this.b = b;
    return a, b;
  },
  sum: function() {
    return this.a + this.b;
  },
  mul: function() {
    return this.a * this.b;
  },
};

calculator.read(11, 13);
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.mul(calculator));

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально