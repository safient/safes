import Web3Modal from 'web3modal';
import { AccountService } from './account.service';
import { ServiceResponse } from '../core/service-response.';
import { AccountStoreImpl, stores } from '../../store';
import { Web3Provider } from '@ethersproject/providers';
import { Service } from '../core/service';
import { SafientCore } from '@safient/core';

export class AccountServiceImpl extends Service implements AccountService {
  readonly web3Modal: Web3Modal;
  private readonly accountStore: AccountStoreImpl;

  constructor() {
    super();
    this.accountStore = stores?.accountStore;
    this.web3Modal = new Web3Modal({
      cacheProvider: true,
      theme: 'light',
    });
  }

  async connectAccount(): Promise<ServiceResponse<SafientCore>> {
    try {
      const injectedProvider = await this.web3Modal.connect();
      const provider = new Web3Provider(injectedProvider);
      await this.accountStore.loadAccount(provider);

      return this.success<SafientCore>(this.accountStore.safient as SafientCore);
    } catch (e: any) {
      return this.error<SafientCore>(e);
    }
  }
}
