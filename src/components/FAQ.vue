<template>
  <div class="faq">
    <page-title titleValue="Questions/Réponses" />
    <h2 class="subheader">Questions/Réponses</h2>
    <div class="intro">
      <p>Vous avez une question sur l'un des jeux de la série Dissidia ou même sur le site Dissidia France ?</p>
      <p>Vous trouverez sans doute une réponse sur cette page !<br>Si votre question ne figure pas dans cette liste, n'hésitez pas à nous contacter sur Twitter à <a href="https://twitter.com/dissidia_france" target="_blank">@dissidia_france</a>.</p>
      <ul>
        <li @click="scrollTo('#faq_nt')">Questions sur <span>Dissidia NT</span></li>
        <li @click="scrollTo('#faq_arc')">Questions sur <span>Dissidia Arcade</span></li>
        <li @click="scrollTo('#faq_oo')">Questions sur <span>Dissidia Opera Omnia</span></li>
        <li @click="scrollTo('#faq_psp')">Questions sur <span>Dissidia</span> et <span>Dissidia Duodecim (PSP)</span></li>
        <li @click="scrollTo('#faq_df')">Questions sur <span>Dissidia France</span></li>
      </ul>
    </div>
    <h2 id="faq_nt" class="subheader dark faq_title">Questions sur Dissidia NT</h2>
    <div class="faq_category">
      <p>Qu'est-ce que Dissidia Final Fantasy NT ?</p>
      <p>Dissidia Final Fantasy NT est un jeu de combat voyant s'affronter deux équipes de trois joueurs dans une arène ouverte en 3D avec des personnages venant des épisodes de la série Final Fantasy. C'est une adaptation de la version Arcade de Dissidia Final Fantasy sortie en novembre 2015.</p>
      <p>Je me rappelle des épisodes sur PSP qui étaient en 1 contre 1.<br>Pourquoi celui-ci est en 3 contre 3 ?</p>
      <p>Les développeurs ont estimé avoir atteint le maximum du potentiel du système de jeu en 1 contre 1 avec Dissidia Duodecim et ont fait le choix pour ce nouveau jeu d'aller vers un système à 3 contre 3 pour mettre en avant le travail d'équipe. Dans les Final Fantasy vous combattez avec une équipe de personnages et non pas avec un seul personnage. C'est ce qui les a motivé à faire ce choix.</p>
      <p>D'accord, on ne peut donc pas jouer en 1 contre 1 ?</p>
      <p>Si il est possible de jouer en 1 contre 1, ou même en 2 contre 2 voir même 1 contre 2 ou 1 contre 3.<br>Les parties libres vous permettent de faire toutes les configurations de combats que vous voulez mais le mode classé lui ne s'appliquera que pour le 3 contre 3.<br> Il faut savoir que même si le jeu vous permet des configurations personnalisées, le jeu est pensé pour du 3 contre 3. C'est un jeu en équipe mettant en avant l'esprit d'équipe et l'entraide. Les personnage sont donc développés et leurs coups sont conçus avec ce concept en ligne directrice.<br> Ca veux dire que si en équipe tous les persos sont équilibrés et se completent, en un contre un vous risquez de trouver des personnages beaucoup plus forts que d'autres et constater un fort déséquilibre.</p> 
      <p>Je trouve le jeu beaucoup trop bordélique avec 6 personnages à l'écran, j'ai du mal à suivre l'action.</p>
      <p>Il faut savoir que ce système de combat en équipe est un format très populaire au japon mais vraiment méconnu en occident ce qui peut effectivement nous donner cette incompréhension et ce sentiment. C'est difficile de se lancer d'un coup dans Dissidia NT et il faut jouer quelques heures avant de commencer à comprendre ce qui se passe à l'écran, quoi regarder et comment réagir à ce que vous voyez.</p>
      <p>Je trouve également l'interface trop chargée.</p>
      <p>Dissidia NT propose deux interfaces différentes. L'interface de la version arcade et une interface plus épurée pour permettre plus de visibilité à l'écran.<br>L'une comme l'autre proposent exactement les mêmes informations à l'écran mais la différence se fait sur le placement et la taille des éléments.</p>
      <p>Soit mais je trouve l'interface épurée encore trop chargée, il y a trop de choses inutiles à l'écran.</p>
      <p>Tous les éléments à l'écran sont pourtant utiles. Dans ce jeu à 3 contre 3 il faut vraiment comprendre que vous ne jouez pas seul. Il ne s'agit pas là d'un triple 1 contre 1. C'est donc important de pouvoir connaître à tout moment le montant restant des points de vies de vos alliés et des vos ennemis ainsi que le montant de leur bravoure accumulée. Le radar est également utile puisqu'il permet de savoir en un coup d'oeil sur un plan en 2D où se situent tous les personnages ainsi que les cibles de chacun.<br>
      Encore une fois il faut prendre le temps d'apprivoiser tout ces éléments au fil des combats, il y a beaucoup d'informations utiles à l'écran. Prenez votre temps.</p>
      <p>Sur PSP on pouvait avoir plusieurs attaques de PV.<br>Ici j'en ai certes quatre mais je ne peux en choisir qu'une seule pour le combat.</p>
      <p>Le format en 1 contre 1 permettait aux personnages d'avoir plusieurs attaques de PV car vous n'aviez qu'un seul adversaire en face vous, ici sur du 3 contre 3 si les six personnages disposaient de plusieurs attaques de PV aux propriétés différentes il aurait été impossible d'anticipier et de réagir à autant d'attaques différentes.<br>
      Ici vos trois adversaires choisissent chacun une attaque parmi leurs quatre attaques disponibles et le fait de pouvoir les voir lors du chargement du combat vous permet de savoir à quoi vous attendre. C'est donc un choix de jeu voulu afin de permettre aux joueurs de choisir leur attaque et s'adapter aux ennemis qui vous font face.</p>
      <p>Il n'y a également plus les EX modes et les EX bursts ?</p>
      <p>Les EX modes sont remplacés par les compétences EX personnelles. Elles ne transforment plus le personnage comme sur PSP, sauf pour quelques uns, mais apportent des améliorations notables à vos personnages. Les EX Burst eux ont par contre été totalement retirés. Ils étaient certes spectaculaire et étaient très chouette pour porter le coup fatal mais avec 6 personnages en combat ce n'était pas viable d'avoir une interruption de plusieurs secondes chaque fois qu'un joueur lance son EX Burst.</p>
      <p>Je n'ai pas l'habitude des jeux de combats, je vois dans les discussions pas mal de termes que tout le monde semble comprendre mais incompréhensibles pour moi...</p>
      <p>N'hésitez pas à faire un tour sur notre lexique ou un grand nombre de ces termes sont expliqués aux néophytes !</p>
      <p>Est-ce qu'il faut avoir un abonnement Playstation Plus pour jouer au jeu ?</p>
      <p>L'abonnement Playstation Plus est en effet nécessaire pour pouvoir jouer en ligne. Tous les autres modes de jeu sont cependant accessibles sans cet abonnement.</p>
      <p>J'ai vu qu'il y allait avoir un Season Pass, que va-t-il contenir ?</p>
      <p>Le Season Pass donnera l'accès à six nouveaux personnages qui arriveront dans le jeu au cours de l'année 2018. Chaque personnage arrivera avec un costume alternatif, des couleurs alternatives ainsi que deux armes supplémentaires.</p>
      <p>Je préfère du coup attendre la fin de l'année 2018 que tous les personnages soient sortis pour acheter le jeu.</p>
      <p>C'est votre choix mais il faut savoir que lorsque le jeu est sorti sur les bornes d'Arcade au Japon en 2015 il ne comptait que 14 personnages. En 2016 et 2017 le jeu s'est vu étoffé de nombreux personnages pour arriver au chiffre de 28 à la sortie de Dissidia NT.<br>
      Il y aura donc probablement encore six nouveaux personnages ajoutés en 2019 et peut-être même en 2020, soyons fous, selon les envies des développeurs et le succès du jeu.<br>A l'ère d'aujourd'hui, c'est assez fréquent pour des jeux de combat qui ont une durée de vie de plusieurs années d'apporter toujours plus de nouveaux personnages chaque année.</p>
      <p>Dans le Season Pass il y a des personnages qui me font envie et d'autres pas du tout.<br>Est-ce que je peux acheter uniquement ceux qui m'intéressent ?</p>
      <p>Il est en effet possible d'acheter les personnages à l'unité plutôt que de prendre la totalité du Season Pass. En achetant un personnage à l'unité vous aurez également son costume, ses couleurs alternatives et ses armes.</p>
      <p>Est-ce "tel personnage" sera ajoutée au jeu ?</p>
      <p>Les personnages à venir ne sont malheureusement pas connus et seront dévoilés quelques jours avant leur arrivée sur la version Arcade du jeu. Il faudra attendre environ un mois après la sortie d'un personnage sur la version Arcade pour qu'il arrive sur console.</p>
      <p>Certains personnages des versions PSP ne sont pas dans Dissidia NT, est-ce qu'ils vont faire leur retour ?</p>
      <p>Les développeurs ont donné quelques indices sur les personnages composant le Season Pass 2018 et l'un d'entre eux est effectivement un personnage des versions PSP qui pour l'instant manque à l'appel. Pour les autres il faudra s'armer de patience mais les développeurs ont exprimé le souhait de faire revenir tous les anciens personnages des opus PSP mais tiennent quand même a apporter de la nouveauté.</p>
      <p>A quoi servent les armes ?<br>Elles ont une incidence sur la force des personnages ?</p>
      <p>Non les armes comme les costumes n'ont ici qu'un but cosmétique afin de donner à votre personnage l'apparence que vous préférez.</p>
      <p>Vont-ils également ajouter de nouvelles arènes ou de nouvelles invocations ?<br>De nouveaux costumes et armes ?</p>
      <p>Si le jeu suit le rythme tenu par la version Arcade lors de ses deux premières années alors oui nous pouvons nous attendre à voir de nouvelles arènes de combat être ajoutées. Alexander a été ajouté en invocation en 2016 et Bahamut en 2017 alors peut-être aurons nous une nouvelle divinité à invoquer en 2018 !<br>Un quatrième set d'armes à été ajouté sur la version Arcade en janvier 2018 juste avant la sortie de Dissidia NT. Ces armes sont bien entendues déjà disponibles sur notre version console. Pour ce qui est de nouveaux costumes rien n'est certain car le travail demandé pour réaliser ces costumes devient de plus en plus important à chaque nouveau personnage ajouté. Seul l'avenir nous le dira.</p>
      <p>Est-ce qu'il y a un mode entrainement ?</p>
      <p>Si vous débutez réellement nous ne pouvons que vous conseiller de réaliser le Tutoriel du jeu accessible depuis le menu principal afin d'apprendre les bases des touches, des déplacements, des actions offensives et défensives. Ensuite, s'il n'y a pas de mode entrainement à proprement parler, le mode Combat Libre vous permet de paramétrer un combat par exemple en 1 contre 1 où vous choisissez de mettre une intelligence artificielle (IA) nulle à l'adversaire ainsi qu'un temps de combat infini. De cette façon vous pourrez tester toutes les techniques de votre personnage sur un ennemi immobile.</p>
      <p>Je commence à m'entrainer et à progresser en mode Combat Express mais je n'arrête pas de perdre alors que je ne meurs pas.<br>Ce sont mes deux IA alliées qui n'arrivent à rien...</p>
      <p>Dans ce mode Combat Express le niveau de difficulté et d'IA des ennemis augmente au fil des combats alors que celui de vos alliés restent le même. C'est tout simplement parce que leur IA est basée sur le niveau, le rang que vous avez atteint avec ces personnages. S'ils sont trop faibles pour le moment en rang bronze face à des ennemis en rang platine par exemple, rassurez vous qu'ils se débrouilleront beaucoup mieux une fois que vous les aurez fait monter en rang.<br>Dissidia c'est aussi un Final Fantasy, il faut faire monter ses personnages !</p>
      <p>J'ai essayé le jeu en ligne mais les combats lagguent parfois...</p>
      <p>Comme tout jeu en ligne, nous vous conseillons de vous mettre dans les meilleurs conditions possibles. Privilégiez un réseau cablé au Wi-Fi si votre installation le permet, évitez de télécharger autre chose à coté etc. Maintenant si vous tombez sur un adversaire avec une faible connexion malheureusement là vous n'y pourrez rien.</p>
      <p>J'aimerai jouer en ligne avec des gens mais je n'ai pas d'amis qui jouent à ce jeu.</p>
      <p>La communauté Dissidia France est composée de nombreuses personnes amoureuses du jeu et de la série, n'hésitez pas à faire un tour sur notre forum ou notre serveur Discord pour trouver une multitude de personnes avec qui jouer, alliés comme rivaux !</p>
    </div>
    <h2 id="faq_arc" class="subheader faq_title dark">Questions sur Dissidia Arcade</h2>
    <div class="faq_category">
      <p>Maintenant que Dissidia NT est sorti, est-ce que la version Arcade va continuer d'être mise à jour ?</p>
      <p>Oui la version Arcade va continuer en paralèlle de la version console.</p>
      <p>Les serveurs sont communs entre la version Arcade et la version console ?</p>
      <p>Non les serveurs sont bien séparés, il est impossible aux joueurs des deux versions de s'affronter.</p>
      <p>Est-ce qu'il y a des différences entre les deux versions du coup ?</p>
      <p>La différence principale vient des modes de jeux. Sur la version Arcade seul le jeu en ligne et les missions sont disponibles. Il n'y a pas de mode histoire par exemple mais il y a un mode faction.<br>
      Les costumes, apparences d'armes et autres éléments cosmétiques se débloquent non pas à la boutique mais en montant le niveau des personnages.<br>
      Si le niveau des personnages est limité à 10 sur la version console, sur la version arcade le niveau 35 est le niveau maximum pour accéder aux éléments cités çi-dessus.</p>
      <p>Un mode faction ?</p>
      <p>Chaque joueur choisi d'appartenir à la faction de Matéria ou à la faction de Spiritus et sur la version Arcade les joueurs s'affrontent pour que leur faction soit au dessus de l'autre. Lorsqu'un nouveau contenu sort il est nécessaire d'accumuler des points pour les débloquer et la faction qui domine aura moins de chemin à parcourir que celle qui est en seconde place.</p>
    </div>
    <h2 id="faq_oo" class="subheader faq_title dark">Questions sur Dissidia Opera Omnia</h2>
    <div class="faq_category">
      <p>Je n'ai jamais entendu parler de ce Dissidia, qu'est-ce que c'est ?</p>
      <p>Dissidia Opera Omnia est un jeu mobile gratuit sorti sur les platesformes iOS et Android le 1er février 2017 au Japon et en janvier 2018 dans le reste du monde.</p>
      <p>Hmm... comme tous les jeux mobiles gratuits je suppose qu'il fonctionne via un système de Gacha/Loot-box et qu'il y a des microtransactions au sein du jeu.</p>
      <p>Effectivement comme beaucoup de jeux mobiles, il est possible d'acheter des "Gemmes" avec de l'argent réel. Les gemmes étant utilisées pour tirer au hasard des armes pour vos personnages mais aucun achat n'est obligatoire.</p>
      <p>C'est un jeu de combat comme les autres Dissidia ?</p>
      <p>Et bien non, Opera Omnia est un RPG très proches des anciens Final Fantasy avec un scénario découpé en chapitres et un système de combat au tour par tour mais qui garde de Dissidia son concept d'attaques divisées en deux types, Bravoure et PV ainsi qu'un casting très riche de personnages venant des différents épisodes de la série ! Le jeu tiens également régulièrement des évènement à durée limitée pour débloquer de nouveaux personnages et équipements.</p>
      <p>Mince ! Des évènements à durée limitée... Si j'en rate un je ne pourra plus avoir le personnage qu'il introduisait ?</p>
      <p>Les personnages sont rajoutés de deux façons différentes. Dans un premier temps les chapitres du scénario permettent de débloquer trois nouveaux personnages par chapitre, ces personnages sont disponibles définitivement dès leur introduction.<br>Le deuxième mode d'introduction c'est donc par les évènements limités qui durent en général deux semaines. Si vous n'avez pas pu participer à cet évènement vous manquerez le personnage et ses équipements.<br>Cependant pas de panique ! Tous les personnages issus d'évènements sont ajoutés pour de bon dans le jeu entre 4 à 6 mois après la fin de leur évènement via une zone permettant leur retour défintif.<br>Si vous avez manqué l'évènement d'un personnage il faudra juste faire preuve de patience ! A ce jour, sur la version japonaise du jeu, aucun contenu n'est définitivement manquable.</p>
      <p>On peut y jouer à plusieurs ?</p>
      <p>Certains contenus ne sont faisable qu'en solo alors d'autres ne sont faisables qu'en multijoueur. Enfin il y a des combats qui peuvent être faits en solo ou en multijoueur.</p>
      <p>Quand je regarde les actualités sur le site, je vois que vous différenciez Opera Omnia Japon et Opera Omnia Global. Il y a t'il des différences entre la version japonaise du jeu et la notre ?</p>
      <p>La version japonaise étant sortie un an plus tôt que la version globale, il y a des différences entres les deux jeux mais la majeure différence reste le "temps d'avance" qu'elle possède sur l'autre. Beaucoup de contenu est disponible sur la version japonaise mais ne l'est pas encore sur la globale mais ce n'est qu'une question de temps avant que cette dernière ne reçoive ces ajouts.</p>
      <p>Est-ce que "tel personnage" va être ajouté au jeu ?</p>
      <p>Nous essayons de tenir le plus à jour possible notre page personnages mais n'hésitez pas à suivre les actualités sur le site pour découvrir les nouveaux personnages ajoutés chaque mois !</p>
      <p>Avez vous des conseils pour devenir plus fort dans le jeu ?</p>
      <p>La force d'un personnage est déterminée par 3 éléments. Son niveau personnel, son niveau d'éveil aux cristaux, le niveau de son arme et de son armure.<br>
      Il faut donc à la fois faire monter son niveau en faisant des combats, mais aussi son niveau d'éveil aux cristaux en lui donnant des cristaux de sa couleur et enfin augmenter le niveau de ses équipements avec des matériaux d'améliorations que vous récupérez lors des combats.</p>
      <p>Qu'est-ce que vous conseillez comme personnage ou comme équipe ?</p>
      <p>Le casting d'Opera Omnia est suffisamment riche pour que vous y trouviez votre ou vos personnages favoris.<br>
      Tous les personnages sont différents et ils sont répartis sous plusieurs catégories comme par exemple l'attaquant au corps-à-corps, l'attaquant à distance, l'attaquant magique, le soigneur, les personnages de soutien qui vont augmenter la puissance de leurs alliés etc.<br> Il n'y a pas d'équipe "parfaite" et il est intéressant d'avoir un petit groupe d'une douzaine de personnages aux attributs différents pour pouvoir couvrir toutes les situations.<br>
      Le passage en force ne fonctionnera pas toujours.</p>
      <p>Certains combats sont beaucoup trop durs...</p>
      <p>N'hésitez pas à entrer en contact sur le forum ou sur Discord avec les membres de la communauté qui y jouent pour faire ces combats en multijoueur.</p>
    </div>
    <h2 id="faq_psp" class="subheader faq_title dark">Questions sur Dissidia et Dissidia Duodecim</h2>
    <div class="faq_category">
      <p>Allez vous faire une rubrique sur les deux jeux sur PSP ?</p>
      <p>Nous n'avons pas prévu de traiter le contenu des jeux PSP pour le moment, si la demande est forte on pourrait l'envisager une fois le contenu des jeux Dissidia récents à jour. N'hésitez pas à nous contacter si vous voulez voir les informations sur ces jeux traitées sur Dissidia France.</p>
      <p>Y a-t-il des membres de la communauté qui jouent encore en ligne à ces opus ?</p>
      <p>C'est possible que parmi la communauté certains y jouent encore. Nous vous invitons à consulter le Discord ou le Forum pour trouver des adversaires !</p>
    </div>
    <h2 id="faq_df" class="subheader faq_title dark">Questions sur Dissidia France</h2>
    <div class="faq_category">
      <p>Dissidia France c'est quoi ?</p>
      <p>Dissidia France est un site communautaire crée en 2007 afin de relayer les informations sur Dissidia Final Fantasy sorti en 2008 et également rassembler une communauté de joueurs autour du jeu.</p>
      <p>C'est un site officiel ?</p>
      <p>Non c'est un site réalisé bénévolement par des fans pour les fans et qui ne perçoit aucun revenu sur son activité.</p>
      <p>Est-ce que vous recrutez ? J'adore vraiment Dissidia et j'aimerai contribuer à faire grossir la communauté !</p>
      <p>Nous sommes toujours prêts à accueillir des volontaires souhaitant aider et contribuer à la communauté ! N'hésitez pas à nous contacter en privé sur les réseaux sociaux !</p>
    </div>
  </div>
