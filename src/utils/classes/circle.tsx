import { shapeNames } from "../common";

export class Circle implements IShape {
   radius: number;

   constructor(dimensions) {
      this.radius = dimensions.option.circleRadius.value;
      if (this.radius < 0) {
         throw new Error("circles' radius must be bigger or equal 0");
      }
      if (isNaN(this.radius)) {
         throw new Error("circles' radius must be a number");
      }
   }

   area(): number {
      return Math.PI * Math.pow(this.radius, 2);
   }
   description(): string {
      return `name: ${shapeNames.circle}, dimensions:  radius ${this.radius} , area: ${this.area().toFixed(4)}`;
   }
}