import {shapeNames} from "../common";

export class Rectangle implements IShape {
   width: number;
   height: number;


   constructor(dimensions) {
      this.width = dimensions.option.rectangleWidth.value;
      this.height = dimensions.option.rectangleHeight.value;
      if (this.width < 0 || this.height < 0) {
         throw new Error("rectangles' width and height must be bigger or equal 0");
      }
      if (isNaN(this.width) || isNaN(this.height)) {
         throw new Error("rectangles' width and height must be a number");
      }
   }

   area(): number {
      return this.width * this.height;
   }
   description(): string {
      return `name: ${shapeNames.rectangle}, dimensions:  ${this.width} x ${this.height} , area: ${this.area().toFixed(4)}`;
   }
}