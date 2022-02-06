import "./App.css";
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { routes, PrivateRoute, PublicRoute} from './routes'

const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage'))
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'))

function App() {
  return (
    <div className="App">
      <Suspense fallback="loading..." >
        <Routes>
          <Route exact path={routes.auth} element={<PublicRoute restricted component={AuthPage} />} />
          <Route path={routes.google} element={<PublicRoute restricted component={AuthPage} />} />
          <Route path={routes.expenses} element={<PrivateRoute component={AuthPage} />} />
          <Route path={routes.income} element={<PrivateRoute component={AuthPage} />} />
          <Route path={routes.report} element={<PrivateRoute component={AuthPage} />} />
          <Route path="*" element={<PublicRoute component={PageNotFound} />}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
