import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminHome from './pages/Admin/HomePage/admin-home.component';
import Common from './pages/Common';

const App = () => {

  return (
        <div className="App">
          <Switch>
              <Route path='/admin' component={AdminHome} />
              <Route path='/' component={Common} />
          </Switch>
        </div>
  );
}

export default App;