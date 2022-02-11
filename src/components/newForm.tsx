import React, { useState } from "react";
import SimpleCreator from "../utils/classes/simpleCreator";
import {
  circleDim,
  rectangleDim,
  shapeNames,
  squareDim,
  triangleDim,
} from "../utils/common";
import Dropdown from "./dropdown";
import Result from "./result";
import ShapeForm from "./shapeForm";
import SubmitButton from "./submitButton";

let result: string[] = [];
function NewForm() {
  let factory = new SimpleCreator();

  const [resultItems, setResultItems] = useState({
    jsx: [].map((item, index) => <li key={index}>{item}</li>),
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    try {
      result.push(
        factory.createShape({ option: e.target }, e.target.id).description()
      );
      var mapResult = result.map((item, index) => <li key={index}>{item}</li>);
      setResultItems({ jsx: mapResult });
    } catch (error) {
      console.error(error.message);
    }
  }

  const options = [
    { name: "square", value: 1 },
    { name: "circle", value: 2 },
    { name: "triangle", value: 3 },
    { name: "rectangle", value: 4 },
  ];
  const renderForm = (value: number) => {
    switch (+value) {
      case 1:
        return (
          <form onSubmit={handleSubmit} id={shapeNames.square}>
            <ShapeForm param={squareDim} />
            <SubmitButton />
          </form>
        );
      case 2:
        return (
          <form onSubmit={handleSubmit} id={shapeNames.circle}>
            <ShapeForm param={circleDim} />
            <SubmitButton />
          </form>
        );
      case 3:
        return (
          <form onSubmit={handleSubmit} id={shapeNames.triangle}>
            <ShapeForm param={triangleDim} />
            <SubmitButton />
          </form>
        );
      case 4:
        return (
          <form onSubmit={handleSubmit} id={shapeNames.rectangle}>
            <ShapeForm param={rectangleDim} />
            <SubmitButton />
          </form>
        );

      default:
        throw new Error("something went wrong");
    }
  };
  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <Dropdown options={options} sendDataToParent={renderForm} />
        <Result result={resultItems} />
      </div>
    </div>
  );
}
export default NewForm;
