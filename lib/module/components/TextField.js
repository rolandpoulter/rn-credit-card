function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext, useEffect, useRef, useState } from 'react';
import { TextInput, StyleSheet, View, Animated, Easing, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';
import LibraryContext from '../LibraryContext';
const TextField = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    label,
    errorText,
    value,
    endEnhancer,
    style,
    onBlur,
    onFocus,
    ...restOfProps
  } = props;
  const {
    inputColors = {},
    fonts,
    overrides
  } = useContext(LibraryContext);
  const {
    errored: errorColor = '#B00020',
    focused: focusedColor = '#080F9C',
    regular: regularColor = '#B9C4CA'
  } = inputColors;
  const [isFocused, setIsFocused] = useState(false);
  const focusAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true
    }).start();
  }, [focusAnim, isFocused, value]);
  let color = isFocused ? focusedColor : regularColor;

  if (errorText) {
    color = errorColor;
  }

  return /*#__PURE__*/React.createElement(View, {
    style: style
  }, /*#__PURE__*/React.createElement(TextInput, _extends({
    style: [styles.input, {
      fontFamily: fonts.regular
    }, overrides.input, {
      borderColor: color
    }],
    ref: ref
  }, restOfProps, {
    value: value,
    onBlur: event => {
      setIsFocused(false);
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    },
    onFocus: event => {
      setIsFocused(true);
      onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
    }
  })), /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    onPress: () => {
      var _ref$current;

      // @ts-ignore
      ref === null || ref === void 0 ? void 0 : (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.focus();
    }
  }, /*#__PURE__*/React.createElement(Animated.View, {
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
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.label, overrides.inputLabel, {
      color
    }],
    bold: true
  }, label, errorText ? '*' : ''))), endEnhancer && /*#__PURE__*/React.createElement(View, {
    style: styles.enhancerContainer
  }, endEnhancer), !!errorText && /*#__PURE__*/React.createElement(Text, {
    style: [styles.error, overrides.errorText]
  }, errorText));
});
const styles = StyleSheet.create({
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
export default TextField;
//# sourceMappingURL=TextField.js.map