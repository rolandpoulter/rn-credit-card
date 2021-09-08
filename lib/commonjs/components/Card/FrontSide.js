"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _CardIcon = _interopRequireDefault(require("../CardIcon"));

var _PlaceholderText = _interopRequireDefault(require("./PlaceholderText"));

var _Text = _interopRequireDefault(require("../Text"));

var _LibraryContext = _interopRequireDefault(require("../../LibraryContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const FrontSide = ({
  model,
  cardType,
  focusedField,
  disabled
}) => {
  const {
    overrides,
    translations
  } = (0, _react.useContext)(_LibraryContext.default);
  const [numberLayout, setNumberLayout] = (0, _react.useState)(null);
  const [nameLayout, setNameLayout] = (0, _react.useState)(null);
  const [expirationLayout, setExpirationLayout] = (0, _react.useState)(null);
  const {
    width: windowWidth
  } = (0, _reactNative.useWindowDimensions)();
  const positionAnim = (0, _react.useRef)(new _reactNative.Animated.ValueXY()).current;
  const sizeAnim = (0, _react.useRef)(new _reactNative.Animated.ValueXY()).current;
  (0, _react.useEffect)(() => {
    function animate(layout) {
      _reactNative.Animated.spring(positionAnim, {
        toValue: {
          x: layout.x - 8,
          y: layout.y
        },
        useNativeDriver: false
      }).start();

      _reactNative.Animated.spring(sizeAnim, {
        toValue: {
          x: layout.width + 16,
          y: layout.height + 4
        },
        useNativeDriver: false
      }).start();
    }

    if (focusedField === null) {
      return;
    }

    const layout = [numberLayout, nameLayout, expirationLayout][focusedField];

    if (layout) {
      animate(layout);
    }
  }, [focusedField, numberLayout, nameLayout, expirationLayout, sizeAnim, positionAnim]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.header
  }, /*#__PURE__*/_react.default.createElement(_CardIcon.default, {
    cardNumber: model.cardNumber,
    disabled: disabled
  })), /*#__PURE__*/_react.default.createElement(_PlaceholderText.default, {
    style: [styles.numberText, {
      fontSize: windowWidth < 390 ? 20 : 22
    }, overrides.cardPreview],
    value: model.cardNumber,
    placeholder: cardType === 'american-express' ? 'XXXX XXXXXX XXXXX' : 'XXXX XXXX XXXX XXXX',
    onLayout: ({
      nativeEvent
    }) => setNumberLayout(nativeEvent.layout)
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.labelContainer
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    style: [styles.labelText, overrides.labelText]
  }, translations.cardHolderName.toUpperCase()), /*#__PURE__*/_react.default.createElement(_Text.default, {
    style: [styles.labelText, overrides.labelText]
  }, translations.expiration)), /*#__PURE__*/_react.default.createElement(_Text.default, {
    style: [styles.bottomText, styles.nameText, {
      color: model.holderName ? 'white' : 'gray'
    }, overrides.cardHolderPreview],
    numberOfLines: 1,
    onLayout: ({
      nativeEvent
    }) => setNameLayout(nativeEvent.layout)
  }, model.holderName.toUpperCase() || translations.nameSurname), /*#__PURE__*/_react.default.createElement(_PlaceholderText.default, {
    style: [styles.bottomText, styles.expirationText, overrides.expirationPreview],
    value: model.expiration,
    placeholder: translations.mmYY,
    onLayout: ({
      nativeEvent
    }) => setExpirationLayout(nativeEvent.layout)
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [styles.outline, overrides.outline, {
      left: positionAnim.x,
      top: positionAnim.y,
      width: sizeAnim.x,
      height: sizeAnim.y
    }]
  }));
};

const styles = _reactNative.StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'flex-end',
    margin: 8
  },
  numberText: {
    position: 'absolute',
    top: '40%',
    left: 24,
    color: 'white',
    letterSpacing: 2,
    lineHeight: 36
  },
  bottomText: {
    position: 'absolute',
    bottom: 24,
    fontSize: 12,
    letterSpacing: 2,
    color: 'white',
    alignSelf: 'flex-start'
  },
  nameText: {
    left: 24,
    maxWidth: '70%'
  },
  expirationText: {
    right: 24
  },
  labelContainer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 24,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  labelText: {
    marginBottom: 4,
    fontSize: 12,
    color: 'white',
    letterSpacing: 1
  },
  outline: {
    position: 'absolute',
    height: 38,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#f4d01a',
    borderRadius: 14
  }
});

var _default = FrontSide;
exports.default = _default;
//# sourceMappingURL=FrontSide.js.map