<template>
  <nav>
    <ul>
      <li :class="isActive('home') ? 'active' : false"><router-link :to="{ name: 'home' }"><icon name="home" scale="1.5"></icon></router-link></li>
      <li :class="isActive('characters') ? 'active' : false"><router-link :to="{ name: 'characters' }">Personnages</router-link></li>
      <li :class="isActive('summons') ? 'active' : false"><router-link :to="{ name: 'summons' }">Invocations</router-link></li>
      <li :class="isActive('stages') ? 'active' : false"><router-link :to="{ name: 'stages' }">Arènes</router-link></li>
      <li v-if="false" :class="isActive('gameplay') ? 'active' : false"><router-link :to="{ name: 'gameplay' }">Système</router-link></li>
      <li :class="isActive('faq') ? 'active' : false"><router-link class="faq" :to="{ name: 'faq' }"><icon name="question-circle" scale="1.5"></icon><span>FAQ</span></router-link></li>
      <li><a class="forum" href="http://dissidia-france.com/forum/" target="_blank"><icon name="comments" scale="1.5"></icon><span>Forum</span></a></li>
      <li><a href="https://www.facebook.com/dissidiafrance/" target="_blank"><icon name="facebook" scale="1.5"></icon></a></li>
      <li><a href="https://twitter.com/dissidia_france" target="_blank"><icon name="twitter" scale="1.5"></icon></a></li>
      <li><a href="https://discord.gg/9TBvpr2" target="_blank"><svg id="Layer_1" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240"><path class="st0" d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"/><path class="st0" d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"/></svg></a></li>
    </ul>
  </nav>
</template>

<script>
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'navbar',
  methods: {
    isActive: function (route) {
      if (this.$route.name === route) {
        return true
      }
    }
  },
  components: {
    Icon
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

nav {
  background-color: rgba(67, 81, 122, 1);
  background-image: url('../assets/line2.png');
  background-repeat: repeat-x;
  background-position: center 25px;
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  padding-bottom: 45px;
  margin: 0 auto;
  font-size: 12px;
  z-index: 9;
  overflow-y: visible;
}

ul {
  list-style-type: none;
  display: table;
  margin: 0 auto;
  padding: 0;
}

li {
  margin:0 auto;
  padding: 0;
  height: calc(100% - 20px);
  vertical-align: middle;
  display: table-cell;
}

li:hover {
  background-color: #cfcfcf;
}

.active {
  background-color: #273153;
}

a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.25em;
  padding: 10px;
  line-height: 1.65em;
  display: block;
  margin: 0 auto;
}

.st0 {
  fill: #ffffff;
}

li:hover a {
  color: #212121;
  font-weight: bold;
}

li:hover .st0 {
  fill: #212121;
}

li a {
  min-width: 25px;
}

svg {
  vertical-align: top;
}

li a.forum svg, li a.faq svg {
  display: none;
}

input {
  background-color: rgba(0,0,0,0.15);
  width: 100px;
  height: calc(100% - 2px);
  font-size: 0.9em;
  text-align: center;
  color: rgba(255,255,255,0.85);
  line-height: 1.25em;
  border-style: none;
  border-radius: 5px;
  display: inline-block;
}

input::placeholder {
  text-transform: uppercase;
  text-align: center;
  vertical-align: middle;
  color: rgba(255,255,255,0.85);
}

@media screen and (max-width: 650px) {
  li a.forum span, li a.faq span {
    display: none;
  }
  li a.forum svg, li a.faq svg {
    display: inline;
  }
}
</style>
