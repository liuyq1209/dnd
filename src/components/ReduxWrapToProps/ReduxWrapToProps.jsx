import React from "react"
import {connect} from "react-redux"

function ReduxWrapToProps({Component, actions}) {
  function mapStateToProps(state) {
    return state
  }
  function mapDispatchToProps(dispatch) {
    const res = {}
    Object.entries(actions).forEach(([name, func]) => {
      res[name] = payload => dispatch(func(payload))
    })
    return res
  }
  return connect(mapStateToProps, mapDispatchToProps)(Component)
}

export default ReduxWrapToProps
