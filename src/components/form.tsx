import SimpleCreator from "../utils/classes/simpleCreator";
import shapeNames from "../utils/common";

function Form() {
    function handleSubmit(e) {
       e.preventDefault();
       let factory = new SimpleCreator();
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
 
 export default Form;
