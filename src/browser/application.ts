import { app, BrowserWindow, screen } from 'electron';
import { Service } from 'typedi';
import * as path from 'path';
import * as url from 'url';

import { InterProcessService } from './services/inter-process';

@Service()
export class Application {

  private arguments: Array<string>;
  private serve = false;
  private win: BrowserWindow = null;

  constructor(
    private interProcessService: InterProcessService
  ) {
    this.initialize();
  }

  private initialize = (): void => {
    this.arguments = process.argv.slice(1);
    this.serve = this.arguments.some((value) => value === '--serve');

    try {

      app.allowRendererProcessReuse = true;

      // This method will be called when Electron has finished
      // initialization and is ready to create browser windows.
      // Some APIs can only be used after this event occurs.
      // Added 400 ms to fix the black background issue while using transparent window. More detais at https://github.com/electron/electron/issues/15947
      app.on('ready', () => setTimeout(this.afterApplicationReady, 400));

      // Quit when all windows are closed.
      app.on('window-all-closed', () => {
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== 'darwin') {
          app.quit();
        }
      });

      app.on('activate', () => {
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (this.win === null) {
          this.createWindow();
        }
      });

    } catch (e) {
      // Catch Error
      // throw e;
    }
  }

  private afterApplicationReady = (): void => {
    this.createWindow();

    this.interProcessService.initialize(this.win.webContents);
  }

  private createWindow = (): BrowserWindow => {

    const electronScreen = screen;
    const size = electronScreen.getPrimaryDisplay().workAreaSize;

    // Create the browser window.
    this.win = new BrowserWindow({
      x: 0,
      y: 0,
      width: size.width,
      height: size.height,
      webPreferences: {
        nodeIntegration: true,
        allowRunningInsecureContent: (this.serve) ? true : false,
      },
    });

    if (this.serve) {

      this.win.webContents.openDevTools();

      require('electron-reload')(path.join(__dirname, '../..'), {
        electron: require(path.join(__dirname, '../../node_modules/electron')/*`${__dirname}/node_modules/electron`*/)
      });
      this.win.loadURL('http://localhost:4200');

    } else {
      this.win.loadURL(url.format({
        pathname: path.join(__dirname, '../../dist/index.html'),
        protocol: 'file:',
        slashes: true
      }));
    }

    // Emitted when the window is closed.
    this.win.on('closed', () => {
      // Dereference the window object, usually you would store window
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      this.win = null;
    });

    return this.win;
  }
}
