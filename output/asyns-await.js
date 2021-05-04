"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function requestHandler(_x, _x2) {
  return _requestHandler.apply(this, arguments);
}

function _requestHandler() {
  _requestHandler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var user, tasks;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return User.findById(req.userId);

          case 3:
            user = _context.sent;
            _context.next = 6;
            return tasks.findById(user.tasksId);

          case 6:
            tasks = _context.sent;
            tasks.completed = true;
            _context.next = 10;
            return tasks.save();

          case 10:
            res.send('task completed');
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            res.send(_context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));
  return _requestHandler.apply(this, arguments);
}