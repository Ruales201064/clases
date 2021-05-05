"use strict";

// .then(x=> x.json())
// .then(x=> console.log(x));
var getusuarios = function getusuarios() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(function () {
        fetch("https://jsonplaceholder.typicode.com/users");
      });
    }, 900);
  });
};

getusuarios().then(function (resol) {
  console.log(resol);
});