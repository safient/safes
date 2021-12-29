import { ToggleSwitchComponentProps } from './toggle-switch.component.props';
import { ToggleSwitchContainer, StyledInput, Switch } from './toggle-switch.component.styles';

export const ToggleSwitch: React.FC<ToggleSwitchComponentProps> = (props) => {
  const { toggleID, checked, onChange } = props;

  return (
    <ToggleSwitchContainer>
      <Switch>
        <StyledInput type='checkbox' id={toggleID} checked={checked} onChange={onChange} />
        <label className='label' htmlFor={toggleID}>
          <span className='inner' />
          <span className='switch' />
        </label>
      </Switch>
    </ToggleSwitchContainer>
  );
};
