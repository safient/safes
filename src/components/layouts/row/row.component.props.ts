import React from 'react';
import {Spacing} from "../types";

export interface RowComponentProps extends React.HTMLProps<HTMLDivElement> {
    /**
     * Vertical column alignment
     */
    align: React.CSSProperties['alignItems']

    /**
     * Horizontal column alignment
     */
    justify: React.CSSProperties['justifyContent'],

    /**
     * Custom gutter width for this row
     */
    gutterWidth: Spacing | number,

    /**
     * Whether the cols should not wrap
     */
    nowrap: boolean,

    /**
     * Set to apply some debug styling
     */
    debug: boolean,

    /**
     * Optional styling
     */
    style: React.CSSProperties,

    /**
     * Content of the element
     */
    children: React.ReactNode
}

