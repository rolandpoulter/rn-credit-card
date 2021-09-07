/// <reference types="react" />
import { Fonts, LibraryProps, Overrides, TranslationsNonNull } from './types';
export declare type ContextProps = LibraryProps & {
    fonts: Fonts;
    translations: TranslationsNonNull;
    overrides: Overrides;
};
declare const LibraryContext: import("react").Context<ContextProps>;
export default LibraryContext;
