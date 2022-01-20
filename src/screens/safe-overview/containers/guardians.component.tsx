import styled from 'styled-components';
import { Avatar, Box, Text } from 'components/primitive';

const StyledRow = styled(Box)`
  align-items: center !important;
  gap: 1rem;
  margin-bottom: 1.8rem !important;
  &:last-child {
    margin-bottom: 0 !important;
  }
`;

export const GuardiansList = () => {
  return (
    <Box color='white' padding={4} width={43.3}>
      <Text variant='contentHeader' tx='safeOverViewPage.guardians' />
      <Box marginTop={2.4}>
        <StyledRow row>
          <Avatar name='safientAvatar' />
          <Text variant='content' text='Koushith' />
        </StyledRow>
        <StyledRow row>
          <Avatar name='safientAvatar' />
          <Text variant='content' text='Koushith' />
        </StyledRow>
        <StyledRow row>
          <Avatar name='safientAvatar' />
          <Text variant='content' text='Koushith' />
        </StyledRow>
      </Box>
    </Box>
  );
};
