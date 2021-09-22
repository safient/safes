# Safient Client

React TypeScript client implementation to interact with the Safient protocol

## Getting Started

Install dependencies and start the client:

```bash
npm install | yarn install
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Build the client:

```bash
npm install | yarn install
npm build
```

## Contributing

You are welcome to submit issues and enhancement requests and work on any of the existing issues. Follow this simple guide to contribute to the repository.

1.  **Create** or pick an existing issue to work on
2.  **Fork** the repo on GitHub
3.  **Clone** the forked project to your own machine
4.  **Commit** changes to your own branch
5.  **Push** your work back up to your forked repo
6.  Submit a **Pull request** from the forked repo to our repo so that we can review your changes

## Navigation

### Adding new screen

#### Steps:

- Add the screen name in RouteName enum in src/navigation/route-name.ts
- Add the screen path in the RoutePath enum in src/navigation/route-path.ts
- Add the screen route object to the routes array in src/navigation/routes.ts
- If the screen contains params then define it to route-param-list else make it undefined in src/navigation/route-param-list.ts
- If the screen contains query strings then define it to route-query-list else make it undefined in src/navigation/route-query-list.ts

##### Example

```
RouteName:
home = 'home',

RoutePath:
home = '/',

Route object:
{
  path: RoutePath.home,
  name: RouteName.home,
  exact: true,
  component: HomeScreen,
  props: { name: 'HomeScreen' },
},

RouteParam:
[RouteName.home]: undefined; // If does not have any params

[RouteName.claimDetails]: { id: string }; // If there are some params

RouteQuery:
[RouteName.home]: undefined; // If does not have any params
[RouteName.example]: {username: string}; // If there are some params
```

### Navigating to a new screen

There are two ways to navigate one is using Link which is equivalent to a tag and other is programmatically using Redirect

##### Example

###### Navigating using Link

```html
<link to={RoutePath.example} />
```

###### Programmatically navigate using Redirect

```html
<Redirect to={RoutePath.example} />
```

### Route params

All route params are defined in the RouteParamList interface where key is the name of the route and value is the param object. We can use useParam() hook provided by the react-router-dom.

##### Example

###### Defining the route param for a route

```
[RouteName.home]: undefined; // If the route does not have any params
[RouteName.claimDetails]: { id: string }; // If the screen have any param
```

###### Using the route param for a route

```
const param = useParams<RouteParamsList[RouteName.home]>();
```

### Route query strings

All route query strings are defined in the RouteQueryList interface where key is the name of the route and value is the query string object. We can use useQuery() hook to access the query object. useQuery() is a custom hook which takes the screen name as argument and returns a object with typecasts value (We need the typecast only if the data type of the value is not string as query strings are always string value)

##### Example

###### Defining the route query string for a route

```
[RouteName.home]: undefined; // If the route does not have any query string
[RouteName.example]: { number1: number, number2: number }; // If the screen have any query string
```

###### Using the route param for a route

```
Query string definition in RouteQueryList:
[RouteName.home]: { number1: number; number2: number };

Using the useQuery() hook
const query = useQuery<RouteQueryList[RouteName.home]>(RouteName.home);

As the datatype of the values are not string then we need to type case the string to number. To do that you have to add query string object in src/navigation/route-query-list.ts and if there are any type casting then have to do that in typecast() function in src/hooks/useQuery.ts

const _data = { ...data };
  switch (routeName) {
    case RouteName.home:
      {
        _data.number1 = Number(_data.number1);
        _data.number2 = Number(_data.number2);
      }
      break;
  }
  return _data;
```

## Resources:

- [Website](https://safient.co)
- [Web App](https://app.safient.co)
- [Twitter](https://twitter.con/safientio)
- [Discord](https://discord.safient.io)
