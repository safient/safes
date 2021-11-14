import { IconSvg } from 'components/primitive';
import { CreateCardComponentProps } from './create-card.component.props';
import { CardContainer, Label } from './create-card.component.styles';

export const CreateCard: React.FC<CreateCardComponentProps> = (props) => {
  const { label, icon } = props;

  return (
    <CardContainer hCenter vCenter>
      <IconSvg {...icon} />
      <Label {...label} />
    </CardContainer>
  );
};
