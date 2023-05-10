import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Rental',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44398/',
    redirectUri: baseUrl,
    clientId: 'Rental_App',
    responseType: 'code',
    scope: 'offline_access Rental',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44398',
      rootNamespace: 'WKF.Rental',
    },
  },
} as Environment;
