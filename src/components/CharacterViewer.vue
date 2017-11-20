<template>
 <transition name="modal">
    <div class="chara-mask">
      <div class="chara-wrapper" @click="$emit('close', $event.target.className)">
        <div class="chara-container">
          <costume-viewer :selected="character"></costume-viewer>
          <div class="chara-content-wrapper">
            <div class="modal-buttons">
              <button class="close-button" @click="$emit('close', $event.target.className)">Retour</button>
              <div class="description-buttons">
                <button class="movelist-button" @click="toggleMovelist">{{ toggleMovelistTab }}</button>
                <button class="video-button" @click="toggleVideo">{{ toggleVideoTab }}</button>
              </div>
            </div>
            <template v-if="toggle">
              <template v-if="toggle2">
                <h2>Description</h2>
                <div class="chara-description-wrapper">
                  <div class="chara-profile">
                    <table class="profile-table">
                      <tbody>
                        <tr>
                          <th>Age</th>
                          <td>{{ character.data.profile.age }}</td>
                        </tr>
                        <tr>
                          <th>Rôle</th>
                          <td>{{ character.data.profile.role }}</td>
                        </tr>
                        <tr>
                          <th>Jeu</th>
                          <td>{{ character.data.profile.series }}</td>
                        </tr>
                        <tr>
                          <th>Voix japonaise</th>
                          <td>{{ character.data.profile.va.jp }}</td>
                        </tr>
                        <tr>
                          <th>Voix anglaise</th>
                          <td>{{ character.data.profile.va.en }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div v-html="character.data.description" class="chara-description"></div>
                </div>
              </template>
              <template v-else>
                <h2>Vidéo</h2>
                <div class="chara-description-wrapper">
                  <div class="chara-video">
                    <iframe width="640" height="360" :src="character.data.profile.video" frameborder="0" allowfullscreen></iframe>
                  </div>
                </div>
              </template>
            </template>
            <template v-else>
              <h2>Movelist</h2>
              <div class="movelist-wrapper">
                <table class="special-table">
                  <tbody>
                    <tr>
                      <th rowspan="2">Spécifité Unique</th>
                      <td>{{ character.data.movelist.sp[0].name }}</td>
                    </tr>
                    <tr>
                      <td>{{ character.data.movelist.sp[0].description }}</td>
                    </tr>
                  </tbody>
                </table>
                <table class="movelist-table">
                  <tbody>
                    <tr>
                      <td colspan="3" class="brv-category">Attaques Bravoure</td>
                    </tr>
                    <template v-for="brvEntry in character.data.movelist.brv">
                      <tr v-if="brvEntry.stance" class="move-stance">
                        <td colspan="3" :class="lowerCase(brvEntry.stance)">{{ brvEntry.stance }}</td>
                      </tr>
                      <template v-for="brvAttack in brvEntry.moves">
                        <tr>
                          <td>{{ brvAttack.name }}</td>
                          <td>{{ brvAttack.command }}</td>
                          <td>{{ brvAttack.position }}</td>
                        </tr>
                        <template v-if="brvAttack.description instanceof Array">
                          <tr v-for="descriptionEntry in brvAttack.description">
                            <td class="move-description" colspan="4">{{ descriptionEntry }}</td>
                          </tr>
                        </template>
                        <template v-else>
                          <tr>
                            <td class="move-description" colspan="4">{{ brvAttack.description }}</td>
                          </tr>
                        </template>
                      </template>
                    </template>
                    <tr>
                      <td colspan="3" class="hp-category">Attaques de PV</td>
                    </tr>
                    <template v-for="hpEntry in character.data.movelist.hp">
                      <tr v-if="hpEntry.stance" class="move-stance">
                        <td colspan="3" :class="lowerCase(hpEntry.stance)">{{ hpEntry.stance }}</td>
                      </tr>
                      <template v-for="hpAttack in hpEntry.moves">
                        <tr>
                          <td>{{ hpAttack.name }}</td>
                          <td>{{ hpAttack.command }}</td>
                          <td>{{ hpAttack.position }}</td>
                        </tr>
                        <template v-if="hpAttack.description instanceof Array">
                          <tr v-for="descriptionEntry in hpAttack.description">
                            <td class="move-description" colspan="4">{{ descriptionEntry }}</td>
                          </tr>
                        </template>
                        <template v-else>
                          <tr>
                            <td class="move-description" colspan="4">{{ hpAttack.description }}</td>
                          </tr>
                        </template>
                      </template>
                    </template>
                    <tr>
                      <td colspan="3" class="ex-category">Compétences EX</td>
                    </tr>
                    <template v-for="exEntry in character.data.movelist.ex">
                      <tr v-if="exEntry.stance" class="move-stance">
                        <td colspan="3" :class="lowerCase(exEntry.stance)">{{ exEntry.stance }}</td>
                      </tr>
                      <template v-for="exAttack in exEntry.moves">
                        <tr>
                          <td>{{ exAttack.name }}</td>
                          <td>{{ exAttack.command }}</td>
                          <td>{{ exAttack.position }}</td>
                        </tr>
                        <template v-if="exAttack.description instanceof Array">
                          <tr v-for="descriptionEntry in exAttack.description">
                            <td class="move-description" colspan="4">{{ descriptionEntry }}</td>
                          </tr>
                        </template>
                        <template v-else>
                          <tr>
                            <td class="move-description" colspan="4">{{ exAttack.description }}</td>
                          </tr>
                        </template>
                        <tr v-if="exAttack.cooldown !== undefined" >
                          <td class="move-description" colspan="3">Cooldown de {{ exAttack.cooldown }} secondes.</td>
                        </tr>
                      </template>
                    </template>
                    <tr>
                      <th colspan="3" class="movelist-disclaimer">* Les commandes montrées çi-dessus sont basées sur la configuration par défaut des touches dans le jeu.</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import CostumeViewer from './CostumeViewer'

export default {
  name: 'character-viewer',
  props: ['characters', 'selected'],
  data () {
    return {
      character: {
        'name': null,
        'data': {}
      },
      toggle: true,
      toggleMovelistTab: 'Movelist',
      toggleVideoTab: 'Vidéo',
      toggle2: true
    }
  },
  methods: {
    setCharacterData: function (character) {
      // This function needs to handle improper input too!!
      this.character.name = character
      this.character.data = this.characters[character]
      if (require('../db/characters/' + character + '/movelist.json') !== undefined) {
        this.character.data.movelist = require('../db/characters/' + character + '/movelist.json')
      } else {
        this.character.data.movelist = {}
      }
      if (require('../db/characters/' + character + '/description.html') !== undefined) {
        this.character.data.description = require('../db/characters/' + character + '/description.html')
      } else {
        this.character.data.description = null
      }
      if (require('../db/characters/' + character + '/description.json') !== undefined) {
        this.character.data.profile = require('../db/characters/' + character + '/description.json')
      } else {
        this.character.data.profile = null
      }
    },
    toggleMovelist: function () {
      this.toggle = !this.toggle
    },
    toggleVideo: function () {
      this.toggle2 = !this.toggle2
    },
    lowerCase: function (text) {
      return text.toLowerCase()
    }
  },
  created () {
    this.setCharacterData(this.selected)
  },
  watch: {
    selected: function () {
      this.setCharacterData(this.selected)
    },
    toggle: function () {
      if (this.toggle === true) {
        this.toggleMovelistTab = 'Movelist'
      } else {
        this.toggleMovelistTab = 'Description'
        this.toggle2 = true
      }
    },
    toggle2: function () {
      if (this.toggle2 === true) {
        this.toggleVideoTab = 'Vidéo'
      } else {
        this.toggleVideoTab = 'Description'
        this.toggle = true
      }
    }
  },
  computed: {
    properCommand: function (command) {
      // Replace with command icons
      return command
    }
  },
  components: {
    CostumeViewer
  }
}
</script>

<style scoped>
.chara-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
/*  min-width: 1000px;*/
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.chara-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.chara-container {
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
  height: 540px;
  /*height: 100vh;*/
  background-color: #272727;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  /*overflow-y: auto;*/
/*  background-image: url('../assets/clouds.jpg');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;*/
}

.chara-content-wrapper {
  display: inline-block;
  vertical-align: top;
  width: calc(99% - 470px);
/*  min-width: 470px;*/
  text-align: left;
}

.movelist-wrapper {
  /*height: calc(100vh - 100px);*/
  height: 451px;
  margin: 0 30px;
  overflow-y: auto;
}

table {
  width: 100%;
  text-align: center;
  font-size: 14px;
}

th {
  padding: 5px 0;
  background-color: #0b0b0b;
}

td {
  background-color: #BDBDBD;
  color: #212121;
  padding: 5px 5px;
}

td.move-description {
  font-size: 12px;
  background-color: #ccd6dd;
  color: #0b0b0b;
}

td.movelist-delimiter {
  height: 26px;
}

table.special-table td {
  padding: 10px 0;
}

table.special-table th {
  width: 20%;
}

.move-stance td {
  background-color: #455A64;
  color: #CFD8DC;
}

.attaquant {
  color: crimson;
}

.ravageur {
  color: royalblue;
}

td.brv-category {
  background-color: #d32f2f;
  color: #FFCDD2;
  font-weight: bold;
}

td.hp-category {
  background-color: #303f9f;
  color: #c5cae9;
  font-weight: bold;
}

td.ex-category {
  background-color: #512DA8;
  color: #D1C4E9;
  font-weight: bold;
}

th.movelist-disclaimer {
  font-size: 11px;
}

.chara-content-wrapper h2 {
  margin: 15px auto;
  margin-bottom: 20px;
  width: calc(100% - 50px);
  font-size: 20px;
  font-family: Verdana, Arial, sans-serif;
}

.modal-buttons button {
  display: block;
  float: right;
  margin-top: 15px;
  margin-right: 15px;

}

.chara-video {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}

.chara-video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.chara-description {
  width: 100%;
  font-size: 14px;
  font-family: Helvetica, Arial, sans-serif;
  text-align: justify;
  /*background-color: #BDBDBD;
  color: #212121;*/
}

.chara-description-wrapper {
  margin: 0 30px;
  width: calc(100% - 60px);
  overflow-y: auto;
  max-height: 450px;
}

.chara-profile {
  margin-right: 15px;
  float: left;
}

.chara-profile table {
  width: 300px;
  font-size: 12px;
}

.chara-profile table td, .chara-profile table th {
  width: 50%;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media screen and (orientation: portrait) {
  button {
    font-size: 25px;
    padding: 0.4em 0.7em;
  }

  .chara-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  .chara-content-wrapper {
    display: block;
    width: 100%;
    height: auto;
    margin: 0 auto;
    margin-bottom: 150px;
    overflow-y: auto;
    overflow-x: hidden;
    text-align: left;
  }

  .movelist-wrapper {
    /*height: calc(100vh - 100px);*/
    height: auto;
    margin: 0 30px;
  } 

  .chara-content-wrapper h2 {
    margin: 0.5em auto;
    margin-bottom: 1em;
    text-align: center;
    font-size: 3em;
  }

  .modal-buttons {
    padding: 10px;
    width: 100%;
    margin: 0 auto;
    display: block;
  }

  .description-buttons {
    width: 350px;
    margin: 0 auto;
    text-align: center;
  }

  .modal-buttons button.video-button, .modal-buttons button.movelist-button {
    display: inline-block;
    width: 49%;
    float: none;
    margin: 0;
  }

  .modal-buttons button.close-button {
    position: absolute;
    right: 25px;
    bottom: 25px;
    font-size: 3em;
    height: 100px;
    margin: 0;
  }

/*  .modal-buttons button.close-button:before {
    content: 'Fermer';
    font-size: 40px;
    display: block;
    position: absolute;
    margin-left: -200px;
  }*/

  .chara-description {
    width: 90%;
    margin: 0 auto;
    font-size: 2.2em;
    font-family: Helvetica, Arial, sans-serif;
    text-align: justify;
    /*background-color: #BDBDBD;
    color: #212121;*/
  }

  .chara-description-wrapper {
    width: 100%;
    margin: 0 auto;
    max-height: initial;
    overflow: hidden;
  }

  .chara-profile {
    width: 100%;
    float: none;
    margin: 0;
  }

  .chara-profile table {
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  .chara-profile table td, .chara-profile table th {
    font-size: 1.9em;
  }

  table.special-table {
    font-size: 1em;
  }

  table.special-table tr {
    font-size: 2em;
  }

  table.special-table td, table.special-table th {
    padding: 0.5em 1em;
  }

  table.movelist-table td {
    width: 33%;
  }

  table.movelist-table td {
    padding: 0.35em;
    font-size: 2.2em;
  }

  table.movelist-table td.move-description{
    font-size: 2.1em;
    padding: 0.35em 0.55em;
  }

  th.movelist-disclaimer {
    font-size: 1.8em;
    padding: 0.55em;
  }
}

@media screen and (max-width: 1200px) and (orientation: landscape) {

}
</style>
