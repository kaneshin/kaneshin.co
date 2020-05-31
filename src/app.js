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

