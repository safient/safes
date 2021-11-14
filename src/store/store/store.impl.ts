import {action, computed, makeObservable, observable} from 'mobx'
import {Store} from './store'

export class StoreImpl implements Store {
  protected _fetching: boolean
  protected _error: string

  constructor() {
    this._fetching = false
    this._error = ''

    makeObservable<StoreImpl, any>(this, {
      _fetching: observable,
      _error: observable,
      fetching: computed,
      error: computed,
      setFetching: action,
      setError: action,
    })
  }

  get fetching() {
    return this._fetching
  }

  get error() {
    return this._error
  }

  public setFetching(flag: boolean) {
    this._fetching = flag

    if (flag) {
      this._error = ''
    }
  }

  public setError(message?: string) {
    this._error = message || ''
    this.setFetching(false)
  }
}
