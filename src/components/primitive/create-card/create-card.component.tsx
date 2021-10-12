import { IconSvg } from '../../primitive';
import { CreateCardComponentProps } from './create-card.component.props';
import { SafeCard, SafeText } from './create-card.component.styles';

export const CreateCard: React.FC<CreateCardComponentProps> = (props) => {
  const { label, icon } = props;

  return (
    <SafeCard hCenter vCenter>
      <IconSvg {...icon} />
      <SafeText {...label} />
    </SafeCard>
  );
};
