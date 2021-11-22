import { StoreImpl } from '../store/store.impl';
import { IStore } from '../store';
import { User } from '../../models';

export interface AccountStore extends StoreImpl, IStore {
  /**
   * User profile details
   */
  getUser: () => User | undefined;

  /**
   * Checks if the user exists
   */
  userExists: () => boolean;
}
