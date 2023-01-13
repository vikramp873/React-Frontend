import React from 'react'


class CounterValue extends React.Component {

   render() {

      return (
         <>
            <div>
               <button className="count-btn count-up" onClick={(e) => this.props.increment()}>Increment</button><br />
               <button className="count-btn count-down" onClick={(e) => this.props.decrement()}>Decrement</button>

            </div>
         </>
      )
   }

}

export default CounterValue;