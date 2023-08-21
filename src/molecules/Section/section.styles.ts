import { cva } from 'class-variance-authority';

export const topPaddingVariants = {
  0: ['pt-0'],
  8: ['pt-2'],
  16: ['pt-2 xl:pt-4'],
  24: ['pt-2 md:pt-4 xl:pt-6'],
  32: ['pt-4 md:pt-5 xl:pt-8'],
  40: ['pt-4 md:pt-6 xl:pt-10'],
  48: ['pt-5 md:pt-7 xl:pt-12'],
  56: ['pt-6 md:pt-9 xl:pt-14'],
  72: ['pt-8 md:pt-10 xl:pt-18'],
  96: ['pt-10 md:pt-14 xl:pt-24'],
};

const bottomPaddingVariants = {
  0: ['pb-0'],
  8: ['pb-2'],
  16: ['pb-2 xl:pb-4'],
  24: ['pb-2 md:pb-4 xl:pb-6'],
  32: ['pb-4 md:pb-5 xl:pb-8'],
  40: ['pb-4 md:pb-6 xl:pb-10'],
  48: ['pb-5 md:pb-7 xl:pb-12'],
  56: ['pb-6 md:pb-9 xl:pb-14'],
  72: ['pb-8 md:pb-10 xl:pb-18'],
  96: ['pb-10 md:pb-14 xl:pb-24'],
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
