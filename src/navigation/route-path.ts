/**
 * Defining all the route paths
 * For adding any new route the path of the route have to add here
 */
export enum RoutePath {
  home = '/',
  login = '/login',
  register = '/register',
  createSafe = '/create-safe',
  claims = '/claims',
  claimDetails = '/claims/:id',
  account = '/account',
  safeOverView = '/safe-overview',
  notFound = '/page-not-found',
}
