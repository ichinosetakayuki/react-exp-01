import React from "react";

const Button = ({ text }) => {
  return (
    <div className="aa">
      {/* この下に目印(props)を表示します */}
      {text}
      {/* <div>{text}</div> */}
      {/* <button>{text}</button> */}
      {/* この上に目印(props)を表示します */}
    </div>
  );
};

export default Button;
