import React from 'react';

import { AccountServiceImpl } from '../account/account.service.impl';
import { StorageServiceImpl } from '../storage/storage.service.impl';

export const storageService = new StorageServiceImpl();
export const accountService = new AccountServiceImpl();

class Services {

    storageService: StorageServiceImpl = new StorageServiceImpl();
    accountService: AccountServiceImpl = new AccountServiceImpl();

} 

const services = new Services()
export const ServicesContext = React.createContext<Services>(services);
export const useServices = () => React.useContext(ServicesContext);
