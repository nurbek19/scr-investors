import * as React from 'react';
import { Redirect } from 'react-router-dom';
import Footer from './components/Footer'

import RootPage from './pages/RootPage'

const ROUTES = [
  {
    path: '/',
    component: RootPage,
    routes: [
      {
        path: '/',
        render: () => <Redirect to="/home" />,
        exact: true
      },
      {
        path: '/home',
        component: Footer,
        exact: true,
        pageTitle: 'Home Page'
      },
    ]
  }
];

export default ROUTES;
