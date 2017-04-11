import {combineReducers} from 'redux'

import subreddits from './subreddits'
import comments from './comments'

export default combineReducers({
  subreddits,
  comments
})
