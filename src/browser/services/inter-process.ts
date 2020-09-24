/* eslint-disable @typescript-eslint/no-unused-vars */
import { ipcMain as interProcessCommunication } from 'electron';
import { Service } from 'typedi';

import { CamelCase } from '../utils';
import { ViewManagerService } from './view-manager';
import { ViewRectangle } from '../models';

@Service()
export class InterProcessService {

  private interProcessChannelsToListenTo: Array<string> = [
    'new-tab',
    'browser-view-slot-rectangle'
  ];

  private viewManagerService: ViewManagerService;
  private webContents: Electron.WebContents;

  constructor(viewManagerService: ViewManagerService) {
    this.viewManagerService = viewManagerService;
  }

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

  private browserViewSlotRectangleListener = (event: Electron.IpcMainEvent, rectangle: ViewRectangle): void => {
    this.viewManagerService.resizeCurrentView(rectangle);
  }

  private newTabListener = (): void => {
    // INSERT NEW TAB ACTION HERE
  }

  public hasNavigated = (uri: string): void => {
    return this.sendMessage('has-navigated', uri);
  }
}
