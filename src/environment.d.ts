declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    GMAIL_USER: string;
    GMAIL_APP_PASSWORD: string;
    SENDGRID_API_KEY: string;
    DATO_PREVIEW: string;
    DATO_API_TOKEN: string;
    DATO_ENV: string;
  }
}
