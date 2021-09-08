import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import CardIcon from '../CardIcon';
import PlaceholderText from './PlaceholderText';

const tape = require('../../assets/tape.png.js');

const BackSide = ({
  model,
  cardType
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(View, {
    style: styles.black
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.tapeContainer
  }, /*#__PURE__*/React.createElement(Image, {
    style: styles.tape,
    source: {
      uri: tape.data
    }
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.cvvContainer
  }, /*#__PURE__*/React.createElement(PlaceholderText, {
    style: styles.cvvText,
    value: model.cvv,
    placeholder: cardType === 'american-express' ? 'XXXX' : 'XXX'
  }))), /*#__PURE__*/React.createElement(View, {
    style: styles.footer
  }, /*#__PURE__*/React.createElement(CardIcon, {
    cardNumber: model.cardNumber
  })));
};

const styles = StyleSheet.create({
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
export default BackSide;
//# sourceMappingURL=BackSide.js.map