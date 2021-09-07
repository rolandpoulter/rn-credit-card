import React, { useRef, useState, useEffect } from 'react';
import { Keyboard, Platform, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import { useFormContext } from 'react-hook-form';
import cardValidator from 'card-validator';
import FormTextField from './FormTextField';
import { cardNumberFormatter, expirationDateFormatter } from '../utils/formatters';
import LibraryContext from '../LibraryContext';
import Button from './Button';
import CardIcon from './CardIcon';
import Conditional from './Conditional';
import FormCard from './FormCard';
import { getTranslations } from '../utils/translations';
import { CardFields } from '../types';

const CreditCardForm = props => {
  var _props$fonts, _props$fonts2;

  const {
    horizontalStart = true,
    translations: parentTranslations,
    overrides
  } = props;
  const translations = getTranslations(parentTranslations);
  const {
    trigger,
    watch
  } = useFormContext();
  const cardNumber = watch('cardNumber');
  const {
    card
  } = cardValidator.number(cardNumber);
  const isAmex = (card === null || card === void 0 ? void 0 : card.type) === 'american-express';
  const cvvLength = isAmex ? 4 : 3;
  const [isHorizontal, setIsHorizontal] = useState(horizontalStart && Platform.OS === 'ios');
  const {
    width: windowWidth
  } = useWindowDimensions(); // input has 36*2 padding

  const inputWidth = windowWidth - 72;
  const scrollRef = useRef(null);
  const holderNameRef = useRef(null);
  const cardNumberRef = useRef(null);
  const expirationRef = useRef(null);
  const cvvRef = useRef(null);
  const [focusedField, setFocusedField] = useState(null);
  useEffect(() => {
    if (cardNumberRef !== null && cardNumberRef !== void 0 && cardNumberRef.current) {
      cardNumberRef.current.focus();
    }
  }, [cardNumberRef]);
  const textFieldStyle = isHorizontal ? [styles.textField, {
    width: inputWidth
  }] : styles.regularField;

  async function goNext() {
    var _ref$current;

    if (focusedField === null) return;
    const field = ['cardNumber', 'holderName', 'expiration', 'cvv'][focusedField];

    if (isHorizontal) {
      var _scrollRef$current;

      const result = await trigger(field);
      if (!result) return;
      (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 ? void 0 : _scrollRef$current.scrollTo({
        x: (focusedField + 1) * inputWidth
      });
    }

    if (focusedField === CardFields.CVV) {
      setFocusedField(null);
      setIsHorizontal(false);
      Keyboard.dismiss();
      return;
    }

    const ref = [cardNumberRef, holderNameRef, expirationRef, cvvRef][focusedField + 1];
    (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.focus();
  }

  return /*#__PURE__*/React.createElement(LibraryContext.Provider, {
    value: { ...props,
      overrides: overrides || {},
      fonts: {
        regular: ((_props$fonts = props.fonts) === null || _props$fonts === void 0 ? void 0 : _props$fonts.regular) || 'RobotoMono_400Regular',
        bold: ((_props$fonts2 = props.fonts) === null || _props$fonts2 === void 0 ? void 0 : _props$fonts2.bold) || 'RobotoMono_700Bold'
      },
      translations
    }
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Conditional, {
    condition: !props.formOnly
  }, /*#__PURE__*/React.createElement(FormCard, {
    cardType: card === null || card === void 0 ? void 0 : card.type,
    focusedField: focusedField
  })), /*#__PURE__*/React.createElement(ScrollView, {
    ref: scrollRef,
    style: isHorizontal && {
      maxHeight: 120
    },
    pagingEnabled: isHorizontal,
    horizontal: isHorizontal,
    scrollEnabled: !isHorizontal,
    keyboardShouldPersistTaps: "handled"
  }, /*#__PURE__*/React.createElement(FormTextField, {
    style: textFieldStyle,
    ref: cardNumberRef,
    name: "cardNumber",
    label: translations.cardNumber,
    keyboardType: "number-pad",
    autoCompleteType: "cc-number",
    maxLength: 19,
    validationLength: isAmex ? 18 : 19,
    rules: {
      required: translations.cardNumberRequired,
      validate: {
        isValid: value => {
          return cardValidator.number(value).isValid || translations.cardNumberInvalid;
        }
      }
    },
    formatter: cardNumberFormatter,
    endEnhancer: /*#__PURE__*/React.createElement(CardIcon, {
      cardNumber: cardNumber
    }),
    onFocus: () => setFocusedField(CardFields.CardNumber),
    onValid: goNext
  }), /*#__PURE__*/React.createElement(FormTextField, {
    style: textFieldStyle,
    ref: holderNameRef,
    name: "holderName",
    autoCompleteType: "name",
    label: translations.cardHolderName,
    rules: {
      required: translations.cardHolderNameRequired,
      validate: {
        isValid: value => {
          return cardValidator.cardholderName(value).isValid || translations.cardHolderNameInvalid;
        }
      }
    },
    autoCorrect: false,
    onSubmitEditing: goNext,
    onFocus: () => setFocusedField(CardFields.CardHolderName)
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.row
  }, /*#__PURE__*/React.createElement(FormTextField, {
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
    rules: {
      required: translations.expirationRequired,
      validate: {
        isValid: value => {
          return cardValidator.expirationDate(value).isValid || translations.expirationInvalid;
        }
      }
    },
    formatter: expirationDateFormatter,
    onFocus: () => setFocusedField(CardFields.Expiration),
    onValid: goNext
  }), /*#__PURE__*/React.createElement(FormTextField, {
    style: textFieldStyle,
    ref: cvvRef,
    name: "cvv",
    label: translations.securityCode,
    keyboardType: "number-pad",
    autoCompleteType: "cc-csc",
    maxLength: cvvLength,
    validationLength: cvvLength,
    rules: {
      required: translations.securityCodeRequired,
      validate: {
        isValid: value => {
          return cardValidator.cvv(value, cvvLength).isValid || translations.securityCodeInvalid;
        }
      }
    },
    onFocus: () => setFocusedField(CardFields.CVV),
    onValid: goNext
  }))), /*#__PURE__*/React.createElement(Conditional, {
    condition: isHorizontal
  }, /*#__PURE__*/React.createElement(Button, {
    style: [styles.button, overrides === null || overrides === void 0 ? void 0 : overrides.button],
    title: focusedField === CardFields.CVV ? translations.done : translations.next,
    onPress: goNext
  }))));
};

const styles = StyleSheet.create({
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
export default CreditCardForm;
//# sourceMappingURL=CreditCardForm.js.map