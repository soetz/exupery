import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer as interProcessCommunication } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {
  interProcessCommunication: typeof interProcessCommunication;

  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }

  constructor() {
  }

  private sendMessage = (channel: string, ...args: Array<any>): void => {
    return this.interProcessCommunication.send(channel, ...args);
  }

  public createNewTab = (): void => {
    this.sendMessage('new-tab');
  }
}
