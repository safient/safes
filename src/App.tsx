import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navigation from './navigation/navigation';
import { theme } from './themes/light';
import { GlobalStyle } from './utils/GlobalReset';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Navigation />
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
}

export default App;
