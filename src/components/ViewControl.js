import React from "react";
import PlanVisit from './PlanVisit';
import About from './About';
import NewContactForm from './NewContactForm';

class ViewControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleView: 0
    };
  }
  

  planClick = () => {
    this.setState({
      visibleView: 1
    });
  }

  aboutClick = () => {
    this.setState({
      visibleView: 2
    });
  }

  contactClick = () => {
    this.setState({
      visibleView: 3
    });
  }



  render(){
      let currentlyVisibleState = null;
      if (this.state.visibleView === 0) {
        currentlyVisibleState = null
      } else if(this.state.visibleView === 1) {
        currentlyVisibleState = <PlanVisit />
      } else if(this.state.visibleView === 2) {
        currentlyVisibleState = <About />
      } else if(this.state.visibleView === 3) {
        currentlyVisibleState = <NewContactForm />
      }
      return (
        <>
          <button onClick={this.planClick}> Plan Your Visit </button>
          <button onClick={this.aboutClick}> About </button>
          <button onClick={this.contactClick}> Contact </button>
          {currentlyVisibleState}
        </>
    );
  }
}

export default ViewControl;