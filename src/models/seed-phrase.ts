import _ from "lodash";
import { makeObservable, observable } from "mobx";
import { Id } from "./list";

export class SeedPhrase{
    readonly id!: Id;
    private readonly phrase: string;

    constructor(phrase: string){
        this.phrase = phrase;

        makeObservable<any>(this, {
            phrase: observable
        })
    }

    get(): string{
        return this.phrase;
    }
}
