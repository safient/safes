import Toggle from 'react-toggle';
import { ToggleSwitchComponentProps } from './toggle-switch.component.props';
import { ToggleSwitchContainer } from './toggle-switch.component.styles';
import 'react-toggle/style.css';
export const ToggleSwitch: React.FC<ToggleSwitchComponentProps> = (props) => {
  const { toggleID, checked, onChange } = props;

  return (
    <ToggleSwitchContainer>
      <Toggle
        id={toggleID}
        className='custom-classname'
        defaultChecked={checked}
        onChange={onChange}
        icons={{
          checked: null,
          unchecked: null,
        }}
      />
    </ToggleSwitchContainer>
  );
};
