import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const e = React.createElement

class LikeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { liked: props.liked }
  }

  render() {
    return e(
      'div',
      null,
      e(
        'button',
        {
          className: 'font-semibold py-2 px-4 border border-blue-500 rounded ' +
            (this.state.liked ?
              'bg-blue-500 text-white border-transparent hover:bg-transparent hover:text-blue-700 hover:border-blue-500':
              'hover:bg-blue-500 hover:text-white hover:border-transparent bg-transparent text-blue-700 border-blue-500'),
          onClick: () => { this.setState({ liked: !this.state.liked }) },
        },
        this.state.liked ? 'Unlike' : 'Like'
      ),
    )
  }
}

class BannerAlert extends React.Component {
  render() {
    return e(
      'div',
      { className: 'bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3', role: 'alert' },
      e('p', { className: 'font-bold' }, 'Informational message'),
      e('p', { className: 'text-sm' }, this.props.message),
    )
  }
}

const containerDOM = document.querySelector('#playground-container')
if (containerDOM) {
  ReactDOM.render(e(LikeButton, {}), containerDOM)
}

const bannerAlertDOM = document.querySelector('#playground-banner-alert')
if (BannerAlert) {
  axios.get('/ping')
    .then(function (response) {
      // handle success
      ReactDOM.render(e(BannerAlert, { message: response.data }), bannerAlertDOM)
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
    .then(function () {
    })
}
