import React from 'react';
import { withTheme } from 'styled-components';
import { getVariant } from './text.component.styles';
import { TextComponentProps } from './text.component.props';
import { translate } from '../../../i18n/translate';
import { IStyledTheme } from '../../../themes/styled-components';

export const Text: React.FunctionComponent<TextComponentProps> = withTheme(
  (props: TextComponentProps & IStyledTheme) => {
    const { text, tx, txOptions, variant, children, ...rest } = props;
    const i18nText = tx && translate(tx, txOptions);
    const content = i18nText || text || children;
    const Typography = getVariant(variant);

    return <Typography {...rest}>{content}</Typography>;
  }
);
