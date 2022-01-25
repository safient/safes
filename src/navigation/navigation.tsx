import { observer } from 'mobx-react-lite';
import React from 'react';
import { AppLayout } from '../components/app-layout';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { LoginScreen, RegisterScreen } from '../screens';
import { useStores } from '../store';
import { RoutePath } from './route-path';
import { routes } from './routes';

const Navigation = observer(() => {
  const { accountStore } = useStores();
  //TODO - Remove mock after auth integration
  const isMock: boolean = false;
  let isSignedIn: boolean = accountStore.userSignedIn() || isMock;
  let isNewUser: boolean = !accountStore.userExists() || isMock;

  return (
    <Switch>
      {routes.map(({ component: Component, name, path, exact, private: isPrivate, props: routeProps }, index) => {
        if (isPrivate) {
          return (
            <Route
              key={name}
              path={path}
              exact={exact}
              render={(props: any) =>
                isSignedIn ? (
                  <AppLayout>
                    <Component {...props} {...routeProps} />
                  </AppLayout>
                ) : (isNewUser? (
                  <RegisterScreen {...props} />
                ) :
                (
                  <LoginScreen {...props} />
                ))
              }
            />
          );
        }

        return (
          <Route
            key={index}
            path={path}
            exact={exact}
            render={(props: RouteComponentProps<any>) => <Component {...props} {...routeProps} />}
          />
        );
      })}
      <Redirect to={RoutePath.notFound} />
    </Switch>
  );
});

export default Navigation;
