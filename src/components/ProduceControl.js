import React from "react";
import MonthProduce from "./MonthProduce";
import {availableProduce} from "./data/seasonal-produce";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class ProduceControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: 0
    };
  }
  
  monthSelect = () => {
    this.setState({
      selectedMonth: 1
    });
  }
  
  render(){
    let currentlyVisibleState = null;
    const options = [
      'one', 'two', 'three'
    ];
    const defaultOption = options[0];
    if (this.state.selectedMonth === 0) {
      currentlyVisibleState = null
    }
      
      return (
        <>
        {/* <Dropdown options="$options" onChange={this._onSelect} value="$defaultOption" placeholder="Select an option" />; */}
          {/*  
          <Dropdown>
              <Dropdown.Item eventKey="1"> January </Dropdown.Item>
              <Dropdown.Item eventKey="2" active> February </Dropdown.Item>
              <Dropdown.Item eventKey="3"> March </Dropdown.Item>
              <Dropdown.Item eventKey="4"> April </Dropdown.Item>
              <Dropdown.Item eventKey="5"> May </Dropdown.Item>
              <Dropdown.Item eventKey="6"> June </Dropdown.Item>
              <Dropdown.Item eventKey="7"> July </Dropdown.Item>
              <Dropdown.Item eventKey="8"> August </Dropdown.Item>
              <Dropdown.Item eventKey="9"> September </Dropdown.Item>
              <Dropdown.Item eventKey="10"> October </Dropdown.Item>
              <Dropdown.Item eventKey="11"> November </Dropdown.Item>
              <Dropdown.Item eventKey="12"> December </Dropdown.Item>
          </Dropdown>
          {currentlyVisibleState}
          */}
        </>
    );
  }
}

export default ProduceControl;


// {availableProduce.map((monthProduce, index) =>
// <MonthProduce month={monthProduce.month}
// selection={monthProduce.selection.map(e => e.concat(", "))}
// key={index} />
// )}