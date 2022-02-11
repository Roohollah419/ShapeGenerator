import shapeNames from "../common";

export class Triangle implements IShape {
   base: number;
   height: number;
   chord: number;

   constructor(dimensions) {
      this.base = dimensions.option.triangleBase.value;
      this.height = dimensions.option.triangleHeight.value;
      if (this.base < 0 || this.height < 0) {
         throw new Error("triangles' base and height must be bigger or equal 0");
      }
      if (isNaN(this.base) || isNaN(this.height)) {
         throw new Error("triangles' base and height must be a number");
      }
   }

   area(): number {
      return this.base * this.height / 2;
   }
   description(): string {
      this.chord = Math.sqrt(Math.pow(this.base, 2) + Math.pow(this.height, 2))
      return `name: ${shapeNames.triangle}, dimensions:  a${this.base} x b${this.height} x c${this.chord}, area: ${this.area().toFixed(4)}`;
   }
}