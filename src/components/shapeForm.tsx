import { ShapeDimensionParam } from "../utils/classes/shapeDimensionParam";
import React from 'react';

function ShapeForm(props) {

    let par: ShapeDimensionParam[] = props.param;
    let itemList = par.map((item, index) => {
        return (
            <div key={index} className="form-group">
                <label className="form-label">{item.label}</label>
                <input className="form-control" type="number" step="0.01" min="0" name={item.name} required defaultValue={item.defaultValue} />
            </div>);
    })

    return (<div>
        {itemList}
    </div>);
};

export default ShapeForm;