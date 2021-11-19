import { List } from "./list";
import { SeedPhrase } from "./seed-phrase";

export class SeedPharsesList extends List<SeedPhrase> {
    constructor(rawData?: any) {
      super(rawData, SeedPhrase, true)
    }
  }