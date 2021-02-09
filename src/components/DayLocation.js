import React from "react";
import PropTypes from "prop-types";

function DayLocation(props){
  return(
    <>
      <h3>{props.day}</h3>
      <h3>{props.location}</h3>
      <h3>{props.hours}</h3>
      <h3>{props.booth}</h3>
      <hr />
    </>
  );
}

DayLocation.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default DayLocation;

// child of PlanVisit
// sibling of MonthProduce