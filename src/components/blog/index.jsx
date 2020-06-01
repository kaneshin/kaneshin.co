import React from 'react'
import ReactDOM from 'react-dom'

let data = [
  {
    year: 2020,
    posts: [
      {
        title: 'Hello world',
        link: '/blog/2020-05-24-hello-world',
      },
    ]
  },
  {
    year: 2016,
    posts: [
      {
        title: 'Pigeon - Library for Cloud Vision API',
        link: '/blog/2016-02-27-pigeon',
      },
      {
        title: 'Make a slice from a type',
        link: '/blog/2016-01-01-make-slice',
      },
    ]
  },
  {
    year: 2015,
    posts: [
      {
        title: 'Go Conference 2015 Summer',
        link: '/blog/2015-06-21-gocon-2015-summer',
      },
      //  'Mathematics for Programmers #3': '/blog/2015-05-22-math-for-prog',
      //  '8 bit sounds': '/blog/2015-05-05-8bit-sounds',
      //  'Push to master': '/blog/2015-03-23-pre-push',
      {
        title: 'Geometry',
        link: '/blog/2015-03-23-geometry',
      },
    ]
  },
]

class Posts extends React.Component {
  render() {
    const posts = this.props.data.map(list =>
      <div key={list.year} className="mb-4">
        <h3 className="font-display text-2xl">{list.year}</h3>
        <ul className="pl-6 list-disc">
          {list.posts.map(post => <PostItem key={post.link} post={post} />)}
        </ul>
      </div>
    )
    return (
      <div>
        {posts}
      </div>
    )
  }
}

class PostItem extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.post.link}>{this.props.post.title}</a>
      </li>
    )
  }
}

const dom = document.querySelector('#blog-posts')
if (dom) {
  ReactDOM.render(<Posts data={data} />, dom)
}
