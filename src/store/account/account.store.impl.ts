import { action, makeObservable, observable } from 'mobx';
import { AccountStore } from './account.store';
import { StoreImpl } from '../store/store.impl';
import { User } from '../../models';

const LOCAL_STORAGE_KEYS = {
  token: 'token',
  userId: 'user_id',
};

export class AccountStoreImpl extends StoreImpl implements AccountStore {
  private token?: string;
  private userId?: string;
  private user?: User;

  constructor() {
    super();
    this.loadToken();
    this.loadUserId();

    this.user = undefined;

    makeObservable<AccountStoreImpl, any>(this, {
      user: observable,
      resetStore: action,
      loadToken: action,
      loadUserId: action,
      setUser: action,
      userExists: action,
    });
  }

  async resetStore() {
    this.token = '';
    this.userId = '';
    this.user = undefined;
    await localStorage.removeItem(LOCAL_STORAGE_KEYS.token);
    await localStorage.removeItem(LOCAL_STORAGE_KEYS.userId);
  }

  private async loadToken() {
    const token =
      (await localStorage.getItem(LOCAL_STORAGE_KEYS.token)) ?? undefined;
    this.token = token ? JSON.parse(token) : '';
  }

  private async loadUserId() {
    const userId = await localStorage.getItem(LOCAL_STORAGE_KEYS.userId);
    this.userId = userId ? JSON.parse(userId) : undefined;
  }

  async setToken(token: string) {
    this.token = token;
    await localStorage.setItem(LOCAL_STORAGE_KEYS.token, JSON.stringify(token));
  }

  async setUserId(id: string) {
    this.userId = id;
    await localStorage.setItem(LOCAL_STORAGE_KEYS.userId, JSON.stringify(id));
  }

  getToken() {
    return this.token;
  }

  setUser(user: User | undefined) {
    this.user = user;
  }

  getUserId(): string | undefined {
    return this.userId;
  }

  getUser(): User | undefined {
    return this.user;
  }

  userExists(): boolean {
    return !!this.token && !!this.userId;
  }
}
