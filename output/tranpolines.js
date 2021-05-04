"use strict";

var trampoline = function trampoline(fn) {
  return function () {
    var result = fn.apply(void 0, arguments);

    while (typeof result == 'function') {
      result = result();
    }

    return result;
  };
};

var suma = function suma(number) {
  var sum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return number === 0 ? sum : function () {
    return suma(number - 1, sum + number);
  };
};

var tsuma = trampoline(suma);
var r = tsuma(1000000);
console.log(r);