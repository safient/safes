import styled from 'styled-components';
import { Card, IconSvg, Text, Box } from 'components/primitive';
import { BreakPoints } from 'utils';
import { SafeCardComponentProps } from './safe-card.component.props';

/**
 * Styles for the Create Safe Card.
 */
export const CardContainer = styled(Card)`
  height: 24.3rem !important;
  max-width: 33rem !important;
  margin: 1.5rem !important;
  border-radius: 0.5rem;
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
  background-color: ${({ theme: { colors } }) => colors.white};
  position: relative;
  @media screen and (max-width: ${BreakPoints.small}) {
    height: 24.3rem !important;
    max-width: 33rem !important;
    margin: 1.5rem 0 1.5rem !important;
  }
`;

/**
 * Styles for text inside the cards.
 */
export const Label = styled(Text)`
  margin-top: 1rem;
`;

export const SafeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -50px;
`;

export const MetaInfoContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.applicationBackground};
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 22px;
  bottom: 0;
  width: 100%;
  height: 6rem;
`;

export const RoleName = styled(Text)`
  color: ${({ theme: { colors } }) => colors.textDark};
  font-size: 16px;
  font-weight: 600;
  line-height: 10px;
  margin-top: 8px;
`;

export const SafeCard: React.FC<SafeCardComponentProps> = (props) => {
  const { label, icon } = props;
  return (
    <CardContainer hCenter vCenter>
      <SafeInfo>
        <IconSvg {...icon} />
        <Label {...label} />
      </SafeInfo>
      <MetaInfoContainer>
        <div>
          <Text variant='small' text='Safe Role' />
          <RoleName variant='small' text='Safe Role' />
        </div>
        <div>
          <Text variant='small' text='Safe Role' />
          <RoleName variant='small' text='Creator' />
        </div>
      </MetaInfoContainer>
    </CardContainer>
  );
};
