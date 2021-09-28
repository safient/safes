import { StoreImpl } from '../store/store.impl';
import { IStore } from '../store';

export interface AppStore extends StoreImpl, IStore {}
