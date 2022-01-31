import { Box, Text, StatsCard, Button } from 'components/primitive';
import { SafeFeeComponentProps } from './safe-fee.component.props';

export const SafeFee: React.FC<SafeFeeComponentProps> = (props) => {
  const { feeAmount } = props;

  return (
    <Box color='white' padding={4} width={43.3}>
      <Text variant='contentHeader' tx='safeOverViewPage.safeFeeDetails' />
      <Box marginTop={2.4}>
        <StatsCard
          iconName={{ name: 'safeFee' }}
          heading={{ tx: 'safeOverViewPage.feeDeposited' }}
          count={{ text: `$ ${feeAmount ? feeAmount : 0}/100` }}
        />
        <Button
          variant='primary'
          color='primaryGradient'
          label={{ tx: 'safeOverViewPage.payMore' }}
          onClick={() => 'do something'}
          marginTop={2.6}
        />
      </Box>
    </Box>
  );
};
