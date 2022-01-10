import { ServiceResponse } from "../core/service-response.";
import { SafientCore, Types } from "@safient/core";

export interface AccountService {
  /**
   * Opens a web3modal and allows the user to connect account
   */
  login(): Promise<ServiceResponse<Types.User>>;
}
