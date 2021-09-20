import { useLocation } from 'react-router-dom';
import { RouteName } from '../navigation/route-name';

/**
 * @param routeName
 * @returns query string object
 * This hook is used to get the query string object which is defining in the route-query-list file
 */
export function useQuery<T>(routeName: RouteName): T {
  const data = new URLSearchParams(useLocation().search);
  const query = Object.fromEntries(data.entries());
  return typeCast(query, routeName) as T;
}

/**
 *
 * @param data
 * @param routeName
 * @returns typecasts data
 *
 * Query string by default produce the value of string.
 * If the value of the property is not string then we have to
 * manually convert it to the proper type using this function.
 * Type of the property is defined in the route-query-list file
 */
const typeCast = (data: Record<string, any> = {}, routeName: RouteName) => {
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
};
