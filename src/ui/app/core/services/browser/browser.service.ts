import { Injectable } from '@angular/core';
import { ipcRenderer as interProcessCommunication } from 'electron';
import { CamelCasePipe } from 'app/shared/pipes';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  private interProcessChannelsToListenTo: Array<string> = [
  ];

  interProcessCommunication: typeof interProcessCommunication;

  camelCase: CamelCasePipe;

  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }

  constructor(
    camelCase: CamelCasePipe
  ) {
    this.interProcessCommunication = interProcessCommunication;
    this.camelCase = camelCase;
  }

  public initialize = (): void => {
    this.registerInterProcessListeners();
  }

  private registerInterProcessListeners = (): void => {
    this.interProcessChannelsToListenTo.forEach((channel: string): void => {
      const listenerName: string = this.camelCase.transform(channel) + 'Listener';
      this.interProcessCommunication.on(channel, this[listenerName]);
    });
  }

  private sendMessage = (channel: string, ...args: Array<any>): void => {
    return this.interProcessCommunication.send(channel, ...args);
  }

  public createNewTab = (): void => {
    this.sendMessage('new-tab');
  }
}
