import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const shapeNames = { square: "square", triangle: "triangle", circle: "circle", rectangle: "rectangle" };

interface IShape {
   area(): number;
   description(): string;
}

interface IShapeCreator {
   createShape(dimensions, name): IShape;
}

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

class Triangle implements IShape {
   base: number;
   height: number;
   chord: number;

   constructor(dimensions) {
      this.base = dimensions.option.triangleBase.value;
      this.height = dimensions.option.triangleHight.value;
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

class Circle implements IShape {
   radius: number;

   constructor(dimensions) {
      this.radius = dimensions.option.circleRadius.value;
      if (this.radius < 0) {
         throw new Error("circles' radius must be bigger or equal 0");
      }
      if (isNaN(this.radius) ) {
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

class Rectangle implements IShape {
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

class simpleCreator implements IShapeCreator {
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

function Form() {
   function handleSubmit(e) {
      e.preventDefault();
      let factory = new simpleCreator();
      try {
         console.log(factory.createShape({ option: e.target }, shapeNames.square).description())
         console.log(factory.createShape({ option: e.target }, shapeNames.triangle).description())
         console.log(factory.createShape({ option: e.target }, shapeNames.circle).description())
         console.log(factory.createShape({ option: e.target }, shapeNames.rectangle).description())

      } catch (error) {
         console.error(error.message)
      }
   }


   return (
      <form onSubmit={handleSubmit}>
         <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
               <div className="card">
                  <h3 className="card-header">square</h3>
                  <div className="card-body">
                     <div className="form-group">
                        <label className="form-label">length</label>
                        <input className="form-control" type="number" step="0.01" min="0" name="squareLength" required defaultValue="4" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
               <div className="card">
                  <h3 className="card-header">triangle</h3>
                  <div className="card-body">
                     <div className="form-group">
                        <label className="form-label">base</label>
                        <input className="form-control" type="number" step="0.01" min="0" name="triangleBase" required defaultValue="3" />
                     </div>
                     <div className="form-group">
                        <label className="form-label">height</label>
                        <input className="form-control" type="number" step="0.01" min="0" name="triangleHight" required defaultValue="4" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
               <div className="card">
                  <h3 className="card-header">circle</h3>
                  <div className="card-body">
                     <div className="form-group">
                        <label className="form-label">radius</label>
                        <input className="form-control" type="number" step="0.01" min="0" name="circleRadius" required defaultValue="3" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
               <div className="card">
                  <h3 className="card-header">rectangle</h3>
                  <div className="form-group card-body">
                     <div className="form-group">
                        <label className="form-label">width</label>
                        <input className="form-control" type="number" step="0.01" min="0" name="rectangleWidth" required defaultValue="4" />
                     </div>
                     <div className="form-group">
                        <label className="form-label">height</label>
                        <input className="form-control" type="number" step="0.01" min="0" name="rectangleHeight" required defaultValue="3" />
                     </div>
                  </div>

               </div>
            </div>
         </div>
         <div className="row justify-content-center mt-3">
            <div className="col-6">
               <button type="submit" className="btn btn-success col-12">Submit</button>
            </div>
         </div>
      </form>
   );
}

ReactDOM.render(
   <Form />,
   document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
