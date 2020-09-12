import { Injectable } from '@angular/core';
import { ipcRenderer } from 'electron';
import { CamelCasePipe } from 'app/shared/pipes';
import { ViewRectangleModel } from 'app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  private interProcessChannelsToListenTo: Array<string> = [
    'has-navigated'
  ];

  interProcessCommunication: typeof ipcRenderer;

  camelCase: CamelCasePipe;

  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }

  constructor(
    camelCase: CamelCasePipe
  ) {
    this.camelCase = camelCase;

    if(this.isElectron) {
      this.interProcessCommunication = window.require('electron').ipcRenderer;
    }
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

  private hasNavigatedListener = (event: Electron.IpcRendererEvent, uri: string): void => {
    // INSERT HAS NAVIGATED ACTION HERE
  }

  public browserViewSlotRectangle = (rectangle: ViewRectangleModel): void => {
    this.sendMessage('browser-view-slot-rectangle', rectangle.getAsStructuredCloneAlgorithmCompliantObject());
  }

  public createNewTab = (): void => {
    this.sendMessage('new-tab');
  }
}
