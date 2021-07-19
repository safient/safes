import { Typography } from './text.styles';
import { TypographyProps } from './text.props';

export const Text: React.FC<TypographyProps> = ({ variant, bold, size, as, align, children }) => {
  let Tag = as ? as : 'p';

  return (
    <Typography as={Tag} variant={variant} bold={bold} size={size} align={align}>
      {children}
    </Typography>
  );
};
