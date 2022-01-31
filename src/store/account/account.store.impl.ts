import { action, computed, makeObservable, observable } from 'mobx';
import Web3Modal from 'web3modal';
import { AccountStore } from './account.store';
import { StoreImpl } from '../store/store.impl';
import { User } from '../../models';
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers';
import { formatEther } from '@ethersproject/units';
import { SafientCore, Types, Enums } from '@safient/core';

const UserNotFoundCode = 10;

export class AccountStoreImpl extends StoreImpl implements AccountStore {

  private web3Provider?: Web3Provider;
  private signer?: JsonRpcSigner;
  chainId?: number;
  address!: string;
  balance?: string;
  safient!: SafientCore;
  _web3User!: Types.User;


  constructor() {
    super();
    this.loadAccount();

    makeObservable<AccountStoreImpl, any>(this, {
      web3Provider: observable,
      signer: observable,
      chainId: observable,
      address: observable,
      balance: observable,
      _web3User: observable,
      userExists: computed,
      userSignedIn: computed,
      resetStore: action,
      loadAccount: action,
      setWeb3User: action,
    });
  }

  async resetStore() {
  }

  async loadAccount(): Promise<void> {

    const web3Modal = new Web3Modal({
      cacheProvider: true,
      theme: 'light',
    });
    const injectedProvider = await web3Modal.connect();
    this.web3Provider = new Web3Provider(injectedProvider);
    const network = await this.web3Provider.getNetwork();
    this.chainId = await network.chainId;
    this.signer = await this.web3Provider.getSigner();
    this.address = await this.signer.getAddress();
    const balance = await this.signer.getBalance();
    this.balance = formatEther(balance);
    this.safient = new SafientCore(
      this.signer,
      Enums.NetworkType.testnet,
      Enums.DatabaseType.threadDB,
      'bjngsmak24m6e5p2ijtcedws2tq',
      'bn3h6ozdpkmh7tgx3jh5el55cgfaevwxh7mcnnfi'
    );
  }

  get web3User(): Types.User {
    return this._web3User;
  }

  setWeb3User(user: Types.User) {
      this._web3User = user;
   }

  get userSignedIn(): boolean {
    return !!this._web3User;
  }


  get userExists(): boolean {
    return this.errorCode !== UserNotFoundCode;
  }
}
