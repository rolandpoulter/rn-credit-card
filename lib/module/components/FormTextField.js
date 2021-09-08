function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import TextField from './TextField';
const FormTextField = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    name,
    rules,
    validationLength = 1,
    formatter,
    onBlur,
    onValid,
    disabled,
    ...restOfProps
  } = props;
  const {
    control,
    formState,
    trigger,
    watch
  } = useFormContext();
  const value = watch(name);
  useEffect(() => {
    async function validate() {
      const isValid = await trigger(name);
      if (isValid) onValid === null || onValid === void 0 ? void 0 : onValid();
    }

    if (value.length >= validationLength) {
      validate();
    }
  }, [value, name, validationLength, trigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return /*#__PURE__*/React.createElement(Controller, {
    control: control,
    render: ({
      field
    }) => {
      var _formState$errors$nam;

      return /*#__PURE__*/React.createElement(TextField // passing everything down to TextField
      // to be able to support all TextInput props
      , _extends({}, restOfProps, {
        disabled: disabled,
        ref: ref,
        testID: `TextField.${name}`,
        errorText: (_formState$errors$nam = formState.errors[name]) === null || _formState$errors$nam === void 0 ? void 0 : _formState$errors$nam.message,
        onBlur: event => {
          if (disabled) {
            return;
          }

          field.onBlur();
          onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
        },
        onChangeText: text => {
          if (disabled) {
            return;
          }

          const formatted = formatter ? formatter(field.value, text) : text;
          field.onChange(formatted);

          if (props.onChange) {
            props.onChange(formatted, text);
          }
        },
        value: field.value
      }));
    },
    name: name,
    rules: rules
  });
});
export default FormTextField;
//# sourceMappingURL=FormTextField.js.map