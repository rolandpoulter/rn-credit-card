import React from 'react';
declare type Props = {
    children: React.ReactNode;
    fallback?: React.ReactNode;
    condition: boolean;
};
declare const Conditional: React.FC<Props>;
export default Conditional;
