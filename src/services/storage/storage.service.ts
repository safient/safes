import { StorageKey } from "./storage.service.impl";

export interface StorageService {
  /**
   * For setting the value to localStorage
   * @param key
   * @param value
   */
  set(key: keyof typeof StorageKey, value: any): void;

  /**
   * For getting value from localStorage
   * @param key
   */
  get(key: keyof typeof StorageKey): any;

  /**
   * For removing value from localStorage
   * @param key
   */
  remove(key: keyof typeof StorageKey): void;
}
