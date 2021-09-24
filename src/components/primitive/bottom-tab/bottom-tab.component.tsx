import { BottomNavigation, NavLabel } from './botton-tab.component.styles';

export const BottomTab: React.FunctionComponent = () => {
  return (
    <BottomNavigation row>
      <NavLabel
        label={{ text: 'Home' }}
        icon={{ name: 'dashboard' }}
        onClick={() => console.log('clicked')}
        active={true}
      />
      <NavLabel label={{ text: 'Claims' }} icon={{ name: 'claim' }} onClick={() => console.log('clicked')} />
      <NavLabel label={{ text: 'Profile' }} icon={{ name: 'profile' }} onClick={() => console.log('clicked')} />
    </BottomNavigation>
  );
};
