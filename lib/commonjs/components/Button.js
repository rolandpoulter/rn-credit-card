"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Button = props => {
  const {
    title,
    style,
    disabled,
    ...restOfProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, _extends({
    style: [styles.container, {
      opacity: disabled ? 0.1 : 1
    }, style]
  }, restOfProps), /*#__PURE__*/_react.default.createElement(_Text.default, {
    style: styles.text
  }, title));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: '#0e20ea',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6
  },
  text: {
    color: 'white',
    fontSize: 16
  }
});

var _default = Button;
exports.default = _default;
//# sourceMappingURL=Button.js.map