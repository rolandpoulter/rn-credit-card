import React, { useContext, useEffect, useRef } from 'react';
import { Image, StyleSheet } from 'react-native';
import FlipCard from 'react-native-card-flip';
import { CardFields } from '../../types';
import LibraryContext from '../../LibraryContext';
import BackSide from './BackSide';
import FrontSide from './FrontSide';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const background = require('../../assets/background.png.js');

const Card = ({
  model,
  cardType,
  focusedField,
  disabled
}) => {
  const {
    backgroundImage
  } = useContext(LibraryContext);
  const previousFocused = usePrevious(focusedField);
  const cardRef = useRef();
  useEffect(() => {
    const switchToBack = focusedField === CardFields.CVV && previousFocused !== CardFields.CVV;
    const switchToFront = focusedField !== CardFields.CVV && previousFocused === CardFields.CVV;

    if (switchToBack || switchToFront) {
      var _cardRef$current;

      (_cardRef$current = cardRef.current) === null || _cardRef$current === void 0 ? void 0 : _cardRef$current.flip();
    }
  }, [focusedField, previousFocused]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FlipCard, {
    style: [styles.container, disabled ? {
      opacity: 0.1
    } : {}],
    ref: cardRef
  }, /*#__PURE__*/React.createElement(React.Fragment, null, backgroundImage || /*#__PURE__*/React.createElement(Image, {
    style: styles.background,
    source: background
  }), /*#__PURE__*/React.createElement(FrontSide, {
    model: model,
    cardType: cardType,
    focusedField: focusedField
  })), /*#__PURE__*/React.createElement(React.Fragment, null, backgroundImage || /*#__PURE__*/React.createElement(Image, {
    style: styles.background,
    source: background
  }), /*#__PURE__*/React.createElement(BackSide, {
    model: model,
    cardType: cardType
  }))));
};

const styles = StyleSheet.create({
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
export default Card;
//# sourceMappingURL=index.js.map