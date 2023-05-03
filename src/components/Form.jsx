import React, { useState } from "react";

const Form = function (props) {
  const [data, setData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function submitData(event) {
    props.onCalc(data);
    setData({
      age: "",
      gender: "",
      height: "",
      weight: "",
    });
    event.preventDefault();
  }

  return (
    <form>
      <div className="number-input">
        <label htmlFor="age">Age</label>
        <input
          name="age"
          onChange={handleChange}
          value={data.age}
          type="number"
          placeholder="25"
        ></input>
      </div>
      <br />
      <div className="radio-input">
        <input
          name="gender"
          onChange={handleChange}
          value="male"
          type="radio"
        ></input>
        <label htmlFor="male">Male</label>
        <input
          name="gender"
          onChange={handleChange}
          value="female"
          type="radio"
        ></input>
        <label htmlFor="female">Female</label>
      </div>
      <br />
      <div className="number-input">
        <label htmlFor="height">Height</label>
        <input
          name="height"
          onChange={handleChange}
          value={data.height}
          type="number"
          placeholder="cm"
        ></input>
      </div>
      <br />
      <div className="number-input">
        <label htmlFor="weight">Weight</label>
        <input
          name="weight"
          onChange={handleChange}
          value={data.weight}
          type="number"
          placeholder="kg"
        ></input>
      </div>
      <br />
      <div className="button-container">
        <div>
          <button onClick={submitData}>Calculate</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
