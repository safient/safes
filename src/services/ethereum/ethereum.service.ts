import { ServiceResponse } from '../core/service-response.';
import { Types } from '@safient/core';

export interface EthereumService {
  /**
   * Opens a web3modal and allows the user to connect account
   */
   listen(): Promise<void>;
}
