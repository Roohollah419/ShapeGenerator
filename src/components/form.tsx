import SimpleCreator from "../utils/classes/simpleCreator";
import shapeNames from "../utils/common";
import ShapeForm from "./shapeForm";
import { ShapeDimensionParam } from "../utils/classes/shapeDimensionParam";
import React, { useState } from 'react';

function Form() {
   let result: string[] = [];

   const [resultItems, setResultItems] = useState({
      jsx: result.map((item, index) =>
         <li key={index}>
            {item}
         </li>)
   });

   function handleSubmit(e) {

      e.preventDefault();
      let factory = new SimpleCreator();
      try {
         result.push(factory.createShape({ option: e.target }, shapeNames.square).description())
         result.push(factory.createShape({ option: e.target }, shapeNames.rectangle).description())
         result.push(factory.createShape({ option: e.target }, shapeNames.triangle).description())
         result.push(factory.createShape({ option: e.target }, shapeNames.circle).description())
         var mapResult = result.map((item, index) =>
            <li key={index}>
               {item}
            </li>);
         setResultItems({ jsx: mapResult })

      } catch (error) {
         console.error(error.message)
      }
   }

   const squareDim: ShapeDimensionParam[] = [{ defaultValue: 4, label: "length", name: "squareLength" }];
   const circleDim: ShapeDimensionParam[] = [{ defaultValue: 3, label: "radius", name: "circleRadius" }];
   const triangleDim: ShapeDimensionParam[] = [{ defaultValue: 3, label: "base", name: "triangleBase" },
   { defaultValue: 4, label: "height", name: "triangleHeight" }];
   const rectangleDim: ShapeDimensionParam[] = [{ defaultValue: 3, label: "width", name: "rectangleWidth" },
   { defaultValue: 4, label: "height", name: "rectangleHeight" }];

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <div className="row">
               <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="card">
                     <h3 className="card-header">square</h3>
                     <div className="card-body">
                        <ShapeForm param={squareDim} />
                     </div>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="card">
                     <h3 className="card-header">triangle</h3>
                     <div className="card-body">
                        <ShapeForm param={triangleDim} />
                     </div>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="card">
                     <h3 className="card-header">circle</h3>
                     <div className="card-body">
                        <ShapeForm param={circleDim} />
                     </div>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="card">
                     <h3 className="card-header">rectangle</h3>
                     <div className="card-body">
                        <ShapeForm param={rectangleDim} />
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
         <div className="card row mt-3">
            <h1 className="card-header">Result</h1>
            <div className="card-body">
               <ul>
                  {resultItems.jsx}
               </ul>
            </div>
         </div>

      </div>
   );
}

export default Form;
