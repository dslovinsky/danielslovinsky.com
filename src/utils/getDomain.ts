const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

const getDomain = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }

  const safeVercelUrl = vercelUrl && (vercelUrl.startsWith('https') ? vercelUrl : `https://${vercelUrl}`);

  return safeVercelUrl || 'http://localhost:5000';
};

export default getDomain;
