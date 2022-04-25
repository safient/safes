import { Box, Image, Text } from 'components/primitive';
import { ImageComponentProps } from '../image/image.component.props';
import { TextComponentProps } from '../text/text.component.props';

export interface EmptyComponentProps {
  image: ImageComponentProps;
  label: TextComponentProps;
}

export const EmptyState: React.FC<EmptyComponentProps> = (props) => {
  const { image, label } = props;

  return (
    <Box hCenter vCenter marginTop={4} gap={0.8}>
      <Image {...image} width={4} />
      <Text variant='small' color='textLighter' {...label} />
    </Box>
  );
};
