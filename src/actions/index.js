import request from 'superagent'

export const receivePosts = (posts) => {
  return {
    type: 'RECEIVE_POSTS',
    posts: posts.map(post => post.data)
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    request
      .get(`http://www.reddit.com/r/${subreddit}.json`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receivePosts(res.body.data.children))
      })
  }
}

export const receiveComments = (comments) => {
  return {
    type: 'RECEIVE_COMMENTS',
    comments: comments.map(comments => comments.data)
  }
}

export function getComments (subreddit) {
  return (dispatch) => {
    request
      .get(`http://www.reddit.com/r/newzealand/comments.json`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveComments(res.body.data.children))
      })
  }
}
