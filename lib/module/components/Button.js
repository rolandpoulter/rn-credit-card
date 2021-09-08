function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';

const Button = props => {
  const {
    title,
    style,
    disabled,
    ...restOfProps
  } = props;
  return /*#__PURE__*/React.createElement(TouchableOpacity, _extends({
    style: [styles.container, {
      opacity: disabled ? 0.1 : 1
    }, style]
  }, restOfProps), /*#__PURE__*/React.createElement(Text, {
    style: styles.text
  }, title));
};

const styles = StyleSheet.create({
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
export default Button;
//# sourceMappingURL=Button.js.map