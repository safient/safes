import { RouteName } from './route-name';

/**
 * Defining all the route query strings
 * Key will be the route name and Value will be an object with the query strings
 * To use the query strings use useQuery hook
 * Query strings are by default string value so If the datatype is other than string
 * typecast the value using the typecase function in the useQuery() hooks file
 */
export interface RouteQueryList {
  [RouteName.home]: undefined;
  [RouteName.login]: undefined;
  [RouteName.register]: undefined;
  [RouteName.createSafe]: undefined;
  [RouteName.claims]: undefined;
  [RouteName.claimDetails]: undefined;
  [RouteName.account]: undefined;
  [RouteName.notFound]: undefined;
}
