import { ViewRectangleClonable } from "./view-rectangle-clonable";

export class ViewRectangleModel {
  private x: number;
  private y: number;
  private width: number;
  private height: number;

  constructor(x: number | DOMRect | ViewRectangleClonable, y?: number, width?: number, height?: number) {
    if(x instanceof DOMRect || x instanceof ViewRectangleClonable) {
      const rectangle = x;
      this.x = rectangle.x;
      this.y = rectangle.y;
      this.width = rectangle.width;
      this.height = rectangle.height;
    }
    else {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  }

  public getX = (): number => {
    return this.x;
  }

  public getY = (): number => {
    return this.y;
  }

  public getWidth = (): number => {
    return this.width;
  }

  public getHeight = (): number => {
    return this.height;
  }

  public getAsStructuredCloneAlgorithmCompliantObject = (): ViewRectangleClonable => {
    return {
      x: this.getX(),
      y: this.getY(),
      width: this.getWidth(),
      height: this.getHeight()
    };
  }

  public isEqualTo = (viewRectangle: ViewRectangleModel): boolean => {
    return this.getX() === viewRectangle.getX() &&
      this.getY() === viewRectangle.getY() &&
      this.getWidth() === viewRectangle.getWidth() &&
      this.getHeight() === viewRectangle.getHeight();
  }
}
