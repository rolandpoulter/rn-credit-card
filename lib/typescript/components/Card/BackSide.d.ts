import React from 'react';
import { FormModel } from '../../types';
declare type Props = {
    model: FormModel;
    cardType?: string;
    disabled: boolean | null;
};
declare const BackSide: React.FC<Props>;
export default BackSide;
