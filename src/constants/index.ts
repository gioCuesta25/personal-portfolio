import { ProjectsModel } from '@/models';

export const CV_URL =
  'https://gio-personal-portfolio.s3.amazonaws.com/CV-Giovanni_Roma%C3%B1a_Cuesta-2023.pdf';

export const GITHUB_URL = 'https://github.com/gioCuesta25';

export const LINKEDIN_URL = 'https://www.linkedin.com/in/giovanni-roma%C3%B1a/';

export const PROJECTS: ProjectsModel[] = [
  {
    title: 'Expense Tracker Backend',
    stack: ['Node', 'Typescript', 'Mongodb', 'Express'],
    image: 'https://gio-personal-portfolio.s3.amazonaws.com/%24RTZNNFY.jpg',
    description:
      'Expense tracker es una aplicación de seguimiento de gastos en el backend, desarrollada con Node.js, Express y TypeScript, que permite un registro sencillo y organizado de tus finanzas personales.',
    link: 'https://github.com/gioCuesta25/expense-tracker-backend',
  },
  {
    title: 'Weather App',
    stack: ['React'],
    image:
      'https://gio-personal-portfolio.s3.amazonaws.com/weather_app_thumbnail.jpg',
    description:
      'Weather App es una aplicación que utiliza React para mostrar información meteorológica en tiempo real, brindando pronósticos precisos y detallados de la ubicación seleccionada.',
    link: 'https://github.com/gioCuesta25/weather-app',
  },
  {
    title: 'Random cat facts',
    stack: ['React'],
    image:
      'https://gio-personal-portfolio.s3.amazonaws.com/random_cats_thumbnail.png',
    description:
      'La aplicación de datos aleatorios sobre gatos, desarrollada con React, ofrece información entretenida y variada sobre los felinos, incluyendo imágenes, nombres y curiosidades que te sorprenderán.',
    link: 'https://github.com/gioCuesta25/random-cat-facts',
  },
  {
    title: 'Crypto price',
    stack: ['Vue'],
    image:
      'https://gio-personal-portfolio.s3.amazonaws.com/crypto_price_thumbnail.png',
    description:
      'Crypto Prices es una aplicación que utiliza Vue para mostrar precios en tiempo real de criptomonedas, con gráficos y tablas actualizadas constantemente para monitorear la fluctuación del mercado de manera fácil y rápida.',
    link: 'https://github.com/gioCuesta25/crypto-price-vue',
  },
];
