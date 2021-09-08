import React, { useCallback, useContext } from 'react';
import { Image, StyleSheet } from 'react-native';
import cardValidator from 'card-validator';
import LibraryContext from '../../LibraryContext';
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

const CardIcon = props => {
  const {
    LottieView
  } = useContext(LibraryContext);
  const {
    cardNumber,
    disabled
  } = props;
  const {
    card
  } = cardValidator.number(cardNumber);
  const animRef = useCallback(node => {
    if (node !== null) {
      node.play();
    }
  }, []);
  const data = CARDS[(card === null || card === void 0 ? void 0 : card.type) || -1];
  if (!data || disabled) return null;

  if (!LottieView) {
    return /*#__PURE__*/React.createElement(Image, {
      style: styles.icon,
      source: data.icon
    });
  }

  return /*#__PURE__*/React.createElement(LottieView, {
    ref: animRef,
    style: styles.lottie,
    source: data.animation,
    loop: false
  });
};

const styles = StyleSheet.create({
  icon: {
    width: 48,
    height: 48
  },
  lottie: {
    width: 36,
    height: 36
  }
});
export default CardIcon;
//# sourceMappingURL=index.js.map