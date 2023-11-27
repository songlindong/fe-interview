import React from 'react'
import { connect } from './connect'

function ReduxTest(props) {
  return (
    <div>
        {props.counter.count}
        <button onClick={() => {
            props.handlePlus()
        }}>+</button>
    </div>
  )
}


const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
}

const mapDispatchToProps = (dispatch) => ({
    handlePlus(e) {
        dispatch({ type: "ADD_COUNT"})
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest)