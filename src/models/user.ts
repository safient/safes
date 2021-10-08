import { makeObservable, observable } from 'mobx';

export class User {
  private readonly firstName: string;
  private readonly lastName: string;
  private readonly email: string;
  private readonly avatar: string;

  constructor(user: any) {
    this.firstName = user?.firstName ?? '';
    this.lastName = user?.lastName ?? '';
    this.avatar = user?.avatar ?? '';
    this.email = user?.email ?? '';

    makeObservable<User, any>(this, {
      firstName: observable,
      lastName: observable,
      email: observable,
      avatar: observable,
    });
  }

  getName = (): string => {
    return `${this.firstName} ${this.lastName}`;
  };

  getFirstName = (): string => {
    return this.firstName;
  };

  getLastName = (): string => {
    return this.lastName;
  };

  getAvatar = (): string => {
    return this.avatar;
  };

  getEmail = (): string => {
    return this.email;
  };
}
