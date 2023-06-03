import React from "react";
import { useRef } from "react";

const AddItem = ({newItem,setNewItem,handleSubmit}) => {

    const inputRef=useRef();

  return (
    <div className="container mb-3 mt-5">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
            <h3 className="text-center">Add Item</h3>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="additem" className="form-label">
                Add Item
              </label>
              <input
                type="text"
                className="form-control"
                id="additem"
                aria-describedby="additemHelp"
                placeholder="Add item"
                autoFocus
                ref={inputRef}
                required
                value={newItem}
                onChange={(e)=>setNewItem(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success fw-bold float-end" onClick={()=>inputRef.current.focus()}>
              Add
            </button>
          </form>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default AddItem;
