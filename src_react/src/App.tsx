import React, { lazy, Suspense } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router';
import './App.css';
import { Layout } from './modules/AuthorizeRoute/Layout/Layout';
import AuthorizeRoute from './modules/AuthorizeRoute/AuthorizeRoute';
import { Home } from './modules/AuthorizeRoute/Home/Home';
import { ApplicationPaths } from './modules/ApiAuthorizationConstants';
import ApiAuthorizationRoutes from './modules/Authorization/AuthorizationRoutes/ApiAuthorizationRoutes';

function App() {
  return (
    <Layout>
    <AuthorizeRoute path='/' element={Home} />
    <Route path={ApplicationPaths.ApiAuthorizationPrefix} element={ApiAuthorizationRoutes} />
  </Layout>
  );
}

export default App;
