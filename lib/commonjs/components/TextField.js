"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Text = _interopRequireDefault(require("./Text"));

var _LibraryContext = _interopRequireDefault(require("../LibraryContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const TextField = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    label,
    errorText,
    value,
    endEnhancer,
    style,
    onBlur,
    onFocus,
    disabled,
    ...restOfProps
  } = props;
  const {
    inputColors = {},
    fonts,
    overrides
  } = (0, _react.useContext)(_LibraryContext.default);
  const {
    errored: errorColor = '#B00020',
    focused: focusedColor = '#080F9C',
    regular: regularColor = '#B9C4CA'
  } = inputColors;
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const focusAnim = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
  (0, _react.useEffect)(() => {
    _reactNative.Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 150,
      easing: _reactNative.Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true
    }).start();
  }, [focusAnim, isFocused, value]);
  let color = isFocused ? focusedColor : regularColor;

  if (errorText) {
    color = errorColor;
  }

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, _extends({
    style: [styles.input, {
      fontFamily: fonts.regular
    }, overrides.input, {
      borderColor: color
    }],
    disabled: disabled,
    ref: ref
  }, restOfProps, {
    value: value,
    onBlur: event => {
      if (disabled) {
        return;
      }

      setIsFocused(false);
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    },
    onFocus: event => {
      if (disabled) {
        return;
      }

      setIsFocused(true);
      onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
    }
  })), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableWithoutFeedback, {
    onPress: () => {
      var _ref$current;

      if (disabled) {
        return;
      } // @ts-ignore


      ref === null || ref === void 0 ? void 0 : (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.focus();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [styles.labelContainer, {
      transform: [{
        scale: focusAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0.75]
        })
      }, {
        translateY: focusAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [24, -12]
        })
      }, {
        translateX: focusAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [16, 0]
        })
      }]
    }, overrides.labelContainer]
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    style: [styles.label, overrides.inputLabel, {
      color
    }],
    bold: true
  }, label, errorText ? '*' : ''))), endEnhancer && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.enhancerContainer
  }, endEnhancer), !!errorText && /*#__PURE__*/_react.default.createElement(_Text.default, {
    style: [styles.error, overrides.errorText]
  }, errorText));
});

const styles = _reactNative.StyleSheet.create({
  input: {
    padding: 24,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16
  },
  labelContainer: {
    position: 'absolute',
    paddingHorizontal: 8,
    backgroundColor: 'white'
  },
  label: {
    fontSize: 14
  },
  enhancerContainer: {
    position: 'absolute',
    top: 12,
    right: 16
  },
  error: {
    marginTop: 4,
    marginLeft: 12,
    fontSize: 12,
    color: '#B00020'
  }
});

var _default = TextField;
exports.default = _default;
//# sourceMappingURL=TextField.js.map