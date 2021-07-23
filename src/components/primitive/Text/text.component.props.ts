interface TypographyProps {
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

interface StyledTextProps extends TypographyProps {
  textAlign?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
  fontWeight?: boolean;
  color?: string;
  fontSize?: string;
  variant?: string | any;
  theme?: any;
}

export type { TypographyProps, StyledTextProps };
