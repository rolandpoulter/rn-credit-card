import React from 'react';
import Card from './Card';
declare type CardProps = React.ComponentProps<typeof Card>;
declare type Props = Omit<CardProps, 'model'>;
declare const FormCard: React.FC<Props>;
export default FormCard;