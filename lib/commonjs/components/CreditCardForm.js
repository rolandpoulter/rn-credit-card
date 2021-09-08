"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactHookForm = require("react-hook-form");

var _cardValidator = _interopRequireDefault(require("card-validator"));

var _FormTextField = _interopRequireDefault(require("./FormTextField"));

var _formatters = require("../utils/formatters");

var _LibraryContext = _interopRequireDefault(require("../LibraryContext"));

var _Button = _interopRequireDefault(require("./Button"));

var _CardIcon = _interopRequireDefault(require("./CardIcon"));

var _Conditional = _interopRequireDefault(require("./Conditional"));

var _FormCard = _interopRequireDefault(require("./FormCard"));

var _translations = require("../utils/translations");

var _types = require("../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CreditCardForm = props => {
  var _props$fonts, _props$fonts2;

  const {
    horizontalStart = true,
    translations: parentTranslations,
    overrides,
    disabled
  } = props;
  const translations = (0, _translations.getTranslations)(parentTranslations);
  const formContext = (0, _reactHookForm.useFormContext)();
  const {
    trigger,
    watch
  } = formContext;
  const cardNumber = watch('cardNumber');

  const {
    card
  } = _cardValidator.default.number(cardNumber);

  const isAmex = (card === null || card === void 0 ? void 0 : card.type) === 'american-express';
  const cvvLength = isAmex ? 4 : 3;
  const [isHorizontal, setIsHorizontal] = (0, _react.useState)(horizontalStart && _reactNative.Platform.OS === 'ios');
  const {
    width: windowWidth
  } = (0, _reactNative.useWindowDimensions)(); // input has 36*2 padding

  const inputWidth = windowWidth - 72;
  const scrollRef = (0, _react.useRef)(null);
  const holderNameRef = (0, _react.useRef)(null);
  const cardNumberRef = (0, _react.useRef)(null);
  const expirationRef = (0, _react.useRef)(null);
  const cvvRef = (0, _react.useRef)(null);
  const [focusedField, setFocusedField] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    if (cardNumberRef !== null && cardNumberRef !== void 0 && cardNumberRef.current) {
      cardNumberRef.current.focus();
    }
  }, [cardNumberRef]);
  const textFieldStyle = isHorizontal ? [styles.textField, {
    width: inputWidth
  }] : styles.regularField;

  async function goNext() {
    var _ref$current;

    if (focusedField === null || disabled) return;
    const field = ['cardNumber', 'holderName', 'expiration', 'cvv'][focusedField];

    if (isHorizontal) {
      var _scrollRef$current;

      const result = await trigger(field);
      if (!result) return;
      (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 ? void 0 : _scrollRef$current.scrollTo({
        x: (focusedField + 1) * inputWidth
      });
    }

    if (focusedField === _types.CardFields.CVV) {
      setFocusedField(null);
      setIsHorizontal(false);

      _reactNative.Keyboard.dismiss();

      return;
    }

    const ref = [cardNumberRef, holderNameRef, expirationRef, cvvRef][focusedField + 1];
    (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.focus();
  }

  return /*#__PURE__*/_react.default.createElement(_LibraryContext.default.Provider, {
    value: { ...props,
      overrides: overrides || {},
      fonts: {
        regular: (_props$fonts = props.fonts) === null || _props$fonts === void 0 ? void 0 : _props$fonts.regular,
        // || 'RobotoMono_400Regular',
        bold: (_props$fonts2 = props.fonts) === null || _props$fonts2 === void 0 ? void 0 : _props$fonts2.bold // || 'RobotoMono_700Bold',

      },
      translations
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_Conditional.default, {
    condition: !props.formOnly
  }, /*#__PURE__*/_react.default.createElement(_FormCard.default, {
    cardType: card === null || card === void 0 ? void 0 : card.type,
    focusedField: focusedField,
    disabled: disabled
  })), /*#__PURE__*/_react.default.createElement(_reactNative.ScrollView, {
    ref: scrollRef,
    style: isHorizontal && {
      maxHeight: 120
    },
    pagingEnabled: isHorizontal,
    horizontal: isHorizontal,
    scrollEnabled: !isHorizontal,
    keyboardShouldPersistTaps: "handled"
  }, /*#__PURE__*/_react.default.createElement(_FormTextField.default, {
    style: textFieldStyle,
    ref: cardNumberRef,
    name: "cardNumber",
    label: translations.cardNumber,
    keyboardType: "number-pad",
    autoCompleteType: "cc-number",
    maxLength: 19,
    validationLength: isAmex ? 18 : 19,
    disabled: disabled,
    rules: {
      required: translations.cardNumberRequired,
      validate: {
        isValid: value => {
          return _cardValidator.default.number(value).isValid || translations.cardNumberInvalid;
        }
      }
    },
    formatter: _formatters.cardNumberFormatter,
    endEnhancer: /*#__PURE__*/_react.default.createElement(_CardIcon.default, {
      cardNumber: cardNumber,
      disabled: disabled
    }),
    onFocus: () => !disabled && setFocusedField(_types.CardFields.CardNumber),
    onValid: goNext,
    onChange: value => {
      if (props.onChange) {
        props.onChange('cardName', value, formContext);
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_FormTextField.default, {
    style: textFieldStyle,
    ref: holderNameRef,
    name: "holderName",
    autoCompleteType: "name",
    label: translations.cardHolderName,
    disabled: disabled,
    rules: {
      required: translations.cardHolderNameRequired,
      validate: {
        isValid: value => {
          return _cardValidator.default.cardholderName(value).isValid || translations.cardHolderNameInvalid;
        }
      }
    },
    autoCorrect: false,
    onSubmitEditing: goNext,
    onFocus: () => !disabled && setFocusedField(_types.CardFields.CardHolderName),
    onChange: value => {
      if (props.onChange) {
        props.onChange('holderName', value, formContext);
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.row
  }, /*#__PURE__*/_react.default.createElement(_FormTextField.default, {
    style: [textFieldStyle, {
      marginRight: isHorizontal ? 0 : 24
    }],
    ref: expirationRef,
    name: "expiration",
    label: translations.expiration,
    keyboardType: "number-pad",
    autoCompleteType: "cc-exp",
    maxLength: 5,
    validationLength: 5,
    disabled: disabled,
    rules: {
      required: translations.expirationRequired,
      validate: {
        isValid: value => {
          return _cardValidator.default.expirationDate(value).isValid || translations.expirationInvalid;
        }
      }
    },
    formatter: _formatters.expirationDateFormatter,
    onFocus: () => setFocusedField(_types.CardFields.Expiration),
    onValid: goNext,
    onChange: value => {
      if (props.onChange) {
        props.onChange('expiration', value, formContext);
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_FormTextField.default, {
    style: textFieldStyle,
    ref: cvvRef,
    name: "cvv",
    label: translations.securityCode,
    keyboardType: "number-pad",
    autoCompleteType: "cc-csc",
    maxLength: cvvLength,
    validationLength: cvvLength,
    disabled: disabled,
    rules: {
      required: translations.securityCodeRequired,
      validate: {
        isValid: value => {
          return _cardValidator.default.cvv(value, cvvLength).isValid || translations.securityCodeInvalid;
        }
      }
    },
    onFocus: () => !disabled && setFocusedField(_types.CardFields.CVV),
    onValid: goNext,
    onChange: value => {
      if (props.onChange) {
        props.onChange('cvv', value, formContext);
      }
    }
  }))), /*#__PURE__*/_react.default.createElement(_Conditional.default, {
    condition: isHorizontal
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    style: [styles.button, overrides === null || overrides === void 0 ? void 0 : overrides.button],
    title: focusedField === _types.CardFields.CVV ? translations.done : translations.next,
    onPress: goNext,
    disabled: disabled
  }))));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 36
  },
  textField: {
    marginTop: 24,
    height: 100
  },
  regularField: {
    flex: 1,
    marginTop: 24
  },
  button: {
    width: 100,
    alignSelf: 'flex-end',
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 24,
    backgroundColor: '#0093E9'
  }
});

var _default = CreditCardForm;
exports.default = _default;
//# sourceMappingURL=CreditCardForm.js.map