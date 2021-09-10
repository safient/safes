import {
  ClaimDetailsScreen,
  ClaimsScreen,
  CreateSafeScreen,
  HomeScreen,
  LoginScreen,
  NotFoundScreen,
  ProfileScreen,
  RegisterScreen,
} from '../screens';

export interface IRoute {
  path: string;
  name: string;
  exact: boolean;
  component: React.ComponentType;
  props?: any;
  privateRoute?: boolean;
}

export const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: HomeScreen,
    props: { name: 'HomeScreen' },
  },
  {
    path: '/login',
    name: 'Login',
    exact: true,
    component: LoginScreen,
  },
  {
    path: '/register',
    name: 'Register',
    exact: true,
    component: RegisterScreen,
  },
  {
    path: '/createsafe',
    name: 'Create Safe',
    exact: true,
    component: CreateSafeScreen,
  },
  {
    path: '/claims',
    name: 'Claims',
    exact: true,
    component: ClaimsScreen,
  },
  {
    path: '/claims/:id',
    name: 'Claims Details',
    exact: true,
    component: ClaimDetailsScreen,
  },
  {
    path: '/profile',
    name: 'Profile',
    exact: true,
    component: ProfileScreen,
    privateRoute: true,
  },
  {
    path: '/404',
    name: 'Not Found',
    exact: true,
    component: NotFoundScreen,
  },
];
