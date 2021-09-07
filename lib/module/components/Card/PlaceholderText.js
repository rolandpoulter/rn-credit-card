import React from 'react';
import { StyleSheet } from 'react-native';
import Text from '../Text';

const PlaceholderText = props => {
  const {
    value,
    placeholder,
    onLayout,
    style
  } = props;
  const rest = placeholder.substring(value.length);
  return /*#__PURE__*/React.createElement(Text, {
    style: style,
    bold: true,
    numberOfLines: 1,
    onLayout: onLayout
  }, value, /*#__PURE__*/React.createElement(Text, {
    style: styles.placeholder
  }, rest));
};

const styles = StyleSheet.create({
  placeholder: {
    color: 'gray'
  }
});
export default PlaceholderText;
//# sourceMappingURL=PlaceholderText.js.map