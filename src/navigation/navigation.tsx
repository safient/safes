import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { LoginScreen } from '../screens';
import { routes } from './routes';

export interface IPage {
  name: string;
}

const Navigation = () => {
  const isLoggedIn: boolean = false;

  return (
    <Switch>
      {routes.map((route, index) => {
        if (route.privateRoute) {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props: any) =>
                isLoggedIn ? (
                  <route.component {...props} {...route.props} />
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
            path={route.path}
            exact={route.exact}
            render={(props: RouteComponentProps<any>) => (
              <route.component {...props} {...route.props} />
            )}
          />
        );
      })}
      <Redirect to='/404' />
    </Switch>
  );
};

export default Navigation;
