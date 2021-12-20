import { NavbarItem } from './navbar.component.props';

export const navItems: NavbarItem[] = [
  {
    label: { text: 'Home' },
    icon: { name: 'dashboard' },
    path: '/',
    onClick: () => console.log('clicked'),
  },
  {
    label: { text: 'Claims' },
    icon: { name: 'claim' },
    path: '/claims',
    onClick: () => console.log('clicked'),
  },
  {
    label: { text: 'Account' },
    icon: { name: 'profile' },
    path: '/account',
    onClick: () => console.log('clicked'),
  },
];
