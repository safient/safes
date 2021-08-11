import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Preview } from './components/primitive/preview';
import {
  ClaimDetailsScreen,
  ClaimsScreen,
  CreateSafeScreen,
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ProfileScreen,
} from './screens';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes/light';
import { GlobalStyle } from './utils/GlobalReset';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/login' exact component={LoginScreen} />
          <Route path='/register' exact component={RegisterScreen} />
          <Route path='/createsafe' exact component={CreateSafeScreen} />
          <Route path='/claims' exact component={ClaimsScreen} />
          <Route path='/claims/:id' exact component={ClaimDetailsScreen} />
          <Route path='/profile' exact component={ProfileScreen} />
          <Route path='/preview' exact component={Preview} />
        </Switch>
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
}

export default App;
