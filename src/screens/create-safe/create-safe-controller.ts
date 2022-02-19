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
  selectedRecoveryMethod: RecoveryMethod;
  constructor() {
    this.selectedWalletStoreType = WalletStoreType.Secrets;
    this.selectedSecretStoreType = SecretStoreType.SeedPhrases;
    this.selectedRecoveryMethod = RecoveryMethod.Arbitration;
    makeObservable(this, {
      selectedWalletStoreType: observable,
      selectedSecretStoreType: observable,
      selectedRecoveryMethod: observable,
      setRecoveryMethod: action,
      setWalletStoreType: action,
      setSecretStoreType: action,
    });
  }

  getRecoveryMethods(): { value: string; label: string }[] {
    return _.map(RecoveryMethod, (RecoveryMethod) => ({
      value: RecoveryMethod,
      label: RecoveryMethod,
    }));
  }

  getSecretStoreType(): { value: string; label: string }[] {
    return _.map(SecretStoreType, (SecretStoreType) => ({
      value: SecretStoreType,
      label: SecretStoreType,
    }));
  }

  getWalletStoreTypes(): { value: string; label: string }[] {
    return _.map(WalletStoreType, (walletType) => ({
      value: walletType,
      label: walletType,
    }));
  }

  setRecoveryMethod(value: RecoveryMethod): void {
    this.selectedRecoveryMethod = value;
  }

  setWalletStoreType(value: WalletStoreType): void {
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
