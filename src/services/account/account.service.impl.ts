import Web3Modal from 'web3modal';
import { AccountService } from './account.service';
import { ServiceResponse } from '../core/service-response.';
import { AccountStoreImpl, stores } from '../../store';
import { Service } from '../core/service';
import { Types } from '@safient/core';
import { User } from 'models';

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

  async login(): Promise<ServiceResponse<Types.User | undefined>> {
    try {
      
      const user = await this.accountStore.safient.loginUser();
      if (user.status && user.data) {
          this.accountStore.setWeb3User(user.data);
        }

      return this.success<Types.User | undefined>(this.accountStore.web3User);
    } catch (e: any) {
      return this.error<Types.User | undefined>(e);
    }
  }
}
