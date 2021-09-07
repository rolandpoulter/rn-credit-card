import React, { useRef, useState, useEffect, useContext } from 'react';
import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native';
import CardIcon from '../CardIcon';
import PlaceholderText from './PlaceholderText';
import Text from '../Text';
import LibraryContext from '../../LibraryContext';

const FrontSide = ({
  model,
  cardType,
  focusedField
}) => {
  const {
    overrides,
    translations
  } = useContext(LibraryContext);
  const [numberLayout, setNumberLayout] = useState(null);
  const [nameLayout, setNameLayout] = useState(null);
  const [expirationLayout, setExpirationLayout] = useState(null);
  const {
    width: windowWidth
  } = useWindowDimensions();
  const positionAnim = useRef(new Animated.ValueXY()).current;
  const sizeAnim = useRef(new Animated.ValueXY()).current;
  useEffect(() => {
    function animate(layout) {
      Animated.spring(positionAnim, {
        toValue: {
          x: layout.x - 8,
          y: layout.y
        },
        useNativeDriver: false
      }).start();
      Animated.spring(sizeAnim, {
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(View, {
    style: styles.header
  }, /*#__PURE__*/React.createElement(CardIcon, {
    cardNumber: model.cardNumber
  })), /*#__PURE__*/React.createElement(PlaceholderText, {
    style: [styles.numberText, {
      fontSize: windowWidth < 390 ? 20 : 22
    }, overrides.cardPreview],
    value: model.cardNumber,
    placeholder: cardType === 'american-express' ? 'XXXX XXXXXX XXXXX' : 'XXXX XXXX XXXX XXXX',
    onLayout: ({
      nativeEvent
    }) => setNumberLayout(nativeEvent.layout)
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.labelContainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.labelText, overrides.labelText]
  }, translations.cardHolderName.toUpperCase()), /*#__PURE__*/React.createElement(Text, {
    style: [styles.labelText, overrides.labelText]
  }, translations.expiration)), /*#__PURE__*/React.createElement(Text, {
    style: [styles.bottomText, styles.nameText, {
      color: model.holderName ? 'white' : 'gray'
    }, overrides.cardHolderPreview],
    numberOfLines: 1,
    onLayout: ({
      nativeEvent
    }) => setNameLayout(nativeEvent.layout)
  }, model.holderName.toUpperCase() || translations.nameSurname), /*#__PURE__*/React.createElement(PlaceholderText, {
    style: [styles.bottomText, styles.expirationText, overrides.expirationPreview],
    value: model.expiration,
    placeholder: translations.mmYY,
    onLayout: ({
      nativeEvent
    }) => setExpirationLayout(nativeEvent.layout)
  }), /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.outline, overrides.outline, {
      left: positionAnim.x,
      top: positionAnim.y,
      width: sizeAnim.x,
      height: sizeAnim.y
    }]
  }));
};

const styles = StyleSheet.create({
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
export default FrontSide;
//# sourceMappingURL=FrontSide.js.map