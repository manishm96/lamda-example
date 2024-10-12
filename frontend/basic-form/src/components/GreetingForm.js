import React from "react";
import { useState } from "react";

const GreetingForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log("Name: ", name);
  };

  return (
    <div className="greeting-form">
      <form className="demo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="name-field"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <button className="submit-button" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default GreetingForm;
