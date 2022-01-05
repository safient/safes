import Web3Modal from 'web3modal';
import { EthereumService } from './ethereum.service';
import { ServiceResponse } from '../core/service-response.';
import { AccountStoreImpl, stores } from '../../store';
import { Service } from '../core/service';
import { Types } from '@safient/core';
import { User } from 'models';

export class EthereumServiceImpl extends Service implements EthereumService {

  constructor() {
    super();
    this.listen()
    // this.accountStore = stores?.accountStore;
   
  }

  async listen(): Promise<void> {
    
    window.ethereum &&
  window.ethereum.on('chainChanged', () => {
    console.log('change chain')
    setTimeout(() => {
      //  accountService.login();
    }, 1);
  });

window.ethereum &&
  window.ethereum.on('accountsChanged', () => {
    console.log('change chain')
    setTimeout(() => {
      // accountService.login();
    }, 1);
  });

  }
}
