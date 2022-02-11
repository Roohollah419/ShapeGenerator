import React from "react";
import { useState } from "react";

const Dropdown = ({ options,sendDataToParent}) => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  return (<div>
    <select
      className="form-select"
      value={selectedOption}
      onChange={(e) => {
        setSelectedOption(e.target.value);
        sendDataToParent(selectedOption);
      }}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.name}
        </option>
      ))}
    </select>
    {sendDataToParent(selectedOption)}
    </div>
  );
};

export default Dropdown;
