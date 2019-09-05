<template>
  <div class="home">
    <page-title titleValue="default" />
    <h2 class="subheader">Bienvenue sur Dissidia France</h2>
<!--     <div class="intro">
      <p>Dissidia France fait peau neuve pour vous apporter toutes les informations sur Dissidia Final Fantasy NT, Arcade et prochainement Opera Omnia !</p>
      <p>N'hésitez surtout pas à également nous suivre sur les différents réseaux sociaux, plateformes de streaming et de discussions.<br>
      Le forum est également ouvert à tous pour discuter de ce dont vous avez envie !</p>
      <p>Avec plaisir,<br>Falen Nadleeh</p>
    </div> -->
    <div class="main">
      <div class="actu">
        <h2 class="subheader dark left" v-show="false">A La Une</h2>
        <div class="une" v-if="false"></div>
        <h2 class="subheader dark left">Actualités</h2>
        <div class="news">
          <a class="news-timeline" v-show="isLoading" key="loading">Loading...</a>
          <!-- <transition-group v-if="!isLoading" name="fade" mode="out-in"> -->
            <div v-for="item in currentList" :key="item.slug" class="article">
              <h3><router-link class="titleLink" :to="{ name: 'article', params: { slug: item.slug }}">{{ item.title }}</router-link></h3>
              <router-link class="titleLink" :to="{ name: 'article', params: { slug: item.slug }}">
                <div class="articlePicture" :style="{ backgroundImage: 'url(' + item.picture + ')'}"></div>
                <div class="articleDescription">
                  {{ item.summary }}
                  <span class="articleMeta">par {{ item.author }}, {{ item.date | date }}</span>
                </div>
              </router-link>
            </div>
            <div v-if="count < list.length">
              <span class="more" @click="incrementCount()">Afficher les 5 précédents articles</span>
            </div>
          <!-- </transition-group> -->
        </div>
      </div>
      <div class="sidebar">
        <h2 class="subheader dark">Twitter</h2>
        <div class="twitter">
          <a class="twitter-timeline" data-lang="fr" data-height="925" data-dnt="true" data-theme="dark" data-link-color="#f96a6a" data-chrome="nofooter,noscrollbar" href="https://twitter.com/dissidia_france?ref_src=twsrc%5Etfw">Loading...</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from './shared/PageTitle'
import api from '../api/'
import moment from 'moment'

export default {
  name: 'home',
  data () {
    return {
      list: [],
      isLoading: false,
      count: 5
    }
  },
  computed: {
    currentList: function () {
      return this.list.slice(0, this.count)
    }
  },
  created () {
    this.loadList()
  },
  mounted () {
    (function (d, script) {
      script = d.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.onload = function () {
          // remote script has loaded
      }
      script.src = 'https://platform.twitter.com/widgets.js'
      d.getElementsByTagName('head')[0].appendChild(script)
    }(document))
  },
  methods: {
    loadList: function () {
      this.isLoading = true
      api.getList().then(list => {
        this.list = list.reverse()
        this.isLoading = false
      })
      .catch(err => {
        console.error(err)
        this.isLoading = false
      })
    },
    incrementCount: function () {
      this.count = this.count + 5
    }
  },
  filters: {
    date: function (updateDate) {
      let updateMoment = moment(updateDate, 'YYYY-MM-DDTHH:mm')
      let now = moment()
      return (now.diff(updateMoment, 'hours') < 24) ? updateMoment.locale('fr').fromNow() : 'le ' + updateMoment.locale('fr').format('ll')
    }
  },
  components: {
    PageTitle
  }
}
</script>

<style scoped>

div.intro {
  text-align: left;
  max-width: 900px;
  list-style: none;
  font-size: 1em;
  margin: 15px auto;
  padding: 15px 25px;
  border-radius: 3px;
  line-height: 1.3em;
  /*color: #212121;*/
  /*font-weight: bold;*/
  /*background-color: #bdbdbd;*/
  background-size: 80px;
  /*box-shadow: inset 0 0 10px #43517a;*/
  color: #ddd;
  background-color: rgba(39, 49, 83, 0.8);
  filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.5));
}

.intro p:first-child {
  font-size: 1.2em;
  line-height: normal;
}

.intro p:last-child {
  margin-bottom: 0;
}

div.main {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
}

div.actu {
  max-width: 600px;
  margin: 0 auto;
}

div.une, div.news, div.twitter {
  margin: 0 auto;
  padding: 10px;
  border-radius: 3px;
  color: #ddd;
  background-color: rgba(39, 49, 83, 0.8);
  filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.5));
  font-size: 14px;
  position: relative;
  margin-bottom: 20px;
}

div.sidebar {
  max-width: 300px;
  margin: 0 auto;
  margin-left: 20px;
}

div.twitter {
  padding: 0;
  max-height: 924px;
  overflow: hidden;
}

a.twitter-timeline {
  font-size: 20px;
  color: #cfcfcf;
  font-family: 'DissidiaFont', sans-serif;
  text-decoration: none;
  margin: 0 auto;
  padding: 15px;
  padding-top: 10px;
  width: 300px;
  display: block;
}

a.news-timeline {
  font-size: 20px;
  color: #cfcfcf;
  font-family: 'DissidiaFont', sans-serif;
  text-decoration: none;
  margin: 0 auto;
  padding: 15px;
  padding-top: 10px;
  display: block;
  min-width: 600px;
}

div.article {
  margin-bottom: 20px;
  text-align: left;
  padding: 0 10px;
  font-size: 0;
  line-height: 0;
  filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.5));
}

div.article:last-child {
  margin-bottom: 10px;
}

.actu h2 {
  margin-left: 10px;
}

span.more {
  user-select: none;
  cursor: pointer;
  font-variant: small-caps;
  text-transform: lowercase;
  font-size: 12px;
}

h2 {
  padding-bottom: 10px;
}

h3 {
  font-size: initial;
  line-height: normal;
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
  padding: 0;
  font-family: 'DissidiaFont', Verdana, sans-serif;
  font-weight: normal;
}

h3 a {
  text-decoration: none;
  color: inherit;
}

div.articlePicture {
  width: 200px;
  height: 130px;
  background-repeat: no-repeat;
  background-position: top right;
  display: inline-block;
}

div.articleDescription {
  font-size: 14px;
  line-height: normal;
  width: calc(100% - 230px);
  vertical-align: top;
  height: 120px;
  display: inline-block;
  color: #212121;
  background-color: #acacac;
  font-family: 'Open Sans', sans-serif;
  border-left: 4px solid #292F33;
  border-right: 2px solid #292F33;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

span.articleMeta {
  position: absolute;
  background-color: #292F33;
  color: #acacac;
  width: calc(100% - 10px);
  bottom: 0px;
  right: 0px;
  padding: 2.5px 5px;
  font-size: 12px;
  text-align: right;
}

@media screen and (max-width: 900px) {

  div.intro, div.main{
    margin: 25px;
  }

  div.main {
    display: block;
  }

  a.news-timeline {
    min-width: auto;
  }

  div.actu {
    max-width: 800px;
  }

  div.sidebar {
    margin: 0 auto;
    max-width: 800px;
  }

  div.twitter {
    width: 100%;
  }
}

</style>