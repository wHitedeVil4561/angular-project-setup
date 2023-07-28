import { Injectable } from '@angular/core';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private crypto: CryptoService) {}

  /**
   * This method set information into localstorage. Encrypted.
   * @param key the name of the local storage key
   * @param value the value of the proposed key
   */
  setItem(key: string, value: any) {
    const encStoreInfo = this.crypto.encryptObj(value);
    localStorage.setItem(key, encStoreInfo);
  }

  /**
   * This method retuns the information from localstorage. Decrypted.
   * @param key the name of the local storage key
   * @return the information JSON object or undefined if data not avilabe into localstorage
   */
  getItem(key: string): any {
    try {
      let localStorageInfo;
      const encStoreInfo = localStorage.getItem(key);
      if (encStoreInfo) {
        localStorageInfo = this.crypto.decryptObj(localStorage.getItem(key));
      }
      return localStorageInfo;
    } catch (err) {
      localStorage.clear();
      window.location.reload();
    }
  }

  /**
   * This method remove the particular key information from localstorage.
   * @param key the name of the local storage key
   */
  clearItem(key: string) {
    localStorage.removeItem(key);
  }

  /**
   * This method remove all the information from localstorage.
   */
  clearAll() {
    localStorage.clear();
  }
}