</template>

<script>
import PageTitle from './shared/PageTitle'
import ScrollTo from '../mixins/scroll'

export default {
  name: 'faq',
  mixins: [ScrollTo],
  components: {
    PageTitle
  }
}
</script>

<style scoped>

div.intro, div.faq_category {
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
  background-color: rgba(39, 49, 83, 0.8);
  filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.5));
}

.intro a {
    text-decoration: none;
    color: #f96a6a;
}

.intro p:first-child {
  font-size: 1.1em;
  line-height: normal;
}

.intro ul:last-child {
  list-style: none;
  margin-bottom: 0;
  padding: 0 15px;
}

.intro li {
  margin: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: .25s all;
}

.intro li:hover {
  color: #f96a6a;
}

.faq_title {
  padding-bottom: 5px;
}

.faq_category p:nth-child(odd) {
  /*text-transform: uppercase;*/
  font-family: 'Verdana', sans-serif;
  font-size: 16px;
  margin: 10px;
}

.faq_category p:nth-child(even) {
  color: #212121;
  background-color: #acacac;
  font-family: 'Open Sans', sans-serif;
  border-left: 4px solid #272727;
  border-right: 2px solid #272727;
  font-size: 14px;
  line-height: normal;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  padding: 5px 10px;
  filter: drop-shadow(0px 5px 5px rgba(0,0,0,0.5));
}

li span {
  font-family: 'DissidiaFont';
}

@media screen and (max-width: 900px) {

  div.intro, div.faq_category {
    margin: 25px;
  }
}

</style>