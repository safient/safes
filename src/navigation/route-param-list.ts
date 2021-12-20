import { RouteName } from './route-name';

/**
 * Defining all the route params
 * key will be the route name and value will be an object with the params
 * To use the param use useParam hook
 */
export interface RouteParamsList {
  [RouteName.home]: undefined;
  [RouteName.login]: undefined;
  [RouteName.register]: undefined;
  [RouteName.createSafe]: undefined;
  [RouteName.claims]: undefined;
  [RouteName.claimDetails]: { id: string };
  [RouteName.account]: undefined;
  [RouteName.notFound]: undefined;
}
