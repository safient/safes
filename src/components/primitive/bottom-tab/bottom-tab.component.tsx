import { useHistory } from 'react-router';
import { BottomNavigation, NavLabel } from './bottom-tab.component.styles';
import { navItems } from './bottom-tab';

export const BottomTab: React.FunctionComponent = () => {
  const history = useHistory();
  return (
    <BottomNavigation row>
      {navItems.map((item, index) => {
        return <NavLabel key={index} active={item.path === history.location.pathname} {...item} />;
      })}
    </BottomNavigation>
  );
};
