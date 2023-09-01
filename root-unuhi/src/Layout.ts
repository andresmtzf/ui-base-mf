import { RoutesConfig } from 'single-spa-layout/dist/types/isomorphic/constructRoutes'

export const layout: RoutesConfig = {
  mode: 'history',
  routes: [
    {
      type: 'application',
      name: '@ui/layout-unuhi',
      error: '<h1>Oops! Algo salió mal</h1>',
    },
    {
      type: 'route',
      path: 'contactos',
      routes: [
        { type: 'application', name: '@ui/contacts-unuhi', error: '<h1>Oops! Algo salió mal</h1>' },
      ],
      default: false,
    },
    {
      type: 'route',
      default: true,
      routes: [{ type: '#text', value: '404 No encontrado' }],
    },
  ],
}
