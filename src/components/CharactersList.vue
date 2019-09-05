<template>
  <div class="character-list">
    <page-title titleValue="Personnages" />
    <h2 class="subheader">Selectionnez un personnage</h2>
    <div class="crystals">
      <template v-for="(line, index) in charactersOrder">
        <ul :class="'line_' + index">
          <template v-for="(character, characterIndex) in line">
            <li v-if="character" :class="(character === 'inconnu' || !charactersData[character].released) ? 'unreleased' : false">
              <div :class="(windowWidth > 1000) ? animationsByOrder[index][characterIndex] : false" @click="(character !== 'inconnu' && charactersData[character].released) ? selectCharacter(character) : false" 
              :style="{ backgroundImage: 'url(' + buildCrystal(character) + ')'}"></div>
            </li>
            <li v-else>
              <div class="dummy"></div>
            </li>
          </template>
        </ul>
      </template>
    </div>
    <character-viewer v-if="showCharacterView" @close="closeCharacterView" :characters="charactersData" :selected="selectedCharacter"></character-viewer>
  </div>
</template>

<script>
import PageTitle from './shared/PageTitle'
import CharacterViewer from './CharacterViewer'

export default {
  name: 'character-list',
  data () {
    return {
      charactersOrder: [],
      charactersData: {},
      selectedCharacter: null,
      animationsByOrder: [],
      showCharacterView: false,
      windowWidth: 0
    }
  },
  methods: {
    setCharactersListData: function () {
      if (require('../db/list.json') !== undefined) {
        this.charactersData = require('../db/list.json')
      }
      if (require('../db/order.json') !== undefined) {
        this.charactersOrder = require('../db/order.json')
      }
    },
    selectCharacter: function (character) {
      this.showCharacterView = true
      this.selectedCharacter = character
    },
    buildCrystal: function (character) {
      return require('../assets/crystals/' + character + '.png')
    },
    randomAnim: function () {
      let animations = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
      // change to map function to make an array with the character ordre array
      let charactersAnimations = this.charactersOrder.map(function (line) {
        let charactersLine = line.map(function (char) {
          return 'chara_' + animations[Math.floor(Math.random() * animations.length)]
        })
        return charactersLine
      })
      return charactersAnimations
    },
    closeCharacterView: function (e) {
      if (e === 'chara-wrapper' || e === 'close-button') {
        this.showCharacterView = false
      } else {
        this.showCharacterView = true
      }
    },
    closeCharacterViewOnEscape: function (e) {
      if (e.keyCode === 27 && this.showCharacterView) {
        this.showCharacterView = false
      }
    },
    closeCharacterViewOnBackKey: function (e) {
      if (this.showCharacterView) {
        this.showCharacterView = false
      }
    },
    onResize: function (e) {
      this.windowWidth = window.screen.width
    }
  },
  created () {
    this.setCharactersListData()
    this.animationsByOrder = this.randomAnim()
    window.addEventListener('resize', this.onResize)
    document.addEventListener('keyup', this.closeCharacterViewOnEscape)
    window.addEventListener('popstate', this.closeCharacterViewOnBackKey)
    window.addEventListener('hashchange', this.closeCharacterViewOnStateChange)
    if (this.$route.params.slug && Object.keys(this.charactersData).includes(this.$route.params.slug)) {
      this.showCharacterView = true
      this.selectedCharacter = this.$route.params.slug
    }
  },
  mounted () {
    this.windowWidth = window.screen.width
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
    document.removeEventListener('keyup', this.closeCharacterViewOnEscape)
    window.removeEventListener('popstate', this.closeCharacterViewOnStateChange)
    window.removeEventListener('hashchange', this.closeCharacterViewOnStateChange)
  },
  watch: {
    showCharacterView: function () {
      let className = 'modal-open'
      if (this.showCharacterView === true) {
        document.body.classList.add(className)
      } else {
        document.body.classList.remove(className)
      }
    },
    windowWidth: function () {
      this.animationsByOrder = this.randomAnim()
    },
    '$route.params.slug': function () {
      if (this.$route.params.slug && Object.keys(this.charactersData).includes(this.$route.params.slug)) {
        this.showCharacterView = true
        this.selectedCharacter = this.$route.params.slug
      }
    }
  },
  components: {
    CharacterViewer,
    PageTitle
  }
}
</script>

