import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ClaimDetailsScreen,
  ClaimsScreen,
  CreateSafeScreen,
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ProfileScreen,
} from './screens';

import { GlobalStyle } from './utils/Global';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/login' exact component={LoginScreen} />
          <Route path='/register' exact component={RegisterScreen} />
          <Route path='/createsafe' exact component={CreateSafeScreen} />
          <Route path='/claims' exact component={ClaimsScreen} />
          <Route path='/claims/:id' exact component={ClaimDetailsScreen} />
          <Route path='/profile' exact component={ProfileScreen} />
        </Switch>
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
