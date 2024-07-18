import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HighsLows from './components/HighsLows.jsx';
import { WeatherReport } from './components/WeatherReport.jsx';
import { Provider } from 'react-redux';
import recordStore from './utils/recordStore.js';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/highlow',
        element: (
          <Provider store={recordStore}>
            <HighsLows />
          </Provider>
        )
      },
      {
        path: '/',
        element:
          <Provider store={recordStore}>
            <WeatherReport />
          </Provider>
      }   
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ AppRouter } />
  </React.StrictMode>,
)
