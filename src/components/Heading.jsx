import React from "react";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

const Heading = function () {
  return (
    <div className="heading">
      <HealthAndSafetyIcon color="disabled" sx={{ fontSize: "5rem" }} />
      <h1>Simple BMI Calculator</h1>
    </div>
  );
};

export default Heading;
