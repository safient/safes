import { ServiceResponse } from "./service-response.";

export abstract class Service {
  static DEFAULT_ERROR_MESSAGE = "Something went wrong!";

  protected success<T>(data: T): ServiceResponse<T> {
    return new ServiceResponse<T>({ data });
  }

  protected error<T>(
    error: Error = new Error(Service.DEFAULT_ERROR_MESSAGE)
  ): ServiceResponse<T> {
    console.log("Error::Service", error);
    return new ServiceResponse<T>({ error });
  }
}
