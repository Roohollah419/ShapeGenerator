import React from "react";

function Result(resultItems) {
  return (
    <div className="card row mt-3">
      <h1 className="card-header">Result</h1>
      <div className="card-body">
        <ul>{resultItems.result.jsx}</ul>
      </div>
    </div>
  );
}

export default Result;
