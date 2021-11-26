import { AccountServiceImpl } from '../account/account.service.impl';
import { StorageServiceImpl } from '../storage/storage.service.impl';

export const storageService = new StorageServiceImpl();
export const accountService = new AccountServiceImpl();
