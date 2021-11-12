import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout'
import Landing from './pages/user-page/user-page';
import routes from './routes'
import './App.css';

function App() {
  return (
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
                return <Landing />
              }

              return ( <Layout> <route.component {...routeProps} /></Layout>);
            }}
          />
        ))}
      </Switch>
      </Router>
    </div>
  );
}

export default App;