<style scoped>
div.crystals {
  width: 100%;
/*  min-width: 1000px;*/
  display: inline-block;
  margin: 0 auto;
  margin-top: 25px;
  padding: 0;
}
div.crystals ul {
  padding: 0;
}
div.crystals li {
  list-style: none;
  display: inline-block;
  padding: 0 10px;
}
div.crystals li div {
  margin: 0;
  padding: 0;
  width: 113px;
  height: 236px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  display: inline-block;
  cursor: pointer;
  transition: .5s width, .5s height;
  filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.5));
  transform: translate3d(0,0,0);
}
div.crystals li.unreleased div {
  cursor: not-allowed;
}
div.crystals li div.dummy {
  cursor: default;
}
div.crystals li div:hover {
  background-position: -113px 0px;
}
ul.line_0, ul.line_2, ul.line_4 {
  margin-left: 66.5px;
}
ul.line_1, ul.line_3 {
  margin-right: 66.5px;
}
ul.line_1, ul.line_2, ul.line_3, ul.line_4 {
  margin-top: -29px;
}

.chara_0 {
  text-align:center;
  float:left;
  padding-top:0px;
  position: relative;
    -webkit-animation-name: anim_0; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    -webkit-animation-iteration-count: infinite; /* Safari 4.0 - 8.0 */
    -webkit-animation-direction: normal; /* Safari 4.0 - 8.0 *
  -webkit-animation-timing-function: linear; /* Safari 4.0 - 8.0 *//
    animation-name: anim_0;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: normal; 
  animation-timing-function: linear;
}
.chara_2 {
  text-align:center;
  float:left;
  padding-top:2px;
  position: relative;
    -webkit-animation-name: anim_2; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    -webkit-animation-iteration-count: infinite; /* Safari 4.0 - 8.0 */
    -webkit-animation-direction: normal; /* Safari 4.0 - 8.0 *
  -webkit-animation-timing-function: linear; /* Safari 4.0 - 8.0 *//
    animation-name: anim_2;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: normal; 
  animation-timing-function: linear;
}
.chara_4 {
  text-align:center;
  float:left;
  padding-top:4px;
  position: relative;
    -webkit-animation-name: anim_4; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    -webkit-animation-iteration-count: infinite; /* Safari 4.0 - 8.0 */
    -webkit-animation-direction: normal; /* Safari 4.0 - 8.0 *
  -webkit-animation-timing-function: linear; /* Safari 4.0 - 8.0 *//
    animation-name: anim_4;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: normal; 
  animation-timing-function: linear;
}
.chara_6 {
  text-align:center;
  float:left;
  padding-top:6px;
  position: relative;
    -webkit-animation-name: anim_6; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    -webkit-animation-iteration-count: infinite; /* Safari 4.0 - 8.0 */
    -webkit-animation-direction: normal; /* Safari 4.0 - 8.0 *
  -webkit-animation-timing-function: linear; /* Safari 4.0 - 8.0 *//
    animation-name: anim_6;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: normal; 
  animation-timing-function: linear;
}
.chara_8 {
  text-align:center;
  float:left;
  padding-top:8px;
  position: relative;
    -webkit-animation-name: anim_8; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    -webkit-animation-iteration-count: infinite; /* Safari 4.0 - 8.0 */
    -webkit-animation-direction: normal; /* Safari 4.0 - 8.0 *
  -webkit-animation-timing-function: linear; /* Safari 4.0 - 8.0 *//
    animation-name: anim_8;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: normal; 
  animation-timing-function: linear;
}
.chara_10 {
  text-align:center;
  float:left;
  padding-top:10px;
  position: relative;
    -webkit-animation-name: anim_10; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    -webkit-animation-iteration-count: infinite; /* Safari 4.0 - 8.0 */
    -webkit-animation-direction: normal; /* Safari 4.0 - 8.0 *
  -webkit-animation-timing-function: linear; /* Safari 4.0 - 8.0 *//
    animation-name: anim_10;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: normal; 
  animation-timing-function: linear;
}
.chara_12 {
  text-align:center;
  float:left;
  padding-top:12px;
  position: relative;
    -webkit-animation-name: anim_12; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    -webkit-animation-iteration-count: infinite; /* Safari 4.0 - 8.0 */
    -webkit-animation-direction: normal; /* Safari 4.0 - 8.0 *
  -webkit-animation-timing-function: linear; /* Safari 4.0 - 8.0 *//
    animation-name: anim_12;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: normal; 
  animation-timing-function: linear;
}
.chara_14 {
  text-align:center;
  float:left;
  padding-top:14px;
  position: relative;
    -webkit-animation-name: anim_14; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    -webkit-animation-iteration-count: infinite; /* Safari 4.0 - 8.0 */
    -webkit-animation-direction: normal; /* Safari 4.0 - 8.0 *
  -webkit-animation-timing-function: linear; /* Safari 4.0 - 8.0 *//
    animation-name: anim_14;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: normal; 
  animation-timing-function: linear;
}
.chara_16 {
  text-align:center;
  float:left;
  padding-top:16px;
  position: relative;
    -webkit-animation-name: anim_16; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    -webkit-animation-iteration-count: infinite; /* Safari 4.0 - 8.0 */
    -webkit-animation-direction: normal; /* Safari 4.0 - 8.0 *
  -webkit-animation-timing-function: linear; /* Safari 4.0 - 8.0 *//
    animation-name: anim_16;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: normal; 
  animation-timing-function: linear;
}
.chara_18 {
  text-align:center;
  float:left;
  padding-top:18px;
  position: relative;
    -webkit-animation-name: anim_18; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    -webkit-animation-iteration-count: infinite; /* Safari 4.0 - 8.0 */
    -webkit-animation-direction: normal; /* Safari 4.0 - 8.0 *
  -webkit-animation-timing-function: linear; /* Safari 4.0 - 8.0 *//
    animation-name: anim_18;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: normal; 
  animation-timing-function: linear;
}
.chara_20 {
  text-align:center;
  float:left;
  padding-top:20px;
  position: relative;
    -webkit-animation-name: anim_20; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    -webkit-animation-iteration-count: infinite; /* Safari 4.0 - 8.0 */
    -webkit-animation-direction: normal; /* Safari 4.0 - 8.0 *
  -webkit-animation-timing-function: linear; /* Safari 4.0 - 8.0 *//
    animation-name: anim_20;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: normal; 
  animation-timing-function: linear;
}

