"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _CardIcon = _interopRequireDefault(require("../CardIcon"));

var _PlaceholderText = _interopRequireDefault(require("./PlaceholderText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tape = require('../../assets/tape.png');

const BackSide = ({
  model,
  cardType
}) => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.black
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.tapeContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: styles.tape,
    source: {
      uri: tape.data
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.cvvContainer
  }, /*#__PURE__*/_react.default.createElement(_PlaceholderText.default, {
    style: styles.cvvText,
    value: model.cvv,
    placeholder: cardType === 'american-express' ? 'XXXX' : 'XXX'
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.footer
  }, /*#__PURE__*/_react.default.createElement(_CardIcon.default, {
    cardNumber: model.cardNumber
  })));
};

const styles = _reactNative.StyleSheet.create({
  black: {
    height: 48,
    width: '100%',
    backgroundColor: 'black',
    marginVertical: 24
  },
  tape: {
    width: '70%',
    height: 28
  },
  tapeContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24
  },
  cvvContainer: {
    backgroundColor: 'transparent',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: '#f4d01a',
    borderRadius: 4
  },
  cvvText: {
    backgroundColor: 'white',
    paddingHorizontal: 4,
    paddingVertical: 2
  },
  footer: {
    position: 'absolute',
    bottom: 12,
    right: 12
  }
});

var _default = BackSide;
exports.default = _default;
//# sourceMappingURL=BackSide.js.map