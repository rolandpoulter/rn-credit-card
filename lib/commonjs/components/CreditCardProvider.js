"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHookForm = require("react-hook-form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CreditCardProvider = props => {
  const formMethods = (0, _reactHookForm.useForm)({
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
  return /*#__PURE__*/_react.default.createElement(_reactHookForm.FormProvider, formMethods, typeof props.children === 'function' ? props.children({
    formMethods,
    handleSubmit
  }) : props.children);
};

var _default = CreditCardProvider;
exports.default = _default;
//# sourceMappingURL=CreditCardProvider.js.map