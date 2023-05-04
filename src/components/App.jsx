import React, { useState } from "react";
import Card from "@mui/material/Card";
import Heading from "./Heading";
import Form from "./Form";
import Result from "./Result";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

function App() {
  const [bmi, setBMI] = useState("");
  const [reset, setReset] = useState(false);

  const resultStyle = {
    color: "",
  };

  const calcBMI = function (props) {
    if ((props.weight === "") | (props.height === "")) return;
    setBMI(
      Math.round(
        (Number(props.weight) / Number(props.height * props.height)) * 100000
      ) / 10
    );
    setReset(true);
  };

  const calcResult = function (bmi) {
    if (!bmi) return;

    let result = "";

    if (bmi < 18.5) {
      resultStyle.color = "red";
      result = `Your BMI is ${bmi}
      Underweight ☹️`;
    }

    if (bmi >= 18.5 && bmi <= 24.9) {
      resultStyle.color = "green";
      result = `Your BMI is ${bmi}
      Normal 🙂`;
    }

    if (bmi >= 25 && bmi <= 29.9) {
      resultStyle.color = "yellow";
      result = `Your BMI is ${bmi}
      Overweight 😕`;
    }

    if (bmi >= 30 && bmi <= 39.9) {
      resultStyle.color = "orange";
      result = `Your BMI is ${bmi}
      Obese 😣`;
    }

    if (bmi >= 40) {
      resultStyle.color = "red";
      result = `Your BMI is ${bmi}
      Morbidly Obese 😫`;
    }

    return result;
  };

  return (
    <div>
      <Heading />
      <div className="container">
        <Card style={{ backgroundColor: "#7C96AB", borderRadius: "30px" }}>
          <Form onCalc={calcBMI} />
          <Result style={resultStyle} bmi={calcResult(bmi)} reset={reset} />
        </Card>
      </div>
    </div>
  );
}

export default App;
