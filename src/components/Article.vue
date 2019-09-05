<template>
  <div class="post" id="post-markdown">
    <page-title :titleValue="article.title" />
    <h2 class="subheader">Actualités</h2>
    <div class="markdown-container">
      <!-- <h2 v-if="isLoading" class="subheader">Loading...</h2> -->
      <!-- <transition-group v-if="!isLoading" name="fade" mode="out-in"> -->
        <h2 :key="Math.random()" class="subheader">{{ article.title }}</h2>
        <p :key="Math.random()" class="post-date">publié par {{ article.author }}, {{ article.date | date }}</p>
        <p :key="Math.random()" v-if="article" v-html="content" class="markdown-content"></p>
        <div v-if="false" :key="Math.random()" class="tags">
          <span>Tags</span>
          <span class="tag-code" v-for="tag in article.tags" :key="Math.random()">{{ tag }} </span>
        </div>
        <social-sharing :key="Math.random()" :url="shareUrl" inline-template>
          <div class="social">
            <network class="facebook" network="facebook">
              <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="29" height="29" viewBox="0 0 29 29"> <path fill="#cfcfcf" d="M26.4 0H2.6C1.714 0 0 1.715 0 2.6v23.8c0 .884 1.715 2.6 2.6 2.6h12.393V17.988h-3.996v-3.98h3.997v-3.062c0-3.746 2.835-5.97 6.177-5.97 1.6 0 2.444.173 2.845.226v3.792H21.18c-1.817 0-2.156.9-2.156 2.168v2.847h5.045l-.66 3.978h-4.386V29H26.4c.884 0 2.6-1.716 2.6-2.6V2.6c0-.885-1.716-2.6-2.6-2.6z" class="cls-2" fill-rule="evenodd"></path> </svg>
              <span>Facebook</span>
            </network>
            <network class="twitter" network="twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"> <path fill="#cfcfcf" d="M24.253 8.756C24.69 17.08 18.297 24.182 9.97 24.62c-3.122.162-6.22-.646-8.86-2.32 2.702.18 5.375-.648 7.507-2.32-2.072-.248-3.818-1.662-4.49-3.64.802.13 1.62.077 2.4-.154-2.482-.466-4.312-2.586-4.412-5.11.688.276 1.426.408 2.168.387-2.135-1.65-2.73-4.62-1.394-6.965C5.574 7.816 9.54 9.84 13.802 10.07c-.842-2.738.694-5.64 3.434-6.48 2.018-.624 4.212.043 5.546 1.682 1.186-.213 2.318-.662 3.33-1.317-.386 1.256-1.248 2.312-2.4 2.942 1.048-.106 2.07-.394 3.02-.85-.458 1.182-1.343 2.15-2.48 2.71z"></path> </svg>
              <span>Twitter</span>
            </network>
          </div>
        </social-sharing>
        <div :key="Math.random()" class="comments">
          <vue-disqus shortname="dissidia-france" :identifier="article.slug" :url="shareUrl"></vue-disqus>
        </div>
      <!-- </transition-group> -->
    </div>
  </div>
</template>

<script>
import api from '../api/'
import axios from 'axios'
import moment from 'moment'
import marked from './filters/marked'
import PageTitle from './shared/PageTitle'
import VueDisqus from 'vue-disqus/VueDisqus.vue'

export default {
  name: 'post',
  data () {
    return {
      article: {},
      content: '',
      isLoading: false
    }
  },
  components: {
    PageTitle,
    VueDisqus
  },
  computed: {
    shareUrl: function () {
      return window.location.href
    }
  },
  created () {
    let slug = this.$route.params.slug
    this.isLoading = true
    axios.all([this.loadDetail(slug), this.loadInfo(slug)]).then(axios.spread(function (acct, perms) {
    }))
  },
  methods: {
    loadDetail: function (linkSlug) {
      api.getList().then(list => {
        api.getDetail(linkSlug).then(details => {
          this.content = marked(details)
          this.isLoading = false
        })
      })
      .catch(err => {
        console.error(err)
      })
    },
    loadInfo: function (linkSlug) {
      api.getList().then(index => {
        var result = index.filter(({ slug }) => {
          return slug === linkSlug
        })[0]
        if (result) {
          this.article = result
        }
      })
      .catch(err => {
        console.error(err)
      })
    }
  },
  filters: {
    date: function (updateDate) {
      let updateMoment = moment(updateDate, 'YYYY-MM-DDTHH:mm')
      let now = moment()
      return (now.diff(updateMoment, 'hours') < 24) ? updateMoment.locale('fr').fromNow() : 'le ' + updateMoment.locale('fr').format('ll')
    }
  }
}
</script>

<style>
.markdown-container h2 {
  padding-bottom: 5px;
}

