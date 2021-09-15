import { RouteProps } from 'react-router-dom';
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
import { RouteNames } from './route-names';

export interface IRoute extends RouteProps {
  path: string;
  name: RouteNames;
  exact: boolean;
  component: React.ComponentType<any>;
  props?: any;
  private?: boolean;
}

// route-param-list.ts - interface - properties of type Route, values -> navigation route params RouteParam

export const routes: IRoute[] = [
  {
    path: '/',
    name: RouteNames.HOME,
    exact: true,
    component: HomeScreen,
    props: { name: 'HomeScreen' },
  },
  {
    path: '/login',
    name: RouteNames.LOGIN,
    exact: true,
    component: LoginScreen,
  },
  {
    path: '/register',
    name: RouteNames.REGISTER,
    exact: true,
    component: RegisterScreen,
  },
  {
    path: '/createsafe',
    name: RouteNames.CREATE_SAFE,
    exact: true,
    component: CreateSafeScreen,
  },
  {
    path: '/claims',
    name: RouteNames.CLAIMS,
    exact: true,
    component: ClaimsScreen,
  },
  {
    path: '/claims/:id',
    name: RouteNames.CLAIM_DETAILS,
    exact: true,
    component: ClaimDetailsScreen,
  },
  {
    path: '/profile',
    name: RouteNames.PROFILE,
    exact: true,
    component: ProfileScreen,
    private: true,
  },
  {
    path: '/404',
    name: RouteNames.NOT_FOUND,
    exact: true,
    component: NotFoundScreen,
  },
];
