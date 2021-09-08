/// <reference types="react" />
import { TextStyle, ViewStyle } from 'react-native';
export interface FormModel {
    holderName: string;
    cardNumber: string;
    expiration: string;
    cvv: string;
}
export declare enum CardFields {
    CardNumber = 0,
    CardHolderName = 1,
    Expiration = 2,
    CVV = 3
}
export declare type TranslationsNonNull = {
    cardNumber: string;
    cardHolderName: string;
    nameSurname: string;
    mmYY: string;
    expiration: string;
    securityCode: string;
    next: string;
    done: string;
    cardNumberRequired: string;
    cardNumberInvalid: string;
    cardHolderNameRequired: string;
    cardHolderNameInvalid: string;
    expirationRequired: string;
    expirationInvalid: string;
    securityCodeRequired: string;
    securityCodeInvalid: string;
};
declare type Partial<T> = {
    [P in keyof T]?: T[P];
};
export declare type Translations = Partial<TranslationsNonNull>;
declare type Style = ViewStyle | TextStyle;
export declare type Overrides = {
    cardPreview?: Style;
    labelText?: TextStyle;
    cardHolderPreview?: TextStyle;
    expirationPreview?: Style;
    outline?: ViewStyle;
    input?: ViewStyle;
    button?: ViewStyle;
    labelContainer?: ViewStyle;
    inputLabel?: TextStyle;
    errorText?: TextStyle;
};
export declare type InputColors = {
    focused?: string;
    errored?: string;
    regular?: string;
};
export declare type Fonts = {
    regular?: string;
    bold?: string;
};
export declare type LibraryProps = {
    LottieView?: any;
    horizontalStart?: boolean;
    formOnly?: boolean;
    backgroundImage?: React.ReactNode;
    translations?: Translations;
    inputColors?: InputColors;
    fonts?: Fonts;
    overrides?: Overrides;
    onChange?: Function;
};
export {};
