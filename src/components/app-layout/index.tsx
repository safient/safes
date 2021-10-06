import { NavBar } from '../primitive/navbar/navbar.component';
import { AppLayoutProps } from './app-layout.component.props';
import { AppContainer, Content } from './app-layout.component.styles';

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <AppContainer>
      <NavBar />
      <Content>{children}</Content>
    </AppContainer>
  );
};
