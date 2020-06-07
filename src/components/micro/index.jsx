import React from 'react'
import ReactDOM from 'react-dom'
import FadeIn from 'react-fade-in'
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
    const posts = this.state.posts.map(post =>
      <li key={post.id} id={post.date.getTime()} className="post">
         <div className="mb-4 rounded border-l border-b border-gray-200">
          <a href={ '#' + post.date.getTime() } className="permalink px-2 py-1 rounded-r-lg bg-gray-200 text-sm">{ post.date.toLocaleString() }</a>
          <div className="my-4 px-4" dangerouslySetInnerHTML={{__html: post.content_html}}></div>
         </div>
      </li>
    )
    if (this.state.posts.length === 0) {
      return (
        <div className="pt-8 text-gray-800">
          <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle className="path" fill="none" stroke-width="4" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
          </svg>
        </div>
      )
    }
    return (
      <FadeIn transitionDuration="700">
        <ul className="micro">
          {posts}
        </ul>
      </FadeIn>
    )
  }
}

const dom = document.querySelector('#micro-posts')
if (dom) {
  ReactDOM.render(<Posts />, dom)
}
