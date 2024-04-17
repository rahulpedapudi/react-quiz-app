import React from "react";

export default function Option(props) {
  return (
    <>
      <input
        onChange={props.isChecked}
        type="radio"
        name="answer"
        id={props.id}
      />
      <label htmlFor={props.ans}>{props.ans}</label>
    </>
  );
}
