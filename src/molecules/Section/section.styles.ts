import { cva } from 'class-variance-authority';

export const topPaddingVariants = {
  0: ['pt-0'],
  8: ['pt-2'],
  16: ['pt-2 lg:pt-4'],
  24: ['pt-2 md:pt-4 lg:pt-6'],
  32: ['pt-4 md:pt-5 lg:pt-8'],
  40: ['pt-4 md:pt-6 lg:pt-10'],
  48: ['pt-5 md:pt-7 lg:pt-12'],
  56: ['pt-6 md:pt-9 lg:pt-14'],
  72: ['pt-8 md:pt-10 lg:pt-18'],
  96: ['pt-10 md:pt-14 lg:pt-24'],
};

const bottomPaddingVariants = {
  0: ['pb-0'],
  8: ['pb-2'],
  16: ['pb-2 lg:pb-4'],
  24: ['pb-2 md:pb-4 lg:pb-6'],
  32: ['pb-4 md:pb-5 lg:pb-8'],
  40: ['pb-4 md:pb-6 lg:pb-10'],
  48: ['pb-5 md:pb-7 lg:pb-12'],
  56: ['pb-6 md:pb-9 lg:pb-14'],
  72: ['pb-8 md:pb-10 lg:pb-18'],
  96: ['pb-10 md:pb-14 lg:pb-24'],
};

const sectionStyles = cva(['flex justify-center'], {
  variants: {
    topPadding: topPaddingVariants,
    bottomPadding: bottomPaddingVariants,
  },
  defaultVariants: {
    topPadding: 72,
    bottomPadding: 72,
  },
});

export default sectionStyles;
