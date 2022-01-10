import React from "react";

import { AccountServiceImpl } from "../account/account.service.impl";
import { EthereumServiceImpl } from "../ethereum/ethereum.service.impl";
import { StorageServiceImpl } from "../storage/storage.service.impl";

export const storageService = new StorageServiceImpl();
export const accountService = new AccountServiceImpl();
export const ethereumService = new EthereumServiceImpl();

class Services {
  storageService: StorageServiceImpl = new StorageServiceImpl();
  accountService: AccountServiceImpl = new AccountServiceImpl();
  ethereumService: EthereumServiceImpl = new EthereumServiceImpl();
}

const services = new Services();
export const ServicesContext = React.createContext<Services>(services);
export const useServices = () => React.useContext(ServicesContext);
