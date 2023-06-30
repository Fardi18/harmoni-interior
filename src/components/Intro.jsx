import React from "react";
import "./Components.css";

const Intro = (props) => {
  return (
    <div className="intro d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h6 className="text-white">List Produk</h6>
            <h1 className="text-white fw-bold mb-4">
              {props.heading} Harmoni Interior
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;
