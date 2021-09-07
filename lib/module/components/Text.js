function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import { Text as GlobalText } from 'react-native';
import LibraryContext from '../LibraryContext';

const Text = props => {
  const {
    bold,
    style,
    ...restOfProps
  } = props;
  const {
    fonts
  } = useContext(LibraryContext);
  return /*#__PURE__*/React.createElement(GlobalText, _extends({
    style: [{
      fontFamily: bold ? fonts.bold : fonts.regular
    }, style]
  }, restOfProps));
};

export default Text;
//# sourceMappingURL=Text.js.map