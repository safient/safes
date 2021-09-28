import { action, makeObservable, observable } from 'mobx';
import { AppStore } from './app.store';
import { StoreImpl } from '../store/store.impl';

export class AppStoreImpl extends StoreImpl implements AppStore {
  // Enable this to init dummy data from cache
  static USE_FIXTURES = false;

  constructor() {
    super();
    this.resetStore();

    if (AppStoreImpl.USE_FIXTURES && process.env.NODE_ENV !== 'production') {
      this.resetStoreWithFixtures();
    }

    makeObservable<AppStoreImpl, any>(this, {
      resetStore: action,
      resetStoreWithFixtures: action,
    });
  }

  resetStore() {
    // reset
  }

  private resetStoreWithFixtures() {
    // reset with fixtures
  }
}
