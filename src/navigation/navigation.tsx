import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { LoginScreen } from '../screens';
import { RoutePath } from './route-path';
import { routes } from './routes';

const Navigation = () => {
  const isLoggedIn: boolean = false;

  return (
    <Switch>
      {routes.map(
        (
          {
            component: Component,
            name,
            path,
            exact,
            private: isPrivate,
            props: routeProps,
          },
          index
        ) => {
          if (isPrivate) {
            return (
              <Route
                key={name}
                path={path}
                exact={exact}
                render={(props: any) =>
                  isLoggedIn ? (
                    <Component {...props} {...routeProps} />
                  ) : (
                    <LoginScreen {...props} />
                  )
                }
              />
            );
          }

          return (
            <Route
              key={index}
              path={path}
              exact={exact}
              render={(props: RouteComponentProps<any>) => (
                <Component {...props} {...routeProps} />
              )}
            />
          );
        }
      )}
      <Redirect to={RoutePath.notFound} />
    </Switch>
  );
};

export default Navigation;
