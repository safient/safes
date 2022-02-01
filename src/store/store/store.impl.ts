import {action, computed, makeObservable, observable} from 'mobx'
import {Store} from './store'

export class StoreImpl implements Store {
  protected _fetching: boolean
  protected _error: string
  protected _code: number

  constructor() {
    this._fetching = false
    this._error = ''
    this._code = 0

    makeObservable<StoreImpl, any>(this, {
      _fetching: observable,
      _error: observable,
      _code: observable,
      fetching: computed,
      error: computed,
      errorCode: computed,
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

  get errorCode() {
    return this._code
  }

  public setFetching(flag: boolean) {
    this._fetching = flag

    if (flag) {
      this._error = ''
    }
  }

  public setError(message?: string, code?: number) {
    this._error = message || ''
    this._code = code || 0
    this.setFetching(false)
  }

}