@keyframes anim_0 {
    0%   {top:0px;}
  50%  {top:20px;}
    100% {top:0px;}
}
@keyframes anim_2 { 
    0%   {top:0px;}
  45%  {top:18px;}
  95%  {top:-2px;}
    100% {top:0px;}
}
@keyframes anim_4 { 
    0%   {top:0px;}
    40%  {top:16px;}
  90%  {top:-4px;}  
  100% {top:0px;}
}
@keyframes anim_6 {
    0%   {top:0px;}
    35%  {top:14px;}
    85%  {top:-6px;}
  100% {top:0px;}
}
@keyframes anim_8 {
    0%   {top:0px;}
    30%  {top:12px;}
    80%  {top:-8px;}
  100% {top:0px;}
}
@keyframes anim_10 {
    0%   {top:0px;}
    25%  {top:10px;}
    75%  {top:-10px;}
  100% {top:0px;}
}
@keyframes anim_12 {
    0%   {top:0px;}
    20%  {top:8px;}
  70%  {top:-12px;}
  100% {top:0px;}
}
@keyframes anim_14 {
    0%   {top:0px;}
    15%  {top:6px;}
    65%  {top:-14px;}
  100% {top:0px;}
}
@keyframes anim_16 {
    0%   {top:0px;}
    10%  {top:4px;}
    60%  {top:-16px;}
  100% {top:0px;}
}
@keyframes anim_18 {
    0%   {top:0px;}
    5%  {top:2px;}
  55%  {top:-18px;}
  100% {top:0px;}
}
@keyframes anim_20 {
    0%   {top:0px;}
    50%  {top:-20px;}
  100% {top:0px;}
}

