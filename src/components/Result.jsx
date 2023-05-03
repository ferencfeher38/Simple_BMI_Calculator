import React from "react";

const Result = function (props) {
  return (
    <div className="button-container">
      <p className="multiline" style={props.style}>
        {props.bmi}
      </p>
      {props.reset && (
        <button onClick={() => window.location.reload()} className="reset">
          Reset
        </button>
      )}
    </div>
  );
};

export default Result;
