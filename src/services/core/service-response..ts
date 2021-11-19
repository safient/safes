export class ServiceResponse<T> {
  readonly data?: T;
  private readonly error?: Error;

  constructor({ data, error }: { data?: T; error?: Error }) {
    this.data = data;
    this.error = error;
  }

  hasData(): boolean {
    return !!this.data;
  }

  hasError(): boolean {
    return !this.hasData();
  }

  getErrorMessage(): string {
    return this.error?.message ?? "";
  }
}
