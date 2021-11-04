import { action, makeObservable, observable } from 'mobx';
import { AccountStore } from './account.store';
import { StoreImpl } from '../store/store.impl';
import { User } from '../../models';
import { storageService } from '../../services/core/services';
import { StorageKey } from '../../services/storage/storage.service.impl';

export class AccountStoreImpl extends StoreImpl implements AccountStore {
  private token?: string;
  private userId?: string;
  private user?: User;

  constructor() {
    super();
    this.loadToken();
    this.loadUserId();

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

    storageService.remove(StorageKey.token);
    storageService.remove(StorageKey.userId);
  }

  private async loadToken() {
    const token =
      (await storageService.get(StorageKey.token)) ?? undefined;
    this.token = token ?? '';
  }

  private async loadUserId() {
    const userId = await storageService.get(StorageKey.userId);
    this.userId = userId ?? undefined;
  }

  async setToken(token: string) {
    this.token = token;
    await storageService.set(
      StorageKey.token,
      token
    );
  }

  async setUserId(id: string) {
    this.userId = id;
    await storageService.set(
      StorageKey.userId,
      id
    );
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
