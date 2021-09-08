"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("@testing-library/react-native");

var _getter = require("bdd-lazy-var/getter");

var _CreditCardForm = _interopRequireDefault(require("./CreditCardForm"));

var _reactNative2 = require("react-native");

var _CreditCardProvider = _interopRequireDefault(require("./CreditCardProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Wrapper = () => {
  const onSubmit = model => {
    _getter.get.onSubmit(model);
  };

  return /*#__PURE__*/_react.default.createElement(_CreditCardProvider.default, null, provider => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_CreditCardForm.default, null), /*#__PURE__*/_react.default.createElement(_reactNative2.Button, {
    onPress: provider.handleSubmit(onSubmit),
    title: 'Submit'
  })));
};

(0, _getter.def)('render', () => () => (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(Wrapper, null)));
(0, _getter.def)('onSubmit', () => jest.fn());
it('validates credit card number', async () => {
  const {
    queryByText,
    getByTestId
  } = _getter.get.render(); // does not display validation message until input is filled


  const cardInput = getByTestId('TextField.cardNumber');

  _reactNative.fireEvent.changeText(cardInput, '55555555');

  await (0, _reactNative.waitFor)(() => {
    expect(queryByText(/This card number looks invalid./)).toBeNull();
  }); // invalid card

  _reactNative.fireEvent.changeText(cardInput, '5555555555554440');

  await (0, _reactNative.waitFor)(() => {
    expect(queryByText(/This card number looks invalid./)).not.toBeNull();
  }); // valid card

  _reactNative.fireEvent.changeText(cardInput, '5555 5555 5555 4444');

  await (0, _reactNative.waitFor)(() => {
    expect(queryByText(/This card number looks invalid./)).toBeNull();
  });
});
it('validates expiration date', async () => {
  const {
    queryByText,
    getByTestId
  } = _getter.get.render();

  const input = getByTestId('TextField.expiration'); // passed expiration date

  _reactNative.fireEvent.changeText(input, '1018');

  await (0, _reactNative.waitFor)(() => expect(queryByText(/This expiration date looks invalid./)).not.toBeNull()); // valid date

  _reactNative.fireEvent.changeText(input, '10/23');

  await (0, _reactNative.waitFor)(() => expect(queryByText(/This expiration date looks invalid./)).toBeNull());
});
it('validates cvv', async () => {
  const {
    queryByText,
    getByTestId
  } = _getter.get.render();

  const input = getByTestId('TextField.cvv'); // invalid input

  _reactNative.fireEvent.changeText(input, '4444');

  await (0, _reactNative.waitFor)(() => expect(queryByText('This security code looks invalid.')).not.toBeNull()); // valid input

  _reactNative.fireEvent.changeText(input, '333');

  await (0, _reactNative.waitFor)(() => expect(queryByText('This security code looks invalid.')).toBeNull());
});
it('submits the form', async () => {
  const {
    getByText,
    getByTestId
  } = _getter.get.render();

  _reactNative.fireEvent.changeText(getByTestId('TextField.holderName'), 'Halil Bilir');

  _reactNative.fireEvent.changeText(getByTestId('TextField.cardNumber'), '5555555555554444');

  _reactNative.fireEvent.changeText(getByTestId('TextField.expiration'), '0224');

  _reactNative.fireEvent.changeText(getByTestId('TextField.cvv'), '333');

  _reactNative.fireEvent.press(getByText('Submit'));

  await (0, _reactNative.waitFor)(() => expect(_getter.get.onSubmit).toHaveBeenLastCalledWith({
    holderName: 'Halil Bilir',
    // cardNumber and expiration are now formatted
    cardNumber: '5555 5555 5555 4444',
    expiration: '02/24',
    cvv: '333'
  }));
});
//# sourceMappingURL=CreditCardForm.test.js.map