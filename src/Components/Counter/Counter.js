import React, {Fragment} from "react";
import { connect } from "react-redux";
import {INC, DEC, ZERO, DOUBLE, Division, Hundred, MinusHundred } from "../../Actions/Action";

const Counter = ({ counter, DEC, INC, ZERO, DOUBLE, Division, Hundred, MinusHundred}) => {
  return (
    <Fragment>
      <div id="counter">{counter}</div>
      <button id="minus" onClick={DEC} className="btn btn-danger">
        Minus
      </button>
      <button id="plus" onClick={INC} className="btn btn-success">
        Plus
      </button>
      <button id="null" onClick={ZERO} className="btn btn-success">
        Zero
      </button>
      <button id="double" onClick={DOUBLE} className="btn btn-warning">
        Double
      </button>
      <button id="division" onClick={Division} className="btn btn-info">Division</button>
      <button id="hundred"  onClick={Hundred} className="btn btn-dark">Hundred</button>
      <button id="hundred"  onClick={MinusHundred} className="btn btn-dark">-200</button>

    </Fragment>
  );
}; 
const mapStateToProps = ({Reducer}) => {  // Деструктуризація. Дістаємо необхідний redcer
  console.log("state = > ", Reducer);
  return {
    counter: Reducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    INC: () => dispatch(INC()),
    DEC: () => dispatch(DEC()),
    Hundred:() => dispatch(Hundred()),
    MinusHundred: () => dispatch(MinusHundred()),
    ZERO: () => {
      const zeroCounter = 0;
      dispatch(ZERO(zeroCounter));
    },
    DOUBLE: () => {
      const multi = 2;
      dispatch(DOUBLE(multi));
    },

    Division: () => {
   const division = 2;
    dispatch (Division (division));
    },

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);