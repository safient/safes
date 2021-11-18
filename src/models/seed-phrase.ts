import _ from "lodash";
import { Id } from "./list";

export class SeedPhrase{
    id?: Id;
    phrase: string;

    constructor(data: any){
        this.id = _.uniqueId()
        this.phrase = data.phrase;
    }

    getPhrase(): string{
        return this.phrase;
    }
}