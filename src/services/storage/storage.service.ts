export enum StorageKey{
  token = "token",
  userId = "userId",
}

export interface StorageService {
  /**
   * For setting the value to localStorage
   * @param key
   * @param value
   */
  set(key: StorageKey, value: any): void;

  /**
   * For getting value from localStorage
   * @param key
   */
  get(key: StorageKey): any;

  /**
   * For removing value from localStorage
   * @param key
   */
  remove(key: StorageKey): void;
}
