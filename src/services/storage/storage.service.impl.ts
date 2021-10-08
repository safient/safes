import { StorageService } from './storage.service';

export class StorageServiceImpl implements StorageService {
  static KEYS = {
    token: 'token',
    userId: 'user_id',
  };

  async get(key: string): Promise<any> {
    return await localStorage.getItem(key);
  }

  async set(key: string, value: any) {
    await localStorage.setItem(key, value);
  }

  async remove(key: string) {
    await localStorage.removeItem(key);
  }
}
