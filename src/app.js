import './assets/styles/style.scss'
import 'highlight.js/lib/core'
/*
import axios from 'axios'

window.onload = () => {
  axios.get('https://httpbin.org')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  console.log('loaded')
}
*/
import React from 'react'
import ReactDOM from 'react-dom'

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return e(
      'button',
      {
        onClick: () => {
          this.setState({ liked: !this.state.liked })
        }
      },
      this.state.liked ? 'Unlike' : 'Like'
    );
  }
}

const domContainer = document.querySelector('#react-container');
ReactDOM.render(e(LikeButton), domContainer);

document.addEventListener('keyup', (e) => {
  if (e.key !== 'Escape') {
    return
  }
})

document.addEventListener('keypress', (e) => {
  searchResourcesEvent(e)
})

var searchResourcesEvent = (e) => {
  const id = 'search-resources'
  let active = document.activeElement

  if (active.id === id) {
    return
  }

  if (e.key !== '/') {
    return
  }

  e.preventDefault()
  let opt = {
    preventScroll: false,
  }
  document.getElementById(id).focus(opt)
}

