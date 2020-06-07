import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class Posts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    axios.get(`/1.0/posts`)
      .then(res => {
        const posts = res.data.items.map(item => {
          item.date = new Date(item.date_published)
          return item
        })
        this.setState({ posts })
      })
  }

  render() {
    let posts = this.state.posts.map(post =>
      <li key={post.id} id={post.date.getTime()} className="post">
         <div className="mb-4 rounded border border-gray-200">
          <a href={'#' + post.date.getTime()} className="permalink px-2 py-1 rounded-tl rounded-br bg-gray-200 text-sm">{post.date.toLocaleString()}</a>
          <div className="my-4 px-4" dangerouslySetInnerHTML={{__html: post.content_html}}></div>
         </div>
      </li>
    )
    return (
      <ul className="micro">
        {posts}
      </ul>
    )
  }
}

const dom = document.querySelector('#micro-posts')
if (dom) {
  ReactDOM.render(<Posts />, dom)
}
