import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

const ChangeChildren = () => {
  const [child, setChild] = useState(null);

  const childComponents = [Child1, Child2, Child3];

  const handleClick = (childComponent) => {
    setChild(childComponent);
  };

  return (
    <>
      <div className="btn-container">
        {childComponents.map((Component, index) => (
          <button className="btn" onClick={() => handleClick(<Component />)}>
            Render Child {index + 1}
          </button>
        ))}
      </div>
      <div className="child-container">{child}</div>
    </>
  );
};

export default ChangeChildren;
