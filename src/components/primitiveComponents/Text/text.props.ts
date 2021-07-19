export enum Variants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

export enum FontSizes {
  REGULAR = 'regular',
  MEDIUM = 'medium',
}

export enum Align {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
  JUSTIFY = 'justify',
  INHERIT = 'inherit',
  INITIAL = 'initial',
}

export interface TypographyProps {
  variant?: string;
  as?: any;
  bold?: boolean;
  align?: string | any;
  children?: React.ReactNode | never;
  size?: any;
  primary?: string;
  secondary?: string;
  success?: string;
  error?: string;
  warning?: string;
  theme?: any;
  Typography?: any;
}

export interface StyledTextProps extends TypographyProps {
  textAlign?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
  fontWeight?: boolean;
  color?: string;
  fontSize?: string;
  variant?: string | any;
  theme?: any;
}
