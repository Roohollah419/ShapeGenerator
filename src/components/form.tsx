import SimpleCreator from "../utils/classes/simpleCreator";
import ShapeForm from "./shapeForm";
import React, { useState } from "react";
import {
  circleDim,
  rectangleDim,
  shapeNames,
  squareDim,
  triangleDim,
} from "../utils/common";
import Result from "./result";
import SubmitButton from "./submitButton";

function Form() {
  let result: string[] = [];

  const [resultItems, setResultItems] = useState({
    jsx: result.map((item, index) => <li key={index}>{item}</li>),
  });

  function handleSubmit(e) {
    e.preventDefault();
    let factory = new SimpleCreator();
    try {
      result.push(
        factory
          .createShape({ option: e.target }, shapeNames.square)
          .description()
      );
      result.push(
        factory
          .createShape({ option: e.target }, shapeNames.rectangle)
          .description()
      );
      result.push(
        factory
          .createShape({ option: e.target }, shapeNames.triangle)
          .description()
      );
      result.push(
        factory
          .createShape({ option: e.target }, shapeNames.circle)
          .description()
      );
      var mapResult = result.map((item, index) => <li key={index}>{item}</li>);
      setResultItems({ jsx: mapResult });
    } catch (error) {
      console.error(error.message);
    }
  }

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
        <SubmitButton />
      </form>
      <Result result={resultItems} />
    </div>
  );
}

export default Form;
