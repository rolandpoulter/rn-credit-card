import React from 'react';
import { Text as GlobalText } from 'react-native';
declare type Props = React.ComponentProps<typeof GlobalText> & {
    bold?: boolean;
};
declare const Text: React.FC<Props>;
export default Text;
