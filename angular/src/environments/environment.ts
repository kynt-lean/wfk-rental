import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Rental',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44397/',
    redirectUri: baseUrl,
    clientId: 'Rental_App',
    responseType: 'code',
    scope: 'offline_access Rental',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44397',
      rootNamespace: 'WKF.Rental',
    },
  },
} as Environment;
