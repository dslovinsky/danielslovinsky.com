const getDomain = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }

  return process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:5000';
};

export default getDomain;