#post-markdown a {
  color: #f96a6a;
  font-weight: 600;
  word-break: break-all;
}
#post-markdown h1 {
  margin: .6em 0;
  font-size: 1.8em;
}
#post-markdown .post-date {
  color: #ababab;
  font-size: .9em;
  font-style: italic;
  filter: drop-shadow(0px 2px 1px rgba(0,0,0,0.5));
}
.markdown-container, .comments {
  overflow: auto;
  -webkit-font-smoothing: antialiased;
  max-width: 800px;
  list-style: none;
  text-align: left;
  font-size: 1em;
  margin: 15px auto;
  font-family: 'Open Sans', Verdana, sans-serif;
  padding: 15px 25px;
  border-radius: 5px;
  line-height: 1.3em;
  /*color: #212121;*/
  /*font-weight: bold;*/
  /*background-color: #bdbdbd;*/
  background-size: 80px;
  /*box-shadow: inset 0 0 10px #43517a;*/
  color: #ddd;
  background-color: rgba(39, 49, 83, 0.9);
  filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.5));
}

.markdown-content {
  margin-bottom: 50px;
}

.markdown-content h2 {
  display: none;
}
.markdown-content p {
  line-height: 1.6em;
  text-align: left;
}
.markdown-content p.thumbs {
  text-align: center;
  margin: 20px auto;
  margin-bottom: 10px;
}
.markdown-content h3 {
  margin: 1em 0 .8em;
  font-size: 1.3em;
  padding-bottom: .3em;
  border-bottom: 1px solid #ddd;
}
.markdown-content h4 {
  margin: 1em 0 .8em;
  font-size: 1.2em;
}
.markdown-content h4:before {
  content: "#";
  color: #f96a6a;
  margin-right: 5px;
  font-size: 1.2em;
  font-weight: 700;
}
.markdown-content blockquote {
  margin: 1em 0;
  padding:  15px 20px;
  border-left: 4px solid #f96a6a;
  background: #f8f8f8;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
}
.markdown-content ul {
  overflow: auto;
  margin: 20px 0;
}
.markdown-content ul li {
  padding: 5px 0;
}
.markdown-content pre {
  background: #f8f8f8;
  padding: 15px;
  border-radius: 2px;
  font-size: 13px;
  position: relative;
}
.markdown-content .small {
  width: 100%;
}
.markdown-content a.thumb_1, .markdown-content a.thumb_2, .markdown-content a.thumb_3 {
  display: inline-block;
  max-width: calc(33% - 5px);
}
.markdown-content a.thumb_duo1, .markdown-content a.thumb_duo2 {
  display: inline-block;
  max-width: calc(45% - 5px);
}
.markdown-content a.thumb_single {
  display: inline-block;
  max-width: 70%;
}
.markdown-content code:after {
  content: attr(class);
  position: absolute;
  top: 0;
  right: 0;
  color: #ccc;
  text-align: right;
  font-size: 0.8em;
  padding: 5px 10px 0;
  line-height: 15px;
  height: 15px;
}
.markdown-content iframe {
  width: 500px;
  height: 280px;
  display: block;
  margin: 20px auto;
}
.tags > span:first-child {
  font-family: 'DissidiaFont', sans-serif;
  text-transform: uppercase;
  margin-right: 10px;
  font-weight: 600;
  cursor: default;
  font-weight: normal;
  vertical-align: middle;
  filter: drop-shadow(0px 2px 1px rgba(0,0,0,0.5));
}
span.tag-code {
  text-transform: uppercase;
  font-family: 'Open Sans', Verdana, sans-serif;
  margin: 5px;
  border-radius: 5px;
  line-height: 1.1em;
  font-size: 14px;
  vertical-align: middle;
  /*color: #212121;*/
  /*font-weight: bold;*/
  /*background-color: #bdbdbd;*/
  /*box-shadow: inset 0 0 10px #43517a;*/
  color: #ddd;
  cursor: default;
  filter: drop-shadow(0px 2px 1px rgba(0,0,0,0.5));
}

.tags {
  margin-bottom: 30px;
}

.social {
  text-align: right;
}

.social svg {
  width: 18px;
  vertical-align: middle;
  display: inline-block;
  margin-right: 5px;
}

.social span span {
  vertical-align: middle;
}

.social>span {
  font-family: 'Open Sans', Verdana, sans-serif;
  margin: 5px;
  border-radius: 3px;
  line-height: 1.1em;
  font-size: 12px;
  padding: 10px;
  padding-top: 7px;
  vertical-align: middle;
  /*color: #212121;*/
  /*font-weight: bold;*/
  /*background-color: #bdbdbd;*/
  /*box-shadow: inset 0 0 10px #43517a;*/
  color: #ddd;
  cursor: pointer;
}

.facebook {
  background-color: #306199;
}

.twitter {
  background-color: #1b95e0;
}

.comments {
  background-color: transparent;
  border-radius: 3px;
}

@media screen and (max-width: 900px) {

  div.markdown-container {
    margin: 25px;
  }
}
</style>