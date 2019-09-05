<template>
  <div class="chara-costume">
    <h2 class="chara-name">{{ properName }}</h2>
    <div class="chara-image-wrapper">
      <img class="chara-image" :src="findImgUrl()">
      <div class="chara-image-border"></div>
    </div>
    <span class="swap-buttons">
      <button class="costume" @click="swapOutfit('costume')"></button>
      <button class="color" @click="swapOutfit('color')"></button>
      <button class="weapon" @click="swapOutfit('weapon')"></button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'costume-viewer',
  props: ['selected'],
  data () {
    return {
      character: {
        'color': 1,
        'costume': 1,
        'weapon': 1
      },
      typeClicked: null,
      renders: []
    }
  },
  methods: {
    swapCharacter: function () {
      // This function needs to handle improper input too!!
      this.resetData()

      // Code below rebuilds renders array for the all outfits of newly selected character. It defaults to no-render.png if no costumes.
      if (this.selected.data.costume > 0) {
        let colors = this.selected.data.color
        this.renders = this.buildImgUrls(colors)
      } else {
        this.renders = [[this.selected.name + '111', require('../assets/characters/no-render.png')]]
      }
    },
    swapOutfit: function (typeClicked) {
      // Consolidate these ifs into one single map function if possible.
      // Add costume names and weapon names, as well as change color types to A, B and C.
      if (typeClicked === 'costume' && this.selected.data.costume > 1) {
        this.character.costume++
        this.character.color = 1
        if (this.character.costume > this.selected.data.costume) {
          this.character.costume = 1
        }
      } else if (typeClicked === 'color') {
        this.character.color++
        if (this.character.color > this.selected.data.color[this.character.costume - 1]) {
          this.character.color = 1
        }
      } else if (typeClicked === 'weapon') {
        this.character.weapon++
        if (this.character.weapon > this.selected.data.weapon) {
          this.character.weapon = 1
        }
      }
    },
    resetData: function () {
      this.character.color = 1
      this.character.costume = 1
      this.character.weapon = 1
    },
    findImgUrl: function () {
      // Retrieves the name of the image to be displayed by the outfit swapper from the renders array.
      return this.renders.find(this.buildImgName)[1]
    },
    buildImgName: function (arr) {
      let selected = this.selected.name + this.character.costume + this.character.color + this.character.weapon
      if (arr[0] === selected) {
        return arr[1]
      }
    },
    // Or just use the previous solution which was to use require each time buildimgurl is called
    buildImgUrls: function (colors) {
      let renders = []

      for (let w = 1; w <= this.selected.data.weapon; w++) {
        // colors.length represents this.characters[this.selected.name].costume (number of costumes)
        for (let c = 1; c <= colors.length; c++) {
          for (let o = 1; o <= colors[c - 1]; o++) {
            let keyName = this.selected.name + c + o + w
            let imageName = 'p_' + c + o + w
            let render = [keyName, require('../assets/characters/' + this.selected.name + '/forms/' + imageName + '.png')]
            renders.push(render)
          }
        }
      }
      return renders
    }
  },
  created () {
    this.swapCharacter(this.selected)
  },
  watch: {
    selected: function () {
      this.swapCharacter(this.selected)
    }
  },
  computed: {
    properName: function () {
      return this.selected.data.name
    }
  }
}
</script>

<style scoped>
.chara-costume {
  margin-top: 30px;
}

.chara-name {
  padding: 10px;
  margin: 0;
  color: #ccd6dd;
  font-family: 'DissidiaFont', Verdana, sans-serif;
}

.chara-image {
  margin: 0;
  width: 440px;
  height: 440px;
  display: block;
  /*border: solid 1px #3c3c3c;
  background: #272727;*/
  padding: 0;
}

.chara-image-border {
  position: relative;
  background-image: url('../assets/characters/frame.png');
  width: 469px;
  height: 469px;
  margin-left: -13px; 
  margin-top: -456px;
}

.swap-buttons {
  padding: 20px;
  margin: 0;
  margin-top: 5px;
  display: block;
  /*background: #272727;*/
  background-image: url('../assets/buttons/button_bg.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 85%;
  font-size: 0;
}

.swap-buttons p {
  margin:0;
  color: #fff;
}

.swap-buttons button {
  margin: 0 auto;
  height: calc(58px * 0.85);
  display: inline-block;
  background: none;
  border: none;
  outline: none;
}

.swap-buttons button.costume {
  background-image: url('../assets/buttons/costume.png');
  background-repeat: no-repeat;
  width: calc(157px * 0.85);
  background-position: center center;
  background-size: contain;
}

.swap-buttons button.color {
  background-image: url('../assets/buttons/couleur.png');
  background-repeat: no-repeat;
  width: calc(145px * 0.85);
  background-position: center center;
  background-size: contain;
}

.swap-buttons button.weapon {
  background-image: url('../assets/buttons/arme.png');
  background-repeat: no-repeat;
  width: calc(157px * 0.85);
  background-position: center center;
  background-size: contain;
}

.swap-buttons button.costume:hover {
  background-image: url('../assets/buttons/costume_hover.png');
}

.swap-buttons button.color:hover {
  background-image: url('../assets/buttons/couleur_hover.png');
}

.swap-buttons button.weapon:hover {
  background-image: url('../assets/buttons/arme_hover.png');
}

.swap-buttons button.costume:active {
  background-image: url('../assets/buttons/costume_on.png');
}

.swap-buttons button.color:active {
  background-image: url('../assets/buttons/couleur_on.png');
}

.swap-buttons button.weapon:active {
  background-image: url('../assets/buttons/arme_on.png');
}

.chara-image-wrapper {
  width: 440px;
  margin: 0 auto;
  margin-top: 30px;
  height: 440px;
  background-image: url('../assets/clouds.jpg');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
}

.chara-costume {
  display: inline-block;
  vertical-align: top;
  width: 470px;
}


@media screen and (max-width: 1000px) and (orientation: landscape) {

  .chara-costume {
    margin-top: 0;
  }

  .chara-image-wrapper {
    width: calc(440px * 0.95);
    height: calc(440px * 0.95);
    margin-top: 0;
  }

  .chara-image {
    width: calc(440px * 0.95);
    height: calc(440px * 0.95);
  }

  .swap-buttons button {
    font-size: 0.7em;
    width: 30%;
  }

  .chara-image-border {
    background-size: cover;
    width: calc(469px * 0.95);
    height: calc(469px * 0.95);
    margin-left: calc(-13px * 0.95); 
    margin-top: calc(-456px * 0.95);
  }
}


@media screen and (max-width: 850px) and (orientation: landscape) {

  .chara-costume {
    width: calc(470px * 0.65);
    height: 100%;
  }

  .chara-image-wrapper {
    width: calc(440px * 0.65);
    height: calc(440px * 0.65);
  }

  .chara-image {
    width: calc(440px * 0.65);
    height: calc(440px * 0.65);
  }

  .swap-buttons {
    margin: 0 auto;
    margin-top: -10px;
    width: calc(85px + 85px + 75px);
  }

  .swap-buttons, .swap-buttons button {
    height: 30px;
  }

  .swap-buttons button.costume, .swap-buttons button.weapon {
    width: 85px;
  }

  .swap-buttons button.color {
    width: 75px;
  }

  .chara-image-border {
    background-size: cover;
    width: calc(469px * 0.65);
    height: calc(469px * 0.65);
    margin-left: calc(-13px * 0.65); 
    margin-top: calc(-456px * 0.65);
  }
}

@media screen and (max-width: 670px) and (orientation: landscape) {

  .chara-costume {
    width: calc(470px * 0.6);
  }

  .chara-image-wrapper {
    width: calc(440px * 0.6);
    height: calc(440px * 0.6);
  }

  .chara-image {
    width: calc(440px * 0.6);
    height: calc(440px * 0.6);
  }

  .chara-name {
    font-size: 1.2em;
    margin-bottom: 5px;
  }

  .swap-buttons button {
    font-size: 0.7em;
    width: 30%;
  }

  .chara-image-border {
    background-size: cover;
    width: calc(469px * 0.6);
    height: calc(469px * 0.6);
    margin-left: calc(-13px * 0.6); 
    margin-top: calc(-456px * 0.6);
  }
}

@media screen and (max-width: 580px) and (orientation: landscape) {

  .chara-costume {
    width: calc(470px * 0.5);
  }

  .chara-image-wrapper {
    width: calc(440px * 0.5);
    height: calc(440px * 0.5);
  }

  .chara-image {
    width: calc(440px * 0.5);
    height: calc(440px * 0.5);
  }

  .chara-name {
    font-size: 0.9em;
  }

  .swap-buttons button {
    font-size: 0.5em;
    width: 30%;
  }

  .chara-image-border {
    background-size: cover;
    width: calc(469px * 0.5);
    height: calc(469px * 0.5);
    margin-left: calc(-13px * 0.5); 
    margin-top: calc(-456px * 0.5);
  }
}

@media screen and (orientation: portrait) {


  .chara-costume {
    width: 100%;
  }

  .chara-image-wrapper {
    width: calc(100vw * 0.75);
    margin: 0 auto;
    height: calc(100vw * 0.75);
    background-image: url('../assets/clouds.jpg');
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .chara-image {
    margin: 0;
    width: calc(100vw * 0.75);
    height: calc(100vw * 0.75);
    display: block;
    /*border: solid 1px #3c3c3c;
    background: #272727;*/
    padding: 0;
  }

  .chara-image-border {
    position: relative;
    background-image: url('../assets/characters/frame.png');
    background-size: cover;
    /* (469px / 440px) * 0.75 */
    width: calc(100vw * 0.7994318181818182);
    height: calc(100vw * 0.7994318181818182);
    /* (-13px / 440px) * 0.75 */
    margin-left: calc(-100vw * 0.0221590909090909); 
    /* (-456px / 440px) * 0.75 */
    margin-top: calc(-100vw * 0.7772727272727273); 
  }

  .chara-name {
    font-size: 1.5em;
    padding: 10px 0;
    padding-bottom: 15px;
  }

  .swap-buttons {
    background: none;
  }

  .swap-buttons button {
    font-size: 0.8em;
    width: 30%;
    max-width: 150px;
    padding: 0.4em 0.7em;
    margin: 15px auto;
    display: inline-block;
  }
}
</style>
