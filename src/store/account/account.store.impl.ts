import { action, makeObservable, observable } from "mobx";
import { AccountStore } from "./account.store";
import { StoreImpl } from "../store/store.impl";
import { User } from "../../models";
import { StorageKey, storageService } from "../../services";
import { JsonRpcSigner, Network, Web3Provider } from "@ethersproject/providers";
import { formatEther } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";
import { SafientCore } from "@safient/core";

export class AccountStoreImpl extends StoreImpl implements AccountStore {
  private token?: string;
  private userId?: string;
  private user?: User;
  private web3Provider?: Web3Provider;
  private network?: Network;
  private signer?: JsonRpcSigner;
  address: string = "";
  // TODO: Check default values for constructor
  private _balance: BigNumber = new BigNumber("", "");
  safient?: SafientCore;

  constructor() {
    super();
    this.loadToken();
    this.loadUserId();

    makeObservable<AccountStoreImpl, any>(this, {
      user: observable,
      web3Provider: observable,
      network: observable,
      signer: observable,
      address: observable,
      resetStore: action,
      loadToken: action,
      loadUserId: action,
      setUser: action,
      userExists: action,
      initializeSafient: action,
    });
  }

  async resetStore() {
    this.token = "";
    this.userId = "";
    this.user = undefined;

    storageService.remove(StorageKey.token);
    storageService.remove(StorageKey.userId);
  }

  get chainId(): number | undefined {
    return this.network?.chainId;
  }

  get balance(): string {
    return formatEther(this._balance);
  }

  async initializeSafient(web3Provider: Web3Provider): Promise<void> {
    this.web3Provider = web3Provider;
    this.network = await this.web3Provider.getNetwork();
    this.signer = await this.web3Provider.getSigner();
    this.address = await this.signer.getAddress();
    this._balance = await this.signer?.getBalance();
    this.safient = new SafientCore(
      this.signer,
      this.chainId as number,
      "threadDB"
    );
  }

  private async loadToken() {
    const token = (await storageService.get(StorageKey.token)) ?? undefined;
    this.token = token ?? "";
  }

  private async loadUserId() {
    const userId = await storageService.get(StorageKey.userId);
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
