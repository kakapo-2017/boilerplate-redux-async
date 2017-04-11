import React from 'react'

import LoadSubreddit from './LoadSubreddit'
import SubredditContainer from '../containers/SubredditContainer'
import LoadComments from './LoadComments'
import CommentsContainer from '../containers/CommentsContainer'

const App = () => (
  <div className='app-container'>
    <LoadSubreddit />
    <SubredditContainer />
    <LoadComments />
    <CommentsContainer />
  </div>
)

export default App
