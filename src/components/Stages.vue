<template>
  <div class="stages">
    <page-title titleValue="Arènes de combat" />
    <h2 class="subheader">Arènes de combat</h2>
    <div class="intro">
      <p>L'arène de combat dans Dissidia Final Fantasy NT, bien qu'on ne puisse pas la choisir, a une importance dans la stratégie de combat que les joueurs vont définir avec leurs alliés.</p>
      <p>Comme elles ont des reliefs différents, parfois avec des obstacles destructibles, parfois sans aucun obstacle, elles influeront sur la probabilité de plaquer un adversaire au mur, mais également pourront faire écran aux projectiles.</p><p>Si dans les opus PSP les arènes originales de chaque Final Fantasy représentaient le lieu du combat ultime, vous remarquerez qu'ici les développeurs ont fait le choix du lieu emblématique, connu de tous les joueurs.</p>	
    </div>
    <div class="stages_FF">
      <a @click="scrollTo('#FFI')" class="ff1"></a>
      <a @click="scrollTo('#FFII')" class="ff2"></a>
      <a @click="scrollTo('#FFIII')" class="ff3"></a>
      <a @click="scrollTo('#FFIV')" class="ff4"></a>
      <a @click="scrollTo('#FFV')" class="ff5"></a>
      <a @click="scrollTo('#FFVI')" class="ff6"></a>
      <a @click="scrollTo('#FFVII')" class="ff7"></a>
      <a @click="scrollTo('#FFVIII')" class="ff8"></a>
      <a @click="scrollTo('#FFIX')" class="ff9"></a>
      <a @click="scrollTo('#FFX')" class="ff10"></a>
      <a @click="scrollTo('#FFXI')" class="ff11"></a>
      <a @click="scrollTo('#FFXII')" class="ff12"></a>
      <a @click="scrollTo('#FFXIII')" class="ff13"></a>
      <a @click="scrollTo('#FFXIV')" class="ff14"></a>
      <a @click="scrollTo('#FFXV')" class="ff15"></a>
      <a @click="scrollTo('#FFT')" class="fft"></a>
      <a @click="scrollTo('#FFT0')" class="fft0"></a>
    </div>
    <div class="stage_category">
      <h2 class="subheader stage_title">Cornélia</h2>
      <div id="FFI" class="stage_first"></div>
      <p>La plaine de Cornélia de Final Fantasy I, emblématique puisque c'est depuis cette plaine que les Guerriers de la Lumière observent le chateau dans la scène d'introduction du tout premier jeu de la licence ! <br>C'est également un endroit symbolique pour Dissidia puisque c'est à cet endroit que les guerriers de Cosmos se sont dit au revoir à la fin du premier opus.</p>
      <div class="stage_images" v-viewer="{toolbar: false}">
        <img src="../assets/arenas/01_a.jpg"><img src="../assets/arenas/01_b.jpg">
      </div>
    </div>
    <div class="stage_category">
      <h2 class="subheader stage_title">Pandémonium</h2>
      <div id="FFII" class="stage_first"></div>
      <p>Le palais du Pandémonium était déjà l'arène choisie pour représenter Final Fantasy II dans les précédents jeux Dissidia. C'est un lieu mythique où Firion et ses compagnons ont affronté l'Empereur revenu des enfers !<br>Dans ce nouveau Dissidia, le décor sur trois niveaux permettra un bon jeu vertical et de bonnes protections aux projectiles.</p>
      <div class="stage_images" v-viewer="{toolbar: false}">
        <img src="../assets/arenas/02_a.jpg"><img src="../assets/arenas/02_b.jpg">
      </div>
    </div>
    <div class="stage_category">
      <h2 class="subheader stage_title">Continent flottant</h2>
      <div id="FFIII" class="stage_first"></div>
      <p>Le continent flottant, magnifique et surprenante île où se déroule le début de Final Fantasy III, avant que les héros n'en descendent grâce à un aéronef pour rejoindre le vrai monde !<br>L'arène est relativement simple ici, elle dispose d'un peu de relief mais sans vraiment d'obstacle. Attention à ne pas se laisser distraire par la beauté du paysage lorsque le brouillard se lève !</p>
      <div class="stage_images" v-viewer="{toolbar: false}">
        <img src="../assets/arenas/03_a.jpg"><img src="../assets/arenas/03_b.jpg">
      </div>
    </div>
    <div class="stage_category">
      <h2 class="subheader stage_title">Souterrain lunaire</h2>
      <div id="FFIV" class="stage_first"></div>
      <p>La surface lunaire que Cecil et ses compagnons ont pu atteindre grâce à la Baleine Lunaire. Il est d'ailleurs possible de l'observer dans cette arène. C'est ici que les héros de Final Fantasy IV découvrent la source du mal ainsi que leur ennemi final !<br>Le terrain est relativement simple, un paysage lunaire accidenté avec des roches et des crevasses. C'est un terrain difficilement praticable au sol.</p>
      <div class="stage_images" v-viewer="{toolbar: false}">
        <img src="../assets/arenas/04_a.jpg"><img src="../assets/arenas/04_b.jpg">
      </div>
    </div>
    <div class="stage_category">
      <h2 class="subheader stage_title">Fissure interdimensionnelle</h2>
      <div id="FFV" class="stage_first"></div>
      <p>La Faille, le Void, bien des noms ont été donnés à cette Fissure Interdimensionnelle. C'est à cet endroit que Bartz, Faris, Lenna et Krile ont mené l'ultime affrontement contre Exdeath ! Si la Fissure peut contenir tous les lieux qu'elle a absorbé, c'est bien le coeur de celle-ci qui fait ici office d'arène.<br>
      Bien que très petite, ses nombreux escaliers et étages la rendent très propice aux combos muraux !</p>
      <div class="stage_images" v-viewer="{toolbar: false}">
        <img src="../assets/arenas/05_a.jpg"><img src="../assets/arenas/05_b.jpg">
      </div>
    </div>
    <div class="stage_category">
      <h2 class="subheader stage_title">Périphérie de Narshe</h2>
      <div id="FFVI" class="stage_first"></div>
      <p>Toute personne ayant commencé une partie de Final Fantasy VI connait cet endroit, ce chemin enneigé menant à la ville de Narshe. Ce lieu extrêment emblématique de la scène d'introduction a été choisi pour représenter le jeu dans ce nouveau Dissidia.<br>
      Cette arène est la plus grande du jeu et dispose d'un paysage très abrupt au milieu duquel passe la route menant à la ville, qui est d'ailleurs visible au loin !</p>
      <div class="stage_images" v-viewer="{toolbar: false}">
        <img src="../assets/arenas/06_a.jpg"><img src="../assets/arenas/06_b.jpg">
      </div>
    </div>
    <div class="stage_category">
      <h2 class="subheader stage_title">Midgar</h2>
      <div id="FFVII" class="stage_first"></div>
      <p>Dans Final Fantasy VII, difficile de faire plus mémorable que la cité Mako de Midgar, ses taudits, sa plaque et le bâtiment érigé en son centre !<br>
      Cette arène est sans aucun doute celle ayant le plus d'obstacles sur le terrain, ce labyrinthe d'architectures métalliques posera problème aux tireurs ! En fin de combat, l'approche du météore et la destruction qu'il entraîne, changera grandement l'apparence de l'arène !</p>
      <div class="stage_images" v-viewer="{toolbar: false}">
        <img src="../assets/arenas/07_a.jpg"><img src="../assets/arenas/07_b.jpg">
      </div>
    </div>
    <div class="stage_category">
      <h2 class="subheader stage_title">Plaine du rendez-vous</h2>
      <div id="FFVIII" class="stage_first"></div>
      <p>L'endroit choisi pour représenter Final Fantasy VIII dans ce Dissidia, n'est autre que la zone dans laquelle Squall se retrouve après le combat final. Il est également fortement présent dans la scène d'introduction du jeu.<br>
      Les deux aspects de cet endroit sont représentés dans l'arène, passé un certain temps, les ténèbres de la compression temporelle se dissipent afin de faire place au champ de fleurs de la promesse !</p>
      <div class="stage_images" v-viewer="{toolbar: false}">
        <img src="../assets/arenas/08_a.jpg"><img src="../assets/arenas/08_b.jpg">
      </div>
    </div>
    <div class="stage_category">
      <h2 class="subheader stage_title">Alexandrie</h2>
      <div id="FFIX" class="stage_first"></div>
      <p>C'est dans la très colorée ville d'Alexandrie que les joueurs ont découvert Final Fantasy IX, sa musique, son ambiance, ses personnages sont très représentatifs de ce qui fait l'âme de ce jeu. C'est pour cette raison que les développeurs ont choisi ce lieu pour le représenter dans ce nouveau Dissidia.<br>
      C'est une petite arène circulaire avec une structure incassable en son centre et de nombreux obstacles sur sa périphérie. L'apparition d'Alexandre derrière le chateau en milieu de combat, donne vraiment une ambiance spéciale à cet endroit.</p>
      <div class="stage_images" v-viewer="{toolbar: false}">
        <img src="../assets/arenas/09_a.jpg"><img src="../assets/arenas/09_b.jpg">
      </div>
    </div>
    <div class="stage_category">
      <h2 class="subheader stage_title">Île de Besaid</h2>
      <div id="FFX" class="stage_first"></div>
      <p>C'est sur cette île de Besaid que Tidus fait la rencontre de ses futurs compagnons de voyages. La chaleur de cette plage est gravé dans les souvenirs de tous les joueurs de Final Fantasy X. Dans cette arène, le soleil finira par se coucher au bout d'un certain temps, faisant apparaitre des furolucioles. Cette nouvelle ambiance rappelera également une scène emblématique de l'île de Kilika.<br>Le terrain est totalement plat et il est possible de marcher sur l'eau très peu profonde, mais attention à ne pas se laisser surprendre et enfermer dans la petite crique excentrée de la plage principale.</p>
      <div class="stage_images" v-viewer="{toolbar: false}">
        <img src="../assets/arenas/10_a.jpg"><img src="../assets/arenas/10_b.jpg">
      </div>
    </div>
    <div class="stage_category">
      <h2 class="subheader stage_title">Axe stellaire</h2>
      <div id="FFXI" class="stage_first"></div>
      <p>Il est vrai qu'en France, peu de joueurs connaissent cet endroit, mais pour ceux qui ont joué à Final Fantasy XI, l'Axe Stellaire est un endroit très fort. C'est ici que les joueurs ont du affronter les terribles Arckanges.<br>L'arène circulaire est divisée en trois parties, séparées par des ponts de la périphérie à la structure centrale. Ces trois parties sont importantes pour établir une stratégie car elles sont relativement petites, si les six joueurs sont regroupés dans la même partie, il faudra être très vigilant car les esquives seront compliquées.</p>
      <div class="stage_images" v-viewer="{toolbar: false}">
        <img src="../assets/arenas/11_a.jpg"><img src="../assets/arenas/11_b.jpg">
      </div>
    </div>
    <div class="stage_category">
      <h2 class="subheader stage_title">Cité royale de Rabanastre</h2>
      <div id="FFXII" class="stage_first"></div>
      <p>L'architecture de la majestueuse Rabanastre est vraiment reconnaissable et emblématique dans Final Fantasy XII. Si cette cité a vu Vaan grandir, il aura vu cette dernière tomber et être occupée par l'empire d'Arcadia. L'aventure de Vaan débute dans cette ville et se termine dans ses cieux. La bataille finale est d'ailleurs visible dans cette arène au bout de quelques minutes de combat.<br>L'arène est rectangulaire, la place principale menant au palais au centre et des couloirs surélevés sur les côtés. Il faudra vraiment se diriger vers la périphérie de l'arène pour réaliser des combos avec l'aide du mur.</p>
      <div class="stage_images" v-viewer="{toolbar: false}">
        <img src="../assets/arenas/12_a.jpg"><img src="../assets/arenas/12_b.jpg">
      </div>
    </div>
    <div class="stage_category">
      <h2 class="subheader stage_title">Eden</h2>
      <div id="FFXIII" class="stage_first"></div>
      <p>Eden est la capitale de Cocoon mais également le siège du Sanctum. C'est la destination finale de Lightning et ses compagnons pour accomplir leur tâche de L'Cie et renverser le Fal'Cie Barthandelus.<br>Eden est une arène rectangulaire longue mais étroite, il faudra donc faire très attention aux murs latéraux. L'absence totale d'obstacle offre une visiblité parfaite aux joueurs, et surtout aux tireurs qui ont le champ libre pour fusiller leurs adversaires.</p>
      <div class="stage_images" v-viewer="{toolbar: false}">
        <img src="../assets/arenas/13_a.jpg"><img src="../assets/arenas/13_b.jpg">
      </div>
    </div>
    <div class="stage_category">
      <h2 class="subheader stage_title">Porta decumana</h2>
      <div id="FFXIV" class="stage_first"></div>
      <p>Dans Final Fantasy XIV, Porta decumana est l'endroit où est entreposée l'Ultima Arma, dans les profondeurs du Praetorium. Heureusement dans Dissidia NT, la terrible machine n'est pas au rendez-vous ! C'est donc dans ce lieu où se déroule le combat final de A Realm Reborn que les guerriers de Matéria et Spiritus vont s'affronter.<br>Quatre pilliers se situent aux coins de cette arène carrée et plate, sans aucun obstacle. Les murs de l'arène exploseront très rapidement pour y laisser un décor de destruction.</p>
      <div class="stage_images" v-viewer="{toolbar: false}">
        <img src="../assets/arenas/14_a.jpg"><img src="../assets/arenas/14_b.jpg">
      </div>
    </div>
    <div class="stage_category">
      <h2 class="subheader stage_title">Insomnia</h2>
      <div id="FFXV" class="stage_first"></div>
      <p>La place de la citadelle d'Insomnia, capitale du Lucis a vu le depart du prince Noctis, puis le retour du roi. Les deux versions de cette arene representent ces deux moments de la vie du protagoniste de Final Fantasy XV.<br>De nuit les combats des forces de Materia et de Spiritus se feront sous les regards des anciens rois du Lucis.</p>
      <div class="stage_images" v-viewer="{toolbar: false}">
        <img src="../assets/arenas/15_a.jpg"><img src="../assets/arenas/15_b.jpg">
      </div>
    </div>
    <div class="stage_category">
      <h2 class="subheader stage_title">Le Monastère d'Orbonne</h2>
      <div id="FFT" class="stage_first"></div>
      <p>Le Monastère d'Orbonne est l'endroit du tout premier affrontement de Final Fantasy Tactics. L'arène est reproduite très fidèlement, et les dénivelés en blocs carrés du jeu d'origine, bien que lissés, sont bien présents ici !<br>On retrouve même le fond vide d'origine, la pluie et la foudre du combat original. Mais où est Gaffgarion ?</p>
      <div class="stage_images" v-viewer="{toolbar: false}">
        <img src="../assets/arenas/16_a.jpg"><img src="../assets/arenas/16_b.jpg">
      </div>
    </div>
    <div class="stage_category">
      <h2 class="subheader stage_title">Place de la fontaine d'Akademeia</h2>
      <div id="FFT0" class="stage_first"></div>
      <p>Une place reliant l'entrée extérieure de l'établissement et sa porte d'entrée. Le bâtiment abrite le cristal de l'Oiseau Vermillon, qui confère aux gens son pouvoir magique.</p>
      <div class="stage_images" v-viewer="{toolbar: false}">
        <img src="../assets/arenas/17_a.jpg"><img src="../assets/arenas/17_b.jpg">
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from './shared/PageTitle'
import ScrollTo from '../mixins/scroll'

export default {
  name: 'stages',
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

div.intro p:first-child {
  font-size: 1.1em;
  line-height: normal;
}

div.intro p:last-child {
  margin-bottom: 0;
}

h2.stage_title {
  padding-top: 0;
  font-size: 24px;
}

div.stage_first {
  max-width: 800px;
  height: 230px;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 auto;
  margin-bottom: 10px;
}

div.stage_category {
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

div.stage_category p {
  text-align: left;
  padding: 0 20px;
}

.stage_info table {
  width: 100%;
  overflow: hidden;
  text-align: center;
  border-collapse: collapse;
  filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.5));
}
.stage_info thead {
  display:table-header-group;
  vertical-align: middle;
  border-color: inherit;
}
.stage_info tr {
  display:table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.stage_info th {
  text-transform: uppercase;
  font-family: 'DissidiaFont', sans-serif;
  font-size: 16px;
  padding: 0;
  padding-bottom: 18px;
}
.stage_info tbody {
  font-family: 'Open Sans', sans-serif;
  background-color: #bdbdbd;
}

.stage_info tbody td.when {
  background-color: rgba(39,49,83,.2);
  vertical-align: middle;
  text-align: center;
  font-size: 14px;
  width: 120px;
  padding: 10px 10px;
  color:#212121;
}

.stage_info tbody td {
  color:#212121;
}

.stage_info tbody tr:nth-child(even) {
  background-color: rgb(146, 148, 155);
  line-height: 30px;
  font-size: 14px;
  /*box-shadow: inset 0 -10px 7px -10px #273153, inset 10px 0 14px -10px #273153, inset -10px 0 14px -10px #273153;*/
}
.stage_info tbody tr:nth-child(odd) {
  font-weight: 700;
  /*box-shadow: inset 0 10px 7px -10px #273153, inset 10px 0 14px -10px #273153, inset -10px 0 14px -10px #273153; */
}

.stage_images {
  width: 100%;
  overflow: hidden;
}

.stage_images {
  width: 100%;
  overflow: hidden;
  font-size: 0;
  margin-top: 20px;
}

.stage_images img {
  width: 48.5%;
  cursor: pointer;
}

.stage_images img:first-child {
  margin-right: 2.5%;
}

.stages_FF {
  max-width: 1000px;
  margin: 0 auto;
}

a {
  display: inline-block;
  line-height: 0;
  font-size: 0;
  width: 160px;
  height: 140px;
  margin: 20px 15px;
  background-repeat: no-repeat;
  filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.5));
  cursor: pointer;
}

a.ff1 {
  background-image: url('../assets/arenas/ff1.png');
}

a.ff2 {
  background-image: url('../assets/arenas/ff2.png');
}

a.ff3 {
  background-image: url('../assets/arenas/ff3.png');
}

a.ff4 {
  background-image: url('../assets/arenas/ff4.png');
}

a.ff5 {
  background-image: url('../assets/arenas/ff5.png');
}

a.ff6 {
  background-image: url('../assets/arenas/ff6.png');
}

a.ff7 {
  background-image: url('../assets/arenas/ff7.png');
}

a.ff8 {
  background-image: url('../assets/arenas/ff8.png');
}

a.ff9 {
  background-image: url('../assets/arenas/ff9.png');
}

a.ff10 {
  background-image: url('../assets/arenas/ff10.png');
}

a.ff11 {
  background-image: url('../assets/arenas/ff11.png');
}

a.ff12 {
  background-image: url('../assets/arenas/ff12.png');
}

a.ff13 {
  background-image: url('../assets/arenas/ff13.png');
}

a.ff14 {
  background-image: url('../assets/arenas/ff14.png');
}

a.ff15 {
  background-image: url('../assets/arenas/ff15.png');
}

a.fft {
  background-image: url('../assets/arenas/fft.png');
}

a.fft0 {
  background-image: url('../assets/arenas/fft0.png');
}

#FFI {
  background-image: url('../assets/arenas/01.png');
}

#FFII {
  background-image: url('../assets/arenas/02.png');
}

#FFIII {
  background-image: url('../assets/arenas/03.png');
}

#FFIV {
  background-image: url('../assets/arenas/04.png');
}

#FFV {
  background-image: url('../assets/arenas/05.png');
}

#FFVI {
  background-image: url('../assets/arenas/06.png');
}

#FFVII {
  background-image: url('../assets/arenas/07.png');
}

#FFVIII {
  background-image: url('../assets/arenas/08.png');
}

#FFIX {
  background-image: url('../assets/arenas/09.png');
}

#FFX {
  background-image: url('../assets/arenas/10.png');
}

#FFXI {
  background-image: url('../assets/arenas/11.png');
}

#FFXII {
  background-image: url('../assets/arenas/12.png');
}

#FFXIII {
  background-image: url('../assets/arenas/13.png');
}

#FFXIV {
  background-image: url('../assets/arenas/14.png');
}

#FFXV {
  background-image: url('../assets/arenas/15.png');
}

#FFT {
  background-image: url('../assets/arenas/16.png');
}

#FFT0 {
  background-image: url('../assets/arenas/17.png');
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
  div.stage_category {
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