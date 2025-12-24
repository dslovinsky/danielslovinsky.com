import { cva } from 'class-variance-authority';

const inputStyles = cva(['border-2 border-solid bg-transparent p-4', 'focus-visible:outline-none'], {
  variants: {
    state: {
      normal: ['border-white/25 hover:border-white/50 focus-visible:border-white'],
      error: ['border-red/50 hover:border-red/75 focus-visible:border-red'],
    },
  },
  defaultVariants: {
    state: 'normal',
  },
});

export default inputStyles;
