import { ipcMain as interProcessCommunication } from 'electron';
import { Service } from 'typedi';

import { CamelCase } from './utils';

@Service()
export class InterProcessService {

  private interProcessChannelsToListenTo: Array<string> = [
    'new-tab'
  ];

  public registerInterProcessListeners = (): void => {
    this.interProcessChannelsToListenTo.forEach((channel: string): void => {
      const listenerName: string = CamelCase.transform(channel) + 'Listener';
      interProcessCommunication.on(channel, this[listenerName]);
    });
  }

  private newTabListener() {
    // INSERT NEW TAB ACTION HERE
  }
}
