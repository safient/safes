export interface StorageService {
  /**
   * For setting the value to localStorage
   * @param key
   * @param value
   */
  set(key: string, value: any): void;

  /**
   * For getting value from localStorage
   * @param key
   */
  get(key: string): any;

  /**
   * For removing value from localStorage
   * @param key
   */
  remove(key: string): void;
}
