import React from 'react'

import LoadSubreddit from './LoadSubreddit'
import SubredditContainer from '../containers/SubredditContainer'
import LoadComments from './LoadComments'

const App = () => (
  <div className='app-container'>
    <LoadSubreddit />
    <SubredditContainer />
    <LoadComments />
  </div>
)

export default App
