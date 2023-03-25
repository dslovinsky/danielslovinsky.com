declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PERSONAL_EMAIL: string;
    SENDGRID_API_KEY: string;
    CONTENTFUL_SPACE: string;
    CONTENTFUL_DELIVERY_KEY: string;
    CONTENTFUL_PREVIEW_KEY: string;
    CONTENTFUL_ENV: string;
    CONTENTFUL_HOST: string;
  }
}
