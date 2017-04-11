import React, {PropTypes} from 'react'

const Post = ({title, author}) => (
  <div>{title} - {author}</div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Post
