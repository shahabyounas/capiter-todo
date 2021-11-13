import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProvideAuth, useAuth } from './hooks/use-auth'
import Layout from './components/Layout'
import Landing from './pages/user-page/user-page';
import Login from './pages/login-page/login-page';
import routes from './routes'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ProvideAuth>
      <div className="App">
        <Router>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                exact
                render={(routeProps) => {

                  if(route.path === '/') {
                    return <Login />
                  }

                  return ( <Layout> <route.component {...routeProps} /></Layout>);
                }}
              />
            ))}
          </Switch>
        </Router>
      </div>
    </ProvideAuth>
  );
}

export default App;
