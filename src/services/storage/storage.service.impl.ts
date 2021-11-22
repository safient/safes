import { StorageKey, StorageService } from './storage.service';

export class StorageServiceImpl implements StorageService {
  async get(key: StorageKey): Promise<any> {
    const data = await localStorage.getItem(key);
    return data ? JSON.parse(data) : undefined;
  }

  async set(key: StorageKey, value: any) {
    const data = JSON.stringify(value);
    await localStorage.setItem(key, data);
  }

  async remove(key: StorageKey) {
    await localStorage.removeItem(key);
  }
}
