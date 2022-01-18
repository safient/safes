export class FormValidator {
  /**
   * Checks if the email is valid
   */
  static isEmailValid(email: string): boolean {
    const emailRegEx =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegEx.test(email.toLowerCase());
  }

  /**
   * Checks if the Input String is valid
   */
  static isStringValid(str: string): boolean {
    const stringRegEx = /^[a-z ]+$/i;
    return stringRegEx.test(str);
  }
}
