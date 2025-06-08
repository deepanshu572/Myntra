import React from "react";

const FilterLeft = () => {
  return (
    <div className="filter_left">
      <div className="filter_first">
          <h4> Categories</h4>
        <div className="label_holder">
          <input type="radio" name="Gender" id="men" />
          <label htmlFor="men">Men</label>
        </div>
        <div className="label_holder">
          <input type="radio" name="Gender" id="Women" />
          <label htmlFor="Women">Women</label>
        </div>
        <div className="label_holder">
          <input type="radio" name="Gender" id="girl" />

          <label htmlFor="girl">girl</label>
        </div>
        <div className="label_holder">
          <input type="radio" name="Gender" id="boy" />

          <label htmlFor="boy">boy</label>
        </div>
      </div>
      <div className="filter_second">
        <div className="filter_second_head">
            <h4>Sub Categories</h4>
        </div>
        <div className="filter_second_data">
             <div className="label_holder">
          <input type="radio" name="SubCat" id="kurti" />
          <label htmlFor="kurti">kurti</label>
        </div>
             <div className="label_holder">
          <input type="radio" name="SubCat" id="pajama" />
          <label htmlFor="pajama">pajama</label>
        </div>
             <div className="label_holder">
          <input type="radio" name="SubCat" id="suits" />
          <label htmlFor="suits">suits</label>
        </div>
             <div className="label_holder">
          <input type="radio" name="SubCat" id="plazo" />
          <label htmlFor="plazo">plazo</label>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FilterLeft;
