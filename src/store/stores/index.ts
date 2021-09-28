import { AccountStoreImpl, AppStoreImpl } from '../index';
import { IStore } from '../store';
import { action, makeObservable, observable } from 'mobx';

export enum StoreType {
  ACCOUNT = 'accountStore',
  APP = 'appStore',
}

export interface Stores extends IStore {
  /**
   * Contains account specific details such as jwt, profile etc.
   */
  accountStore: AccountStoreImpl;

  /**
   * contains app related details
   */
  appStore: AppStoreImpl;
}

export class StoresImpl implements Stores {
  accountStore: AccountStoreImpl;
  appStore: AppStoreImpl;

  constructor() {
    this.accountStore = new AccountStoreImpl();
    this.appStore = new AppStoreImpl();

    makeObservable<StoresImpl, any>(this, {
      accountStore: observable,
      appStore: observable,
      resetStore: action,
    });
  }

  resetStore = (): void => {
    // All the stores must be reset here
    this.accountStore.resetStore();
    this.appStore.resetStore();
  };
}

export const stores: Stores = new StoresImpl();
