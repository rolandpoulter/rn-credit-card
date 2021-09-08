"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _cardValidator = _interopRequireDefault(require("card-validator"));

var _LibraryContext = _interopRequireDefault(require("../../LibraryContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CARDS = {
  visa: {
    icon: require('./icons/visa.png.js'),
    animation: require('./lottie/visa.json')
  },
  mastercard: {
    icon: require('./icons/mastercard.png.js'),
    animation: require('./lottie/mastercard.json')
  },
  'american-express': {
    icon: require('./icons/amex.png.js'),
    animation: require('./lottie/amex.json'),
    alternativeAnimation: require('./lottie/amexBlue.json')
  },
  discover: {
    icon: require('./icons/discover.png.js'),
    animation: require('./lottie/discover.json')
  }
};
debugger;

const CardIcon = props => {
  const {
    LottieView
  } = (0, _react.useContext)(_LibraryContext.default);
  const {
    cardNumber
  } = props;

  const {
    card
  } = _cardValidator.default.number(cardNumber);

  const animRef = (0, _react.useCallback)(node => {
    if (node !== null) {
      node.play();
    }
  }, []);
  const data = CARDS[(card === null || card === void 0 ? void 0 : card.type) || -1];
  if (!data) return null;

  if (!LottieView) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      style: styles.icon,
      source: {
        uri: data.icon.data
      }
    });
  }

  return /*#__PURE__*/_react.default.createElement(LottieView, {
    ref: animRef,
    style: styles.lottie,
    source: data.animation,
    loop: false
  });
};

const styles = _reactNative.StyleSheet.create({
  icon: {
    width: 48,
    height: 48
  },
  lottie: {
    width: 36,
    height: 36
  }
});

var _default = CardIcon;
exports.default = _default;
//# sourceMappingURL=index.js.map