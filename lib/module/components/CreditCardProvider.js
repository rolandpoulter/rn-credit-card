import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';

const CreditCardProvider = props => {
  const formMethods = useForm({
    mode: 'onBlur',
    defaultValues: {
      holderName: '',
      cardNumber: '',
      expiration: '',
      cvv: ''
    }
  });
  const {
    handleSubmit
  } = formMethods;
  return /*#__PURE__*/React.createElement(FormProvider, formMethods, typeof props.children === 'function' ? props.children({
    formMethods,
    handleSubmit
  }) : props.children);
};

export default CreditCardProvider;
//# sourceMappingURL=CreditCardProvider.js.map