@media screen and (max-width: 1100px) {

  div.crystals li div {
    width: calc(113px * 0.9);
    height: calc(236px * 0.9);
  }
  div.crystals li div:hover {
    background-position: calc(-113px * 0.9) 0px;
  }
  ul.line_0, ul.line_2, ul.line_4 {
    margin-left: calc(66.5px * 0.9);
  }
  ul.line_1, ul.line_3 {
    margin-right: calc(66.5px * 0.9);
  }
  ul.line_1, ul.line_2, ul.line_3, ul.line_4 {
    margin-top: calc(-29px * 0.9);
  }
}

@media screen and (max-width: 1000px) {
  
  div.crystals li div {
    width: calc(113px * 0.8);
    height: calc(236px * 0.8);
  }
  div.crystals li div:hover {
    background-position: calc(-113px * 0.8) 0px;
  }
  ul.line_0, ul.line_2, ul.line_4 {
    margin-left: calc(66.5px * 0.8);
  }
  ul.line_1, ul.line_3 {
    margin-right: calc(66.5px * 0.8);
  }
  ul.line_1, ul.line_2, ul.line_3, ul.line_4 {
    margin-top: calc(-29px * 0.8);
  }
}

@media screen and (max-width: 900px) {
  
  div.crystals li div {
    width: calc(113px * 0.7);
    height: calc(236px * 0.7);
  }
  div.crystals li div:hover {
    background-position: calc(-113px * 0.7) 0px;
  }
  ul.line_0, ul.line_2, ul.line_4 {
    margin-left: calc(66.5px * 0.7);
  }
  ul.line_1, ul.line_3 {
    margin-right: calc(66.5px * 0.7);
  }
  ul.line_1, ul.line_2, ul.line_3, ul.line_4 {
    margin-top: calc(-29px * 0.7);
  }
}

@media screen and (max-width: 800px) {
  
  div.crystals li div {
    width: calc(113px * 0.6);
    height: calc(236px * 0.6);
  }
  div.crystals li div:hover {
    background-position: calc(-113px * 0.6) 0px;
  }
  ul.line_0, ul.line_2, ul.line_4 {
    margin-left: calc(66.5px * 0.6);
  }
  ul.line_1, ul.line_3 {
    margin-right: calc(66.5px * 0.6);
  }
  ul.line_1, ul.line_2, ul.line_3, ul.line_4 {
    margin-top: calc(-29px * 0.6);
  }
}

@media screen and (max-width: 700px) {
  
  div.crystals li div {
    width: calc(113px * 0.5);
    height: calc(236px * 0.5);
  }
  div.crystals li div:hover {
    background-position: calc(-113px * 0.5) 0px;
  }
  ul.line_0, ul.line_2, ul.line_4 {
    margin-left: calc(66.5px * 0.5);
  }
  ul.line_1, ul.line_3 {
    margin-right: calc(66.5px * 0.5);
  }
  ul.line_1, ul.line_2, ul.line_3, ul.line_4 {
    margin-top: calc(-29px * 0.5);
  }
}
</style>