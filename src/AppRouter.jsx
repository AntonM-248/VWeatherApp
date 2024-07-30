import { createBrowserRouter } from 'react-router-dom';
import HighsLows from './components/HighsLows.jsx';
import { WeatherReport } from './components/WeatherReport.jsx';
import { Provider } from 'react-redux';
import recordStore from './utils/recordStore.js';
import App from './App.jsx';
import Timer from './components/Timer.jsx';
import InfiniteScroll from './components/InfiniteScroll.jsx';

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
      },
      {
        path: '/timer',
        element:
          <Timer />
      },
      {
        path: '/infinitescroll',
        element:
          <InfiniteScroll />
      }      
    ]
  }
]);

export default AppRouter;