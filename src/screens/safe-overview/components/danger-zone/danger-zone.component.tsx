import { Box, Text } from 'components/primitive';
import { StyledRow, DangerZoneButton } from './danger-zone.component.styles';

export const DangerZone = () => {
  return (
    <Box color='white' padding={4} width={43.3}>
      <Text variant='contentHeader' tx='safeOverViewPage.dangerZone' />
      <Box marginTop={2.4}>
        <StyledRow row justify={'between'} align={'center'}>
          <Text variant='content' tx='safeOverViewPage.updateYourSafe' />
          <DangerZoneButton
            variant='ghost'
            label={{ tx: 'safeOverViewPage.updateSafe', color: 'error' }}
            icon={{ name: 'edit' }}
            onClick={() => 'clicked'}
          />
        </StyledRow>

        <StyledRow row justify={'between'} align={'center'}>
          <Text variant='content' tx='safeOverViewPage.deleteYourSafe' />
          <DangerZoneButton
            variant='ghost'
            label={{ tx: 'safeOverViewPage.deleteSafe', color: 'error' }}
            icon={{ name: 'delete' }}
            onClick={() => 'clicked'}
          />
        </StyledRow>
      </Box>
    </Box>
  );
};
