import { observer } from 'mobx-react-lite';
import React from 'react';
import { AppLayout } from '../components/app-layout';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { LoginScreen } from '../screens';
import { useStores } from '../store';
import { RoutePath } from './route-path';
import { routes } from './routes';

const Navigation = observer(() => {
  const { accountStore } = useStores();
  const isMock: boolean = true
  const isLoggedIn: boolean = !!accountStore.getUser() || isMock

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
                    <AppLayout>
                    <Component {...props} {...routeProps} />
                    </AppLayout>
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
});

export default Navigation;
