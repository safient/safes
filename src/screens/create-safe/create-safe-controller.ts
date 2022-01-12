import _ from "lodash";
import { action, makeObservable, observable, runInAction } from "mobx";


enum RecoveryMethod {

    Arbitration = 'Arbitration',
    Signaling =  'Signaling',
    DDay = 'DDay'
}

enum WalletStoreType {

    Secrets =  'Secrets',
    Instructions = 'Instructions',
    
}

export class CreateSafeController {
    

    selectedWalletStoreType: WalletStoreType;

    constructor() {
        this.selectedWalletStoreType = WalletStoreType.Secrets;
        makeObservable(this, {
            selectedWalletStoreType: observable,
            setWalletStoreType: action
        })
    }

    getWalletStoreTypes(): {value: string, option: string}[]  {

        return _.map(WalletStoreType,(walletType)=> ({
            value: walletType,
            option: walletType,
        }))
    }

    setWalletStoreType(value: WalletStoreType): void {

        // runInAction(()=>{this.selectedWalletStoreType = value;})
        this.selectedWalletStoreType = value;
    }
    

    showSecretStoreType(): boolean {

        return this.selectedWalletStoreType === WalletStoreType.Secrets;
    }

    showInstructionsStoreType(): boolean {

        return this.selectedWalletStoreType === WalletStoreType.Instructions;
    }


    

}