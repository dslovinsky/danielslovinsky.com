declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PERSONAL_EMAIL: string;
    SENDGRID_API_KEY: string;
    CONTENTFUL_SPACE_ID: string;
    CONTENTFUL_DELIVERY_TOKEN: string;
    CONTENTFUL_PREVIEW_TOKEN: string;
    CONTENTFUL_ENV: string;
    CONTENTFUL_HOST: string;
    CONTENTFUL_MGMT_TOKEN: string;
  }
}
