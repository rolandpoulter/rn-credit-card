"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeCardFlip = _interopRequireDefault(require("react-native-card-flip"));

var _types = require("../../types");

var _LibraryContext = _interopRequireDefault(require("../../LibraryContext"));

var _BackSide = _interopRequireDefault(require("./BackSide"));

var _FrontSide = _interopRequireDefault(require("./FrontSide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function usePrevious(value) {
  const ref = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
}

const background = require('../../assets/background.png.js');

const Card = ({
  model,
  cardType,
  focusedField
}) => {
  const {
    backgroundImage
  } = (0, _react.useContext)(_LibraryContext.default);
  const previousFocused = usePrevious(focusedField);
  const cardRef = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    const switchToBack = focusedField === _types.CardFields.CVV && previousFocused !== _types.CardFields.CVV;
    const switchToFront = focusedField !== _types.CardFields.CVV && previousFocused === _types.CardFields.CVV;

    if (switchToBack || switchToFront) {
      var _cardRef$current;

      (_cardRef$current = cardRef.current) === null || _cardRef$current === void 0 ? void 0 : _cardRef$current.flip();
    }
  }, [focusedField, previousFocused]);
  debugger;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNativeCardFlip.default, {
    style: styles.container,
    ref: cardRef
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, backgroundImage || /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: styles.background,
    source: {
      uri: background.data
    }
  }), /*#__PURE__*/_react.default.createElement(_FrontSide.default, {
    model: model,
    cardType: cardType,
    focusedField: focusedField
  })), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, backgroundImage || /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: styles.background,
    source: {
      uri: background.data
    }
  }), /*#__PURE__*/_react.default.createElement(_BackSide.default, {
    model: model,
    cardType: cardType
  }))));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    paddingVertical: 24,
    borderRadius: 12
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 12
  }
});

var _default = Card;
exports.default = _default;
//# sourceMappingURL=index.js.map