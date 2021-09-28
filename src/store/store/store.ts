export interface Store {
  /**
   * @property fetching Indicates if transaction store data if being fetched from server and will be updated soon
   * NOTE: Application state will not be tracked at screen levels anymore. Tracking it at store level will reduce
   * the need for updating states at multiple parts of the application and provides precise information about which
   * part of the screen is being loaded.
   */
  fetching: boolean

  /**
   * @property error Error that occurred during fetching of transaction specific data
   */
  error: string

  /**
   * Sets fetching property as per given flag and resets the error if fetching is enabled
   * @param flag Value
   */
  setFetching(flag: boolean): void

  /**
   * Sets error message and resets fetching property since the API response is complete
   * @param message Error message
   */
  setError(message: string): void
}
