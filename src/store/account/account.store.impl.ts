import { action, makeObservable, observable } from 'mobx';
import { AccountStore } from './account.store';
import { StoreImpl } from '../store/store.impl';
import { User } from '../../models';
import { StorageKey, storageService } from '../../services';
import { JsonRpcSigner, Network, Web3Provider } from '@ethersproject/providers';
import { formatEther } from '@ethersproject/units';
import { SafientCore, Types, Enums } from '@safient/core';

export class AccountStoreImpl extends StoreImpl implements AccountStore {
  private token?: string;
  private userId?: string;
  private user?: User;
  private web3Provider?: Web3Provider;
  private signer?: JsonRpcSigner;
  chainId?: number;
  address?: string;
  balance?: string;
  safient?: SafientCore;
  web3User?: Types.User;

  constructor() {
    super();
    this.loadToken();
    this.loadUserId();

    makeObservable<AccountStoreImpl, any>(this, {
      user: observable,
      web3Provider: observable,
      signer: observable,
      chainId: observable,
      address: observable,
      balance: observable,
      web3User: observable,
      resetStore: action,
      loadToken: action,
      loadUserId: action,
      setUser: action,
      userExists: action,
      loadAccount: action,
    });
  }

  async resetStore() {
    this.token = '';
    this.userId = '';
    this.user = undefined;

    storageService.remove(StorageKey.token);
    storageService.remove(StorageKey.userId);
  }

  async loadAccount(web3Provider: Web3Provider): Promise<void> {
    this.web3Provider = web3Provider;
    const network = await this.web3Provider.getNetwork();
    this.chainId = await network.chainId;
    this.signer = await this.web3Provider.getSigner();
    this.address = await this.signer.getAddress();
    const balance = await this.signer.getBalance();
    this.balance = formatEther(balance);
    this.safient = new SafientCore(
      this.signer,
      Enums.NetworkType.localhost,
      'threadDB',
      'bjngsmak24m6e5p2ijtcedws2tq',
      'bn3h6ozdpkmh7tgx3jh5el55cgfaevwxh7mcnnfi',
      null
    );
    if (this.chainId == 31337 || this.chainId == 1 || this.chainId == 4) {
      const user = await this.safient.loginUser();
      if (user.status && user.data) {
        this.web3User = user.data;
      }
    }
  }

  private async loadToken() {
    const token = (await storageService?.get(StorageKey.token)) ?? undefined;
    this.token = token ?? '';
  }

  private async loadUserId() {
    const userId = await storageService?.get(StorageKey.userId);
    this.userId = userId ?? undefined;
  }

  async setToken(token: string) {
    this.token = token;
    await storageService.set(StorageKey.token, token);
  }

  async setUserId(id: string) {
    this.userId = id;
    await storageService.set(StorageKey.userId, id);
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
