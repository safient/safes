export class ServiceResponse<T> {
  readonly data?: T;
  readonly error?: T;

  constructor({ data, error }: { data?: T; error?: T }) {
    this.data = data;
    this.error = error;
  }

  hasData(): boolean {
    return !!this.data;
  }

  hasError(): boolean {
    return !this.hasData();
  }

}
