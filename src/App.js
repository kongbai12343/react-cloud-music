import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux'

import routes from './router';
import store from './store'

import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import { HashRouter } from 'react-router-dom';

export default memo(function App() {
  return (
    // 共享store
    <Provider store={store}>
      <HashRouter>
        <AppHeader />
        {renderRoutes(routes)}
        <AppFooter />
      </HashRouter>
    </Provider>
  )
})
