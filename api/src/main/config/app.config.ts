type AppConfig = {
  name: string;
  port: number;
};

export const appConfig: AppConfig = {
  name: 'hawking',
  port: Number(process.env.SERVER_PORT || 3000),
};
