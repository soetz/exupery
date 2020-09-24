import { Service } from "typedi";
import { View } from "../view";
import { ViewRectangle } from '../models';
import { BrowserView, BrowserWindow } from "electron";

@Service()
export class ViewManagerService {

  private currentView: View;

  constructor() {
  }

  public createBrowserView = (browserWindow: BrowserWindow): void => {
    this.currentView = new BrowserView();
    browserWindow.addBrowserView(this.currentView);
    this.currentView.webContents.loadURL('https://gitlab.com/soetz/exupery');
  }

  public resizeCurrentView = (rectangle: ViewRectangle): void => {
    this.currentView.setBounds(rectangle);
  }
}
