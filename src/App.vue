<template>
  <div id="app">
    <header>
      <img @click="$router.push({ name: 'home' })" class="logo" src="./assets/logo.png">
    </header>
    <transition name="mogfade">
      <a @click="scrollUp()" title="Retour au début" v-show="summonMog" class="mog"></a>
    </transition>
    <div id="main">
      <navbar></navbar>
        <div class="wrapper">
          <transition name="fade" mode="out-in" appear>
            <router-view></router-view>
          </transition>
      </div>
    </div>
    <footer>
      <div>La majeure partie des contenus audio et visuels sont la propriété de KOEI TECMO GAMES/SQUARE ENIX CO., LTD. Tous droits réservés.</div>
      <div>Copyright © 2007-2018 Dissidia-France.com - Site réalisé par <a href="https://twitter.com/falen_nadleeh" target="_new">@falen_nadleeh</a> et <a href="https://twitter.com/rem_eryna" target="_new">@rem_eryna</a>.</div>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'app',
  data () {
    return {
      summonMog: false
    }
  },
  methods: {
    scrollUp: function () {
      document.querySelector('header').scrollIntoView({
        behavior: 'smooth'
      })
    },
    handleScroll: function () {
      this.summonMog = window.scrollY > 600
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
    '$route.name': function () {
      if (this.$route.name !== 'characters') {
        let className = 'modal-open'
        document.body.classList.remove(className)
      }
    }
  },
  components: {
    Navbar
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Open+Sans');

@font-face {
  font-family: 'DissidiaFont';
  src: url('./assets/fonts/dff.woff2') format('woff2');
}

html {
  -webkit-text-size-adjust: none;
}

body {
  height:100%;
  background-color: #0b0b0b;
  color: #cfd8dc;
  background-image: url('./assets/bg.jpg');
  background-repeat: repeat-y;
  background-position: top center;
  min-width: 600px;
  margin: 0;
  overflow-y: scroll;
}

::-webkit-scrollbar {
/*    width: 0px;
    background: transparent;*/
}

#app {
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-image: url('./assets/bg_ff1.png');
  background-repeat: no-repeat;
  background-position: center -50px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

header {
  margin: 0 auto;
  background-image: url('./assets/line.png');
  background-position: bottom;
  background-repeat: repeat-x;
}

header img {
  margin: 15px auto;
  max-width: 90%;
  cursor: pointer;
}

#main {
  background-image: url('./assets/section_bg.png');
  background-position: top center;
  /*background-repeat: repeat-y;*/
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-blend-mode: overlay;
  margin: 0 auto;
}

#main>div {
background: -moz-linear-gradient(top, rgba(67,81,122,1) 0%, rgba(255,255,255,0) 600px, rgba(67,81,122,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, rgba(67,81,122,1) 0%,rgba(255,255,255,0) 600px,rgba(67,81,122,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, rgba(67,81,122,1) 0%,rgba(255,255,255,0) 600px,rgba(67,81,122,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#43517a', endColorstr='#43517a',GradientType=0 ); /* IE6-9 */
  margin: 0 auto;
  position: relative;
  padding-bottom: 50px;
/*  height: 100vh;*/
  transition-delay: .5s background;
  margin-top: -5px;
  min-height: 100vh;
}

h2.subheader {
  width: 100%;
  margin: 0;
  font-size: 20px;
  padding: 15px 0;
  padding-top: 0;
  font-family: 'DissidiaFont';
  -webkit-font-smoothing: antialiased;
  cursor: default;
  filter: drop-shadow(0px 2px 1px rgba(0,0,0,0.5));
}

h2.dark {
  color: #212121;
  filter: drop-shadow(0px 2px 1px rgba(39, 49, 83, 0.5));
}

.left {
  text-align: left;
}

p {
  margin: 0;
  margin-bottom: 15px;
}

footer {
  background-image: url('./assets/line.png');
  background-repeat: repeat-x;
  font-size: 0.75em;
  padding: 5px 15px;
  padding-top: 15px;
  margin: 0 auto;
  min-height: 30px;
  text-align: center;
}

footer a {
  color: #bdbdbd;
  text-decoration: none;
}

footer a:hover {
  color: #cfd8dc;
}

.modal-open {
  overflow: hidden;
}

a.mog {
  width: 64px;
  height: 64px;
  position: fixed;
  display: block;
  right: 20px;
  bottom: 20px;
  background-image: url('./assets/up.png');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  transition-delay: .5s all;
  z-index: 20;
}
.mogfade-enter-active, .mogfade-leave-active {
  transition: opacity .5s;
}
.mogfade-enter, .mogfade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
