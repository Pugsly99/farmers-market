import React from "react";
import DayLocation from "./DayLocation";
import {marketSchedule} from "./data/market-schedule";
import MonthProduce from "./MonthProduce";
import {availableProduce} from "./data/seasonal-produce";
import ProduceControl from "./ProduceControl";

function PlanVisit() {
  return (
    <>
      <hr/>
        {marketSchedule.map((dayLocation, index) =>
          <DayLocation day={dayLocation.day}
            location={dayLocation.location}
            hours={dayLocation.hours}
            booth={dayLocation.booth}
            key={index} />

        )}

        {availableProduce.map((monthProduce, index) =>
          <MonthProduce month={monthProduce.month}
            selection={monthProduce.selection.map(e => e.concat(", "))}
            key={index} />
        )}
        
        <ProduceControl />
    </>
  );
}

export default PlanVisit;