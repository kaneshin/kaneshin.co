import './assets/scss/style.scss'
import 'highlight.js/lib/core'

document.addEventListener('keyup', function(e) {
  if (e.key !== 'Escape') {
    return
  }
})

document.addEventListener('keypress', function(e) {
  searchResourcesEvent(e)
})

function searchResourcesEvent(e) {
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

