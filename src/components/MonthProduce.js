import React from "react";
import PropTypes from "prop-types";

function MonthProduce(props){
  return(
    <>
    <h3>{props.month}</h3>
    <h3>{props.selection}</h3>
    <hr />
  </>
  );
}

MonthProduce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired,
};


export default MonthProduce;

// child of PlanVisit
// sibling of DayLocation