import React, {Fragment, useRef, useState} from "react";

const UseRefComp = () => {
  const [input, setinput] = useState("");
  const inputElem = useRef("");

  const changeStyle = () => {
    //    console.log(inputElem.current)
    inputElem.current.style.backgroundColor = "green";
    inputElem.current.focus();
  };
  return (
    <Fragment>
      <div>UseRefComp</div>
      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
        ref={inputElem}
      />{" "}
      <br />
      <button onClick={changeStyle}>Submit</button>
    </Fragment>
  );
};

export default UseRefComp;
