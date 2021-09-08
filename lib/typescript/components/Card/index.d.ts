import React from 'react';
import { CardFields, FormModel } from '../../types';
declare type Props = {
    focusedField: CardFields | null;
    cardType?: string;
    model: FormModel;
    disabled?: boolean | null;
};
declare const Card: React.FC<Props>;
export default Card;
