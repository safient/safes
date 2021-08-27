import styled from 'styled-components';
import { SCREEN_SIZE } from '../../utils/variables';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  // flex: 1 1 0%;
  // overflow-y: auto;
  // min-height: 100vh;

  @media (max-width: ${SCREEN_SIZE.LG}) {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  /* background: linear-gradient(#1c1f20 0%, #151718 413px); */
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
export const AppLayout = ({ children }: Props): any => {
  return (
    <Wrapper>
      {/* <Navigation /> */}
      <ContentWrapper>
        <Content>{children}</Content>
      </ContentWrapper>
    </Wrapper>
  );
};
