import { RouteProps } from 'react-router-dom';
import {
  AccountScreen,
  ClaimDetailsScreen,
  ClaimsScreen,
  CreateSafeScreen,
  HomeScreen,
  LoginScreen,
  NotFoundScreen,
  RegisterScreen,
} from '../screens';
import { RouteName } from './route-name';
import { RoutePath } from './route-path';

export interface IRoute extends RouteProps {
  path: string;
  name: RouteName;
  exact: boolean;
  component: React.ComponentType<any>;
  props?: any;
  private?: boolean;
}

export const routes: IRoute[] = [
  {
    path: RoutePath.home,
    name: RouteName.home,
    exact: true,
    private: true,
    component: HomeScreen,
    props: { name: 'HomeScreen' },
  },
  {
    path: RoutePath.login,
    name: RouteName.login,
    exact: true,
    component: LoginScreen,
  },
  {
    path: RoutePath.register,
    name: RouteName.register,
    exact: true,
    private: true,
    component: RegisterScreen,
  },
  {
    path: RoutePath.createSafe,
    name: RouteName.createSafe,
    exact: true,
    private: true,
    component: CreateSafeScreen,
  },
  {
    path: RoutePath.claims,
    name: RouteName.claims,
    exact: true,
    private: true,
    component: ClaimsScreen,
  },
  {
    path: RoutePath.claimDetails,
    name: RouteName.claimDetails,
    exact: true,
    private: true,
    component: ClaimDetailsScreen,
  },
  {
    path: RoutePath.account,
    name: RouteName.account,
    exact: true,
    private: true,
    component: AccountScreen,
  },
  {
    path: RoutePath.notFound,
    name: RouteName.notFound,
    exact: true,
    component: NotFoundScreen,
  },
];
