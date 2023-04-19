import React from "react";
import { connect } from "react-redux";
import { IncAction } from "./action";
import { DecAction } from "./action";

const App = ({ local_variable, IncAction, DecAction }) => {
  return (
    <div>
      <center>
        <h1>{local_variable}</h1> <br /> <hr />
        <button onClick={() => IncAction()}>Increment</button> &nbsp; &nbsp;
        <button onClick={() => DecAction()}>Decrement</button>
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  local_variable: state,
});
export default connect(mapStateToProps, { IncAction, DecAction })(App);
