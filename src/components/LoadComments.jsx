import React from 'react'
import {connect} from 'react-redux'
import {getComments} from '../actions'

let LoadComments = ({dispatch}) => (
  <button
    onClick={() => dispatch(getComments())}>
    comments
  </button>
)

LoadComments = connect()(LoadComments)

export default LoadComments
