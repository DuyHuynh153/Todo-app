import React from "react";

const Stats = ({ toDoList }) => {
  let countList = toDoList.length;

  return (
    <div className="stats">
      <p className="notify">
        {countList === 0
          ? "you have done everything ✈️"
          : `you have ${countList} thing to do`}
      </p>
    </div>
  );
};

export default Stats;
