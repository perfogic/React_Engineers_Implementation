import React from 'react';
import { Spacing } from '@ds.e/foundation';
interface MarginProps {
    space?: keyof typeof Spacing;
    children: React.ReactNode;
    left?: boolean;
    top?: boolean;
    bottom?: boolean;
    right?: boolean;
}
declare const Margin: React.FC<MarginProps>;
export default Margin;
