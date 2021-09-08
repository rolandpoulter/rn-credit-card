import React from 'react';
import { CardFields, FormModel } from '../../types';
declare type Props = {
    model: FormModel;
    cardType?: string;
    focusedField: CardFields | null;
    disabled: boolean | null;
};
declare const FrontSide: React.FC<Props>;
export default FrontSide;
