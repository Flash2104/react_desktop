import React, { lazy, Suspense } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import './App.css';

const Home = lazy(() => import('./'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        
      </Suspense>
    <Route exact path='/' component={Home} />
    <AuthorizeRoute exact path='/' component={Home} />
    <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
  </Layout>
  );
}

export default App;
