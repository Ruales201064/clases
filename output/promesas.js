"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//  const p1= Promise.resolve(1)
//  //console.log(1);
// p1.then(x=> x+5)
// .then(x => Promise.resolve(x + 5))
//  .then(x => Promise.reject('error algo succedio'))
//  .then(x => console.log=('esto no se va llamar'))
//  .catch(e=> console.log(e))
//   const delayed =x=> new Promise((resolve,reject) => setTimeout(() => resolve(x),900))
//  delayed(7)
//  .then(x => {
//      console.log(x)
//       return delayed(x + 7)
//  })
//  .then(x=> console.log(x))
//  .then(x=> Promise.reject("Se rechazo la promesa );"))
//  .catch(e => console.log(e))
//const getNombre =(iduser)=>{
// fetch(`https://jsonplaceholder.typicode.com/posts/${iduser}`)
// .then(x=> {
//     return x.json()
// })
// .then(resultado =>{
//     console.log(resultado.userId);
//     fetch(`https://jsonplaceholder.typicode.com/users/${resultado.userId}`)
//     .then(x=> {
//         return x.json()
//     })
//     .then(userres=>{
//            console.log(userres.username);
//     })
// })
// }
//  getNombre(80);
//  const getNombreAsync  = async (iduser)=>{
//     try{
//         // const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${iduser}`)
//         // const post= await resPost.json()
//         // console.log(post.body);
//         const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
//         const post2 = await resUser.json()
//         console.log(post2.username);
//         const resUser2 = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
//         const post3 = await resUser2.json()
//         console.log(post3.username);
//     }
//      catch{
//         console.log();
//     }
//  }
//  getNombreAsync(80)
var getNombreAxios = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(iduser) {
    var resPost, resusuarios, respos2, resusuarios2;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios("https://jsonplaceholder.typicode.com/posts/".concat(iduser));

          case 3:
            resPost = _context.sent;
            _context.next = 6;
            return axios("https://jsonplaceholder.typicode.com/users/".concat(resPost.data.userId));

          case 6:
            resusuarios = _context.sent;
            console.log(resusuarios.data.id);
            _context.next = 10;
            return axios("https://jsonplaceholder.typicode.com/posts/".concat(iduser));

          case 10:
            respos2 = _context.sent;
            _context.next = 13;
            return axios("https://jsonplaceholder.typicode.com/users/".concat(resPost.data.userId));

          case 13:
            resusuarios2 = _context.sent;
            console.log(resusuarios2.data.name);
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            console.log("error");

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));

  return function getNombreAxios(_x) {
    return _ref.apply(this, arguments);
  };
}();

getNombreAxios(80); // $.get('https://jsonplaceholder.typicode.com/users',(res)=>{
//     $.get('https://jsonplaceholder.typicode.com/users',(res)=>{
//     })
// })