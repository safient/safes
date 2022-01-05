import { StoreImpl } from '../store/store.impl';
import { IStore } from '../store';
import { User } from '../../models';
import { Web3Provider } from '@ethersproject/providers';
import { SafientCore, Types  } from '@safient/core';

export interface AccountStore extends StoreImpl, IStore {
  /**
   * Safient core modules
   */
  safient?: SafientCore;

  /**
   * User profile details
   */
  web3User: Types.User;

  /**
   * Checks if the user exists
   */
  userExists: () => boolean;

  loadAccount: (web3Provider: Web3Provider) => void;
}
