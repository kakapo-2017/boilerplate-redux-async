import React, {PropTypes} from 'react'

import Post from './Post'

const Subreddit = ({subreddits}) => (
  <div>
    <h1>
    {subreddits.map((post, i) =>
      <Post
        key={i}
        title={post.title}
        author={post.author}
        />
    )}
    
    </h1>
  </div>
)

Subreddit.propTypes = {
  subreddits: PropTypes.array.isRequired
}

export default Subreddit
