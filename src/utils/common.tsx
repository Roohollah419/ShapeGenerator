import { ShapeDimensionParam } from "./classes/shapeDimensionParam";

export enum shapeNames { square= "square", triangle= "triangle", circle= "circle", rectangle= "rectangle" };

export const squareDim: ShapeDimensionParam[] = [{ defaultValue: 4, label: "length", name: "squareLength" }];
export const circleDim: ShapeDimensionParam[] = [{ defaultValue: 3, label: "radius", name: "circleRadius" }];
export const triangleDim: ShapeDimensionParam[] = [{ defaultValue: 3, label: "base", name: "triangleBase" },
{ defaultValue: 4, label: "height", name: "triangleHeight" }];
export const rectangleDim: ShapeDimensionParam[] = [{ defaultValue: 3, label: "width", name: "rectangleWidth" },
{ defaultValue: 4, label: "height", name: "rectangleHeight" }];