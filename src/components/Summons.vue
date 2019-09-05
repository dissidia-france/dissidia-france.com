<template>
  <div class="summons">
    <page-title titleValue="Invocations" />
    <h2 class="subheader">Invocations</h2>
    <div class="intro">
      <p>Les invocations dans Dissidia Final Fantasy NT sont des créatures mythiques extrêmement puissantes pouvant être invoquées dans l'arène de combat par chaque équipe</p>
      <p>Il sera nécessaire de briser les quartz d'invocation qui apparaissent sur le terrain pour remplir votre jauge d'invocation.<br>Lorsque votre jauge est pleine il suffira d'appuyer sur le pavé tactile de votre manette pour commencer à invoquer la bête que vous aurez choisi au préalable. Il faut savoir que l'incantation sera plus rapide si vous êtes plusieurs à appuyer sur la touche, si les trois membres de l'équipe appuient en même temps elle sera même instantanée.</p>
      <p>Lorsque votre invocation est sur le terrain elle agira toute seule, lançant ses attaques sur vos adversaires avant de faire son attaque ultime.<br>Vos adversaires devront être extrêmement attentifs s'ils veulent éviter toutes les attaques de l'invocation ainsi que les vôtres, c'est le moment idéal pour ne pas les lâcher !</p>
      <p>En plus de semer le chaos sur le terrain, l'invocation apporte à votre équipe un bonus passif qui diffère selon celle que vous avez choisie. Il est donc important d'en choisir une qui possède un passif ayant une bonne synergie avec vos personnages et compétences EX choisies.</p>
    </div>
    <div class="summon_crystals">
      <a class="ifrit" @click="scrollTo('#ifrit')"></a>
      <a class="shiva" @click="scrollTo('#shiva')"></a>
      <a class="ramuh" @click="scrollTo('#ramuh')"></a>
      <a class="odin" @click="scrollTo('#odin')"></a>
      <a class="leviathan" @click="scrollTo('#leviathan')"></a>
      <a class="alexander" @click="scrollTo('#alexander')"></a>
      <a class="bahamut" @click="scrollTo('#bahamut')"></a>
    </div>
    <div class="summon_category">
      <h2 class="subheader summon_title">Ifrit</h2>
      <div id="ifrit" class="summon_artwork"></div>
      <div class="summon_info">
        <table>
          <thead><tr><th colspan="2">Effets passifs</th></tr></thead>
          <tbody><tr><td class="when">Avant invocation</td><td>Cri de guerre</td></tr>
            <tr><td colspan="2">Détruit plus vite le bouclier de garde adverse.</td></tr>
            <tr><td class="when">Après invocation</td><td>Coup de météore</td></tr>
            <tr><td colspan="2">Brise plus vite la garde adverse, renforce les attaques de Bravoure.</td></tr>
          </tbody>
        </table>
        <div class="summon_images" v-viewer="{toolbar: false}">
          <img src="../assets/summons/ifrit_01.jpg"><img src="../assets/summons/ifrit_02.jpg">
        </div>
      </div>
    </div>
    <div class="summon_category">
      <h2 class="subheader summon_title">Shiva</h2>
      <div id="shiva" class="summon_artwork"></div>
      <div class="summon_info">
        <table>
          <thead><tr><th colspan="2">Effets passifs</th></tr></thead>
          <tbody><tr><td class="when">Avant invocation</td><td>Déchainement</td></tr>
            <tr><td colspan="2">Accélère la régénération de la valeur de base de la Bravoure.</td></tr>
            <tr><td class="when">Après invocation</td><td>Aura de glace</td></tr>
            <tr><td colspan="2">Accélère la régénération de la Bravoure, accroît sa valeur de base.</td></tr>
          </tbody>
        </table>
        <div class="summon_images" v-viewer="{toolbar: false}">
          <img src="../assets/summons/shiva_01.jpg"><img src="../assets/summons/shiva_02.jpg">
        </div>
      </div>
    </div>
    <div class="summon_category">
      <h2 class="subheader summon_title">Ramuh</h2>
      <div id="ramuh" class="summon_artwork"></div>
      <div class="summon_info">
        <table>
          <thead><tr><th colspan="2">Effets passifs</th></tr></thead>
          <tbody><tr><td class="when">Avant invocation</td><td>Vigueur</td></tr>
            <tr><td colspan="2">Accélère le gain de jauge des aptitudes EX bienfaits.</td></tr>
            <tr><td class="when">Après invocation</td><td>Étincelle d'énergie</td></tr>
            <tr><td colspan="2">Accélère le gain de jauge des aptitudes EX bienfaits et les prolonge.</td></tr>
          </tbody>
        </table>
        <div class="summon_images" v-viewer="{toolbar: false}">
          <img src="../assets/summons/ramuh_01.jpg"><img src="../assets/summons/ramuh_02.jpg">
        </div>
      </div>
    </div>
    <div class="summon_category">
      <h2 class="subheader summon_title">Odin</h2>
      <div id="odin" class="summon_artwork"></div>
      <div class="summon_info">
        <table>
          <thead><tr><th colspan="2">Effets passifs</th></tr></thead>
          <tbody><tr><td class="when">Avant invocation</td><td>Rapidité foudroyante</td></tr>
            <tr><td colspan="2">Augmente la valeur maximale de la jauge de sprint.</td></tr>
            <tr><td class="when">Après invocation</td><td>Éclat métallique</td></tr>
            <tr><td colspan="2">Augmente la jauge de sprint et la vitesse de déplacement.</td></tr>
          </tbody>
        </table>
        <div class="summon_images" v-viewer="{toolbar: false}">
          <img src="../assets/summons/odin_01.jpg"><img src="../assets/summons/odin_02.jpg">
        </div>
      </div>
    </div>
    <div class="summon_category">
      <h2 class="subheader summon_title">Léviathan</h2>
      <div id="leviathan" class="summon_artwork"></div>
      <div class="summon_info">
        <table>
          <thead><tr><th colspan="2">Effets passifs</th></tr></thead>
          <tbody><tr><td class="when">Avant invocation</td><td>Vague rugissante</td></tr>
            <tr><td colspan="2">Accélère le gain de jauge des aptitudes EX afflictions.</td></tr>
            <tr><td class="when">Après invocation</td><td>Désastre maléfique</td></tr>
            <tr><td colspan="2">Accélère le gain de jauge des aptitudes EX afflictions et les prolonge.</td></tr>
          </tbody>
        </table>
        <div class="summon_images" v-viewer="{toolbar: false}">
          <img src="../assets/summons/leviathan_01.jpg"><img src="../assets/summons/leviathan_02.jpg">
        </div>
      </div>
    </div>
    <div class="summon_category">
      <h2 class="subheader summon_title">Alexandre</h2>
      <div id="alexander" class="summon_artwork"></div>
      <div class="summon_info">
        <table>
          <thead><tr><th colspan="2">Effets passifs</th></tr></thead>
          <tbody><tr><td class="when">Avant invocation</td><td>Providence</td></tr>
            <tr><td colspan="2">Augmente la valeur maximale de la jauge de PV.</td></tr>
            <tr><td class="when">Après invocation</td><td>Mur divin</td></tr>
            <tr><td colspan="2">Augmente la valeur maximale de la jauge de PV et la défense.</td></tr>
          </tbody>
        </table>
        <div class="summon_images" v-viewer="{toolbar: false}">
          <img src="../assets/summons/alexander_01.jpg"><img src="../assets/summons/alexander_02.jpg">
        </div>
      </div>
    </div>
    <div class="summon_category">
      <h2 class="subheader summon_title">Bahamut</h2>
      <div id="bahamut" class="summon_artwork"></div>
      <div class="summon_info">
        <table>
          <thead><tr><th colspan="2">Effets passifs</th></tr></thead>
          <tbody><tr><td class="when">Avant invocation</td><td>Souffle de combativité</td></tr>
            <tr><td colspan="2">Accélère le gain de jauge des aptitudes EX uniques.</td></tr>
            <tr><td class="when">Après invocation</td><td>Fléau du dragon</td></tr>
            <tr><td colspan="2">Accélère le gain de jauge des aptitudes EX uniques et les prolonge.</td></tr>
          </tbody>
        </table>
        <div class="summon_images" v-viewer="{toolbar: false}">
          <img src="../assets/summons/bahamut_01.jpg"><img src="../assets/summons/bahamut_02.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from './shared/PageTitle'
import ScrollTo from '../mixins/scroll'

export default {
  name: 'summons',
  mixins: [ScrollTo],
  components: {
    PageTitle
  }
}
</script>

<style scoped>

div.intro {
  text-align: left;
  max-width: 800px;
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
  background-color: rgba(39, 49, 83, 0.9);
  filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.5));
}

p:first-child {
  font-size: 1.1em;
  line-height: normal;
}

p:last-child {
  margin-bottom: 0;
}

h2.summon_title {
  padding-top: 0;
  font-size: 24px;
}

div.summon_artwork {
  width: 240px;
  height: 300px;
  background-repeat: no-repeat;
  margin: 0 auto;
  margin-bottom: 10px;
}

div.summon_category {
  max-width: 750px;
  margin: 35px auto;
  padding: 25px;
  border-radius: 3px;
  color: #ddd;
  background-color: rgba(39, 49, 83, 0.8);
  filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.5));
  font-size: 14px;
  position: relative;
}

.summon_info table {
  width: 100%;
  overflow: hidden;
  text-align: center;
  border-collapse: collapse;
  filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.5));
}
.summon_info thead {
  display:table-header-group;
  vertical-align: middle;
  border-color: inherit;
}
.summon_info tr {
  display:table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.summon_info th {
  text-transform: uppercase;
  font-family: 'DissidiaFont', sans-serif;
  font-size: 16px;
  padding: 0;
  padding-bottom: 18px;
}
.summon_info tbody {
  font-family: 'Open Sans', sans-serif;
  background-color: #bdbdbd;
}

.summon_info tbody td.when {
  background-color: rgba(39,49,83,.2);
  vertical-align: middle;
  text-align: center;
  font-size: 14px;
  width: 120px;
  padding: 10px 10px;
  color:#212121;
}

.summon_info tbody td {
  color:#212121;
}

.summon_info tbody tr:nth-child(even) {
  background-color: rgb(146, 148, 155);
  line-height: 30px;
  font-size: 14px;
  /*box-shadow: inset 0 -10px 7px -10px #273153, inset 10px 0 14px -10px #273153, inset -10px 0 14px -10px #273153;*/
}
.summon_info tbody tr:nth-child(odd) {
  font-weight: 700;
  /*box-shadow: inset 0 10px 7px -10px #273153, inset 10px 0 14px -10px #273153, inset -10px 0 14px -10px #273153; */
}

.summon_images {
  width: 100%;
  overflow: hidden;
}

.summon_images {
  width: 100%;
  overflow: hidden;
  font-size: 0;
  margin-top: 20px;
}

.summon_images img {
  width: 48.5%;
  cursor: pointer;
}

.summon_images img:first-child {
  margin-right: 2.5%;
}

a {
  display: inline-block;
  line-height: 0;
  font-size: 0;
  width: 60px;
  height: 118px;
  margin: 20px 15px;
  background-repeat: no-repeat;
  filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.5));
  cursor: pointer;
}

a.ifrit {
  background-image: url('../assets/summons/ifrit_c.png');
}

a.shiva {
  background-image: url('../assets/summons/shiva_c.png');
}

a.ramuh {
  background-image: url('../assets/summons/ramuh_c.png');
}

a.odin {
  background-image: url('../assets/summons/odin_c.png');
}

a.leviathan {
  background-image: url('../assets/summons/leviathan_c.png');
}

a.alexander {
  background-image: url('../assets/summons/alexander_c.png');
}

a.bahamut {
  background-image: url('../assets/summons/bahamut_c.png');
}

#ifrit {
  background-image: url('../assets/summons/ifrit_s.png');
}

#shiva {
  background-image: url('../assets/summons/shiva_s.png');
}

#ramuh {
  background-image: url('../assets/summons/ramuh_s.png');
}

#odin {
  background-image: url('../assets/summons/odin_s.png');
}

#leviathan {
  background-image: url('../assets/summons/leviathan_s.png');
}

#alexander {
  background-image: url('../assets/summons/alexander_s.png');
}

#bahamut {
  background-image: url('../assets/summons/bahamut_s.png');
}

@media screen and (max-width: 900px) {

  div.intro{
    margin: 25px;
  }

  a {
    margin: 15px 15px;
  }
}

@media screen and (max-width: 850px) {
  div.summon_category {
    margin: 25px;
  }
}

@media screen and (max-width: 700px) {

  a {
    margin: 15px 10px;
  }
}

@media screen and (max-width: 600px) {

  a {
    margin: 15px 7.5px;
  }
}

</style>