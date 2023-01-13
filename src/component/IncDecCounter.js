import React from "react";
import './IncrementDecrement.css';
import CounterValue from "./CounterValue";



class IncrementDecrement extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         counter: 0
      }
   }
   handleIncrement = () => {

      // alert('hi')
      let value = this.state.counter + 1;

      this.setState({ counter: value });
   }

   handleDecrement = () => {
      // console.log('hi')
      let value = this.state.counter - 1;

      this.setState({ counter: value });
   }


   handleChange = (e) => {
      // alert('hi')
      let value = (e.target.value ? parseInt(e.target.value) : 0);

      this.setState({ counter: value });
   }
   render() {
      return (<div>
         <h1 className="big-banner-2 my-3">Counter App</h1>

         <input type="number" name="counter" className="counter" value={this.state.counter} onChange={this.handleChange} />
         <CounterValue increment={this.handleIncrement} decrement={this.handleDecrement} />

      </div>
      )
   }
}

export default IncrementDecrement;