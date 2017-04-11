import React, {PropTypes} from 'react'

const PostCom = ({body}) => (
  <div>{body}</div>
)

PostCom.propTypes = {
  body: PropTypes.string.isRequired
}

export default PostCom
