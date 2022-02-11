import shapeNames  from "../common";

export class Square implements IShape {
    length: number;
 
    constructor(dimensions) {
       this.length = +dimensions.option.squareLength.value;
       if (this.length < 0) {
          throw new Error("Squares' length must be bigger or equal 0");
       }
       if (isNaN(this.length) ) {
          throw new Error("Squares' length must be a number");
       }
    }
 
    area(): number {
       return Math.pow(this.length, 2);
    }
    description(): string {
       return `name: ${shapeNames.square}, dimensions: ${this.length} x ${this.length}, area: ${this.area().toFixed(4)}`;
    }
 }