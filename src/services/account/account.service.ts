import { ServiceResponse } from "../core/service-response.";
import { SafientCore } from "@safient/core";

export interface AccountService {
  /**
   * Opens a web3modal and allows the user to connect account
   */
  connectAccount(): Promise<ServiceResponse<SafientCore>>;
}
