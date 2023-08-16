declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PERSONAL_EMAIL: string;
    SENDGRID_API_KEY: string;
    DATO_PREVIEW: string;
    DATO_API_TOKEN: string;
    DATO_ENV: string;
  }
}
