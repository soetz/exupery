import { ipcMain as interProcessCommunication } from 'electron';
import { Service } from 'typedi';

import { CamelCase } from '../utils';

@Service()
export class InterProcessService {

  private interProcessChannelsToListenTo: Array<string> = [
    'new-tab',
    'browser-view-slot-rectangle'
  ];

  private webContents: Electron.WebContents;

  public initialize = (webContents: Electron.WebContents): void => {
    this.registerInterProcessListeners();
    this.webContents = webContents;
  }

  private registerInterProcessListeners = (): void => {
    this.interProcessChannelsToListenTo.forEach((channel: string): void => {
      const listenerName: string = CamelCase.transform(channel) + 'Listener';
      interProcessCommunication.on(channel, this[listenerName]);
    });
  }

  private sendMessage = (channel: string, ...args: Array<any>): void => {
    return this.webContents.send(channel, args);
  }

  private browserViewSlotRectangleListener = (event: Electron.IpcMainEvent, rectangle: any): void => {
    // INSERT BROWSER VIEW BOUNDS UPDATE HERE
  }

  private newTabListener = (): void => {
    // INSERT NEW TAB ACTION HERE
  }

  public hasNavigated = (uri: string): void => {
    return this.sendMessage('has-navigated', uri);
  }
}
