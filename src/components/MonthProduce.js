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
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};


export default MonthProduce;

// child of PlanVisit
// sibling of DayLocation