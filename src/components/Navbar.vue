<template>
  <ul>
    <li><router-link :to="{ name: 'home' }">Accueil</router-link></li>
    <li><router-link :to="{ name: 'news' }">Actualités</router-link></li>
    <li><router-link :to="{ name: 'characters' }">Personnages</router-link></li>
    <li><router-link :to="{ name: 'guide' }">Guide</router-link></li>
    <li><router-link :to="{ name: 'home' }">Forum</router-link></li>
    <li><router-link :to="{ name: 'search' }">Rechercher</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style scoped>
ul {
  background-color: rgb(135,98,106);
  list-style-type: none;
  width: 100%;
  height: 46px;
  margin: 0;
  padding: 0;
/*  border: 1px solid #c2c4c1;*/
}

li {
  display: inline-block;
  margin:0;
  /*border-right: 1px solid #c2c4c1;*/
}

li:last-child {
  float: right;
  border: none;
  /*border-left: 1px solid #c2c4c1;*/
  border-right: none;
}

a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  padding: 15px;
  display: block;
}
</style>
