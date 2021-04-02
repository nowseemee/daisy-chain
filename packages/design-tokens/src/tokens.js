import { Color } from './factories.js';

export const NAMESPACE_PREFIX = 'dc';
export const SPACING = 'spacing';
export const TYPOGRAPHY = 'font';
export const TYPE_VARIANT = 'font-variant';
export const COLOR = 'color';
export const SHADOW = 'shadow';
export const RADIUS = 'radius';
export const OPACITY = 'opacity';
export const MOTION = 'motion';
export const Z_INDEX = 'z-index';

const tokens = {};

/* SPACING */

tokens[SPACING] = {
  DEFAULT: {
    1: 1,
    2: 2,
    4: 4,
    8: 8,
    12: 12,
    16: 16,
    24: 24,
    32: 32,
    40: 40,
    48: 48,
    64: 64,
    80: 80,
  },
};

/* TYPOGRAPHY */

const family = {
  sans: 'Playfair Display, sans-serif',
  mono: 'Montserrat, monospace',
};
const size = {
  10: 10,
  12: 12,
  14: 14,
  16: 16,
  20: 20,
  24: 24,
  32: 32,
  40: 40,
  56: 56,
};
const weight = {
  thin: 200,
  regular: 400,
  medium: 500,
  bold: 700,
  extrabold: 800,
};
const lineHeight = {
  114: '114%',
  120: '120%',
  125: '125%',
  133: '133%',
  150: '150%',
  160: '160%',
};
const letterSpacing = null;

tokens[TYPOGRAPHY] = {
  family,
  size,
  weight,
  lineHeight,
  letterSpacing,
};

const defaultVariant = {
  family: family.sans,
  size: size['16'],
  weight: weight.medium,
  lineHeight: lineHeight['150'],
  letterSpacing: 'normal',
};

tokens[TYPE_VARIANT] = {
  body: {
    ...defaultVariant,
  },
};

/* COLOR */

const palette = {
  black: Color('#000000'),
  white: Color('#FFFFFF'),
  orange0: Color('#FFFCDF'),
  orange70: Color('#DF6D3F'),
  orange80: Color('#AE461C'),
  orange90: Color('#973209'),
  orange100: Color('#7D1F09'),
};

tokens[COLOR] = {
  DEFAULT: {
    ...palette,
    primary: palette.orange70,
    primaryHover: palette.orange80,
    primaryActive: palette.orange90,
    focus: palette.orange0,
  },
};


/* RADIUS */

tokens[RADIUS] = {
  DEFAULT: {
    1: 1,
    2: 2,
    4: 4,
    8: 8,
  },
};

/* OPACITY */

tokens[OPACITY] = {
  DEFAULT: {
    50: 0.5,
  },
};

/* MOTION */

tokens[MOTION] = {
  duration: {
    immediate: 100,
    fast: 200,
    slower: 600,
    deliberate: 800,
  },
  easing: {
    standard: 'cubic-bezier(0.42, 0, 0.58, 1)',
    enter: 'cubic-bezier(0.390, 0.575, 0.565, 1)',
  },
};

/* Z-INDEX */

tokens[Z_INDEX] = {
  DEFAULT: {
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    60: 60,
    70: 70,
  },
};

export default function () {
  return { ...tokens }; // a copy to avoid any outputs accidentally mutating it
}
