import _ from "lodash";

export class ServiceResponse<T> {
  readonly data?: T;
  readonly error?: Error;

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

  // TODO: return proper error message
  getErrorMessage(): string {

    return _.get(this.error, 'message', 'Something went wrong')
    
  }

}
