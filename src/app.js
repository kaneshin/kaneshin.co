import 'highlight.js/lib/core'
import './assets/styles/style.scss'
import './components/blog'
import './components/micro'
import './components/playground'

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

