import marked from 'marked'

let renderer = new marked.Renderer()
const linkRenderer = renderer.link
// renderer.heading = function (text, level) {
//   let id = generateId()
//   return `<h${level} id="${id}">${text}</h${level}>`
// }

renderer.image = function (href, title, text) {
  var bigImageHref = href.replace('small', 'big')

  return '<a class="thumb_' + text + '" target="_blank" href="' +
  bigImageHref +
  '"><img class="small" src="' + href + '"></a>'
}

renderer.link = (href, title, text) => {
  const html = linkRenderer.call(renderer, href, title, text)
  return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ')
}

renderer.paragraph = function (text) {
  if (text.includes('youtube-player')) {
    var videoLink = text.replace('(youtube-player)', '//www.youtube.com/embed/')
    return '<iframe src="' + videoLink + '" frameborder="0" allowfullscreen></iframe>'
  }
  if (!text.includes('thumb_') && text.includes('href')) {
    text = text.replace(/href/g, 'target="_blank" href')
    return '<p>' + text + '</p>'
  } else if (text.includes('thumb_')) {
    return '<p class="thumbs">' + text + '</p>'
  }
  return '<p>' + text + '</p>'
}

marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})

// function generateId (len) {
//   const chars = `ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz`
//   len = len | 8
//   let id = ``
//   for (let i = 0; i < len; i++) {
//     id += chars[Math.floor(Math.random() * chars.length)]
//   }
//   return id
// }

export default marked
