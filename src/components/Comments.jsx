import React, {PropTypes} from 'react'

import PostCom from './PostCom'

const Comments = ({comments}) => (
  <div>
    {comments.map((comment, i) =>
      <PostCom
        key={i}
        body={comment.body}
      />
    )}
  </div>
)

Comments.propTypes = {
  comments: PropTypes.array.isRequired
}

export default Comments
