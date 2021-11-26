import { StoreImpl } from '../store/store.impl';
import { IStore } from '../store';
import { User } from '../../models';
import { Web3Provider } from '@ethersproject/providers';
import { SafientCore } from '@safient/core';

export interface AccountStore extends StoreImpl, IStore {
  /**
   * Safient core modules
   */
  safient?: SafientCore;

  /**
   * User profile details
   */
  getUser: () => User | undefined;

  /**
   * Checks if the user exists
   */
  userExists: () => boolean;

  initializeSafient: (web3Provider: Web3Provider) => void;
}
