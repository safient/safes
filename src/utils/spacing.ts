// export const SPACES = {
//   0: '0rem',
//   2: '0.2rem',
//   4: '0.4rem',
//   6: '0.6rem',
//   8: '0.8rem',
//   10: '1rem',
//   12: '1.2rem',
//   14: '1.4rem',
//   16: '1.6rem',
//   18: '1.8rem',
//   20: '2.0rem',
//   22: '2.2rem',
//   24: '2.4rem',
//   26: '2.6rem',
//   28: '2.8rem',
//   30: '3.0rem',
//   32: '3.2rem',
//   34: '3.4rem',
//   36: '3.6rem',
// };

/**
 * Spacing must be consistent across the app. These values must be used instead of hard coding.
 */
// export const spacing = {
//   tiny: 4,
//   small: 8,
//   medium: 12,
//   large: 16,
//   xLarge: 24,
//   xxLarge: 36,
//   xxxLarge: 48,
//   huge: 64,
// };

export const spacing = {
  tiniest: 0.4,
  tinier: 0.8,
  tiny: 1,
  smallest: 1.2,
  smaller: 1.6,
  small: 2,
  xxMedium: 2.2,
  xMedium: 2.6,
  medium: 3,
  largest: 3.2,
  lerger: 3.6,
  large: 4,
};

export type SpacingTypes = keyof typeof spacing;
