import shapeNames from "../common";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";
import { Square } from "./square";
import { Triangle } from "./triangle";

class SimpleCreator implements IShapeCreator {
   createShape(dimensions, name): IShape {
      switch (name) {
         case shapeNames.square:
            return new Square(dimensions)
         case shapeNames.triangle:
            return new Triangle(dimensions)
         case shapeNames.circle:
            return new Circle(dimensions)
         case shapeNames.rectangle:
            return new Rectangle(dimensions)
         default:
            throw new Error("Your shape is not defined");
      }
   }
}

export default SimpleCreator;