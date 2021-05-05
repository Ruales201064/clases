"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var pacientes = [{
  No_documento: 1006178654,
  nombre: 'Juan David',
  apellidos: 'Ruales Delado',
  ciudad: 'cali',
  telefono: 3136153521,
  estrato: 1
}, {
  No_documento: 192888398,
  nombre: 'Julian',
  apellidos: 'pina caicedo',
  ciudad: 'medellin',
  telefono: 3117440458,
  estrato: 2
}, {
  No_documento: 41923721,
  nombre: 'Alejandra',
  apellidos: 'Marin',
  ciudad: 'Bogota',
  telefono: 3127418164,
  estrato: 3
}, {
  No_documento: 199298737,
  nombre: 'Maicol steven',
  apellidos: 'Salgado Ortiz',
  ciudad: 'cali',
  telefono: 3206487439,
  estrato: 1
}, {
  No_documento: 1002837748,
  nombre: 'Valentina ',
  apellidos: 'Rodriguez Mejia',
  ciudad: 'medellin',
  telefono: 3120837740,
  estrato: 4
}];

var getpacientes = function getpacientes() {
  return new Promise(function (resolve, reject) {
    if (pacientes == 0) {
      reject('no se encontrarons los datos del array');
    }

    setTimeout(function () {
      resolve(pacientes);
    }, 900);
  });
};

function getusers() {
  return _getusers.apply(this, arguments);
}

function _getusers() {
  _getusers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var getDatosF, documentos, name, surname, city, telephone, stratum;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return getpacientes();

          case 3:
            getDatosF = _context.sent;
            _context.next = 6;
            return getDatosF.map(function (x) {
              return x.No_documento;
            });

          case 6:
            documentos = _context.sent;
            console.log(documentos);
            name = getDatosF.map(function (n) {
              return n.nombre;
            });
            console.log(name);
            _context.next = 12;
            return getDatosF.map(function (a) {
              return a.apellidos;
            });

          case 12:
            surname = _context.sent;
            console.log(surname);
            _context.next = 16;
            return getDatosF.map(function (c) {
              return c.ciudad;
            });

          case 16:
            city = _context.sent;
            console.log(city);
            _context.next = 20;
            return getDatosF.map(function (t) {
              return t.telefono;
            });

          case 20:
            telephone = _context.sent;
            console.log(telephone);
            _context.next = 24;
            return getDatosF.map(function (s) {
              return s.estrato;
            });

          case 24:
            stratum = _context.sent;
            console.log(stratum);
            _context.next = 31;
            break;

          case 28:
            _context.prev = 28;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.message);

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 28]]);
  }));
  return _getusers.apply(this, arguments);
}

getusers(); // getpacientes().then(res=>{
//     const documentos= res.map(x=> x.No_documento)
//     console.log(documentos);
//     const name= res.map(n=> n.nombre)
//     console.log(name);
//     const surname= res.map(a=> a.apellidos)
//     console.log(surname);
//     const city= res.map(c=> c.ciudad)
//     console.log(city);
//     const telephone= res.map(t=> t.telefono)
//     console.log(telephone);
//     const stratum= res.map(s=> s.estrato)
//     console.log(stratum);
// })
// function getpacientes(){
//     return new Promise((resolve,reject)=>{
//       if(pacientes==0){
//         reject('error de conexion');
//       }  
//      setTimeout(()=>{
//          resolve(pacientes);
//      },1500);
//     })
// }
// getpacientes().then((resol)=>{
//    console.log(resol); 
// })