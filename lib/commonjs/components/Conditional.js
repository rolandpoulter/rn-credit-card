"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Conditional = props => {
  const {
    condition,
    children,
    fallback = null
  } = props;
  if (condition) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, fallback);
};

var _default = Conditional;
exports.default = _default;
//# sourceMappingURL=Conditional.js.map