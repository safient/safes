import { Box, Text } from 'components/primitive';
import { StyledRow, DangerZoneButton } from './danger-zone.component.styles';

export const DangerZone = () => {
  return (
    <Box color='white' padding={4} width={43.3}>
      <Text variant='contentHeader' tx='safeOverViewPage.dangerZone' />
      <Box marginTop={2.4}>
        <StyledRow>
          <Text variant='content' text='Update your safe' />
          <DangerZoneButton
            variant='ghost'
            color='applicationBackground'
            label={{ text: 'Update Safe', color: 'error' }}
            icon={{ name: 'edit' }}
            onClick={() => 'clicked'}
          />
        </StyledRow>
        <StyledRow>
          <Text variant='content' text='Delete your safe' />
          <DangerZoneButton
            variant='ghost'
            color='applicationBackground'
            label={{ text: 'Delete Safe', color: 'error' }}
            icon={{ name: 'delete' }}
            onClick={() => 'clicked'}
          />
        </StyledRow>
      </Box>
    </Box>
  );
};
