'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _identity = require('lodash/identity');

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radium = void 0;
try {
  Radium = require('radium');
} catch (err) {
  if (err.code === "MODULE_NOT_FOUND") {
    Radium = _identity2.default;
  } else {
    throw err;
  }
}

exports.default = Radium;