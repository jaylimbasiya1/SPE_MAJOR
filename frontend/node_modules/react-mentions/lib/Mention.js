'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OptionalRadium = require('./OptionalRadium');

var _OptionalRadium2 = _interopRequireDefault(_OptionalRadium);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Mention(_ref) {
  var display = _ref.display;
  var className = _ref.className;
  var style = _ref.style;

  return _react2.default.createElement(
    'strong',
    {
      className: className,
      style: (0, _extends3.default)({}, defaultStyle, style)
    },
    display
  );
};

Mention.propTypes = {
  /**
   * Called when a new mention is added in the input
   *
   * Example:
   *
   * ```js
   * function(id, display) {
   *   console.log("user " + display + " was mentioned!");
   * }
   * ```
   */
  onAdd: _react.PropTypes.func,
  onRemove: _react.PropTypes.func,

  renderSuggestion: _react.PropTypes.func,

  trigger: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.instanceOf(RegExp)]),

  isLoading: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  style: _react.PropTypes.object
};

Mention.defaultProps = {
  trigger: "@",

  onAdd: function onAdd() {
    return null;
  },
  onRemove: function onRemove() {
    return null;
  },
  renderSuggestion: null,
  isLoading: false,
  appendSpaceOnAdd: false
};

var defaultStyle = {
  fontWeight: "inherit"
};

exports.default = (0, _OptionalRadium2.default)(Mention);