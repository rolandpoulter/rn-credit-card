"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PlaceholderText = props => {
  const {
    value,
    placeholder,
    onLayout,
    style
  } = props;
  const rest = placeholder.substring(value.length);
  return /*#__PURE__*/_react.default.createElement(_Text.default, {
    style: style,
    bold: true,
    numberOfLines: 1,
    onLayout: onLayout
  }, value, /*#__PURE__*/_react.default.createElement(_Text.default, {
    style: styles.placeholder
  }, rest));
};

const styles = _reactNative.StyleSheet.create({
  placeholder: {
    color: 'gray'
  }
});

var _default = PlaceholderText;
exports.default = _default;
//# sourceMappingURL=PlaceholderText.js.map