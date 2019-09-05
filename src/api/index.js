import axios from 'axios'
import 'es6-promise/auto'

function getListUrl () {
  let url = `/static/posts/index.json`
  return url
}

function getPostUrl (slug) {
  return `/static/posts/${slug}.md`
}

export default {
  getList: function () {
    const httpOpts = {
      headers: { Accept: 'application/json' }
    }
    return axios.get(getListUrl(), httpOpts)
      .then(res => res.data.articles)
      .then(arr => {
        return arr
      })
  },

  getDetail: function (slug) {
    const httpOpts = {
      headers: { Accept: 'text/plain' }
    }

    return axios.get(getPostUrl(slug), httpOpts)
      .then(res => res.data)
      .then(content => {
        return content
      })
  }
}
