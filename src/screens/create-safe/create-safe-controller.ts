import _ from 'lodash';
import { action, makeObservable, observable } from 'mobx';

export enum RecoveryMethod {
  Arbitration = 'Arbitration',
  Signaling = 'Signaling',
  DDay = 'DDay',
}

export enum WalletStoreType {
  Secrets = 'Secrets',
  Instructions = 'Instructions',
}

export enum SecretStoreType {
  SeedPhrases = 'Seed Phrases',
  PrivateKey = 'Private Key',
  KeyStore = 'Keystore',
}

export class CreateSafeController {
  selectedWalletStoreType: WalletStoreType;
  selectedSecretStoreType: SecretStoreType;

  constructor() {
    this.selectedWalletStoreType = WalletStoreType.Secrets;
    this.selectedSecretStoreType = SecretStoreType.SeedPhrases;
    makeObservable(this, {
      selectedWalletStoreType: observable,
      selectedSecretStoreType: observable,
      setWalletStoreType: action,
      setSecretStoreType: action,
    });
  }

  getRecoveryMethods(): { value: string; option: string }[] {
    return _.map(RecoveryMethod, (RecoveryMethod) => ({
      value: RecoveryMethod,
      option: RecoveryMethod,
    }));
  }

  getSecretStoreType(): { value: string; option: string }[] {
    return _.map(SecretStoreType, (SecretStoreType) => ({
      value: SecretStoreType,
      option: SecretStoreType,
    }));
  }

  getWalletStoreTypes(): { value: string; option: string }[] {
    return _.map(WalletStoreType, (walletType) => ({
      value: walletType,
      option: walletType,
    }));
  }

  setWalletStoreType(value: WalletStoreType): void {
    // runInAction(()=>{this.selectedWalletStoreType = value;})
    this.selectedWalletStoreType = value;
  }

  setSecretStoreType(value: SecretStoreType): void {
    this.selectedSecretStoreType = value;
  }

  showSecretStoreType(): boolean {
    return this.selectedWalletStoreType === WalletStoreType.Secrets;
  }

  showInstructionsStoreType(): boolean {
    return this.selectedWalletStoreType === WalletStoreType.Instructions;
  }
}
