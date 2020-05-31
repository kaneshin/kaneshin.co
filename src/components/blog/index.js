import React from 'react'
import ReactDOM from 'react-dom'

let posts = [
  {
    year: 2020,
    data: [
      {
        title: 'Hello world',
        link: '2020-05-24-hello-world',
      },
    ]
  },
  {
    year: 2016,
    data: [
      {
        title: 'Pigeon - Library for Cloud Vision API',
        link: '2016-02-27-pigeon',
      },
      {
        title: 'Make a slice from a type',
        link: '2016-01-01-make-slice',
      },
    ]
  },
  {
    year: 2015,
    data: [
      {
        title: 'Go Conference 2015 Summer',
        link: '2015-06-21-gocon-2015-summer',
      },
      //  'Mathematics for Programmers #3': '2015-05-22-math-for-prog',
      //  '8 bit sounds': '2015-05-05-8bit-sounds',
      //  'Push to master': '2015-03-23-pre-push',
      {
        title: 'Geometry',
        link: '2015-03-23-geometry',
      },
    ]
  },
]

const e = React.createElement

class Posts extends React.Component {
  render() {
    return e(
      'div', null,
      ...this.props.posts.map(list => {
        return e('div', { className: 'mb-4' }, e(PostsByYear, list))
      })
    )
  }
}

class PostsByYear extends React.Component {
  render() {
    return e(
      'div', null,
      e('h3', { className: 'font-display text-2xl' }, this.props.year),
      e('ul', { className: 'pl-6 list-disc' }, ...this.props.data.map(post => {
        return e(PostLink, post)
      }))
    )
  }
}

class PostLink extends React.Component {
  render() {
    return e(
      'li', null,
      e('a', { href: '/blog/'+this.props.link }, this.props.title)
    )
  }
}

const dom = document.querySelector('#blog-posts')
if (dom) {
  ReactDOM.render(React.createElement(Posts, { posts }), dom)
}
