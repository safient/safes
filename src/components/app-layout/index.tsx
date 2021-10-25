import { TopBar } from 'components/primitive/top-bar/top-bar.component';
import { NavBar } from '../primitive/navbar/navbar.component';
import { AppLayoutProps } from './app-layout.component.props';
import { AppContainer, Content, ContentWrapper } from './app-layout.component.styles';

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <AppContainer>
      <NavBar />
      <ContentWrapper>
        <TopBar />
        <Content>{children}</Content>
      </ContentWrapper>
    </AppContainer>
  );
};
