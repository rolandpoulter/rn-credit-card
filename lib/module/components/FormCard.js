import React from 'react';
import Card from './Card';
import { useFormContext } from 'react-hook-form';

const FormCard = ({
  cardType,
  focusedField
}) => {
  const {
    watch
  } = useFormContext();
  const model = watch();
  return /*#__PURE__*/React.createElement(Card, {
    cardType: cardType,
    focusedField: focusedField,
    model: {
      cardNumber: model.cardNumber,
      expiration: model.expiration,
      holderName: model.holderName,
      cvv: model.cvv
    }
  });
};

export default FormCard;
//# sourceMappingURL=FormCard.js.map