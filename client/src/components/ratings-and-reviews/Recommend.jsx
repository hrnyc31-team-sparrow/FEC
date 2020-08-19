import React from "react";
const Recommend = ({handleChangeRec, recommend }) => (
  <div className="user-input-recommend">
    <label className="text-style-2" style={{ fontWeight: "bold" }}>
      Do you recommend this product? (mandatory)
    </label>
    <input
      onChange={handleChangeRec}
      name="recommend"
      value="yes"
      type="radio"
      checked={recommend === true}
    ></input>
    <label className="text-style-2">Yes</label>
    <input
      onChange={handleChangeRec}
      name="recommend"
      value="no"
      type="radio"
      checked={recommend === false}
    ></input>
    <label className="text-style-2">No</label>
  </div>
);

export default Recommend;
