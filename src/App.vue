<template>
  <div id="app">
    <div id="header">
      <img class="logo" src="./assets/logo.png">
      <navbar></navbar>
    </div>
    <div id="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>

html { 
    -webkit-text-size-adjust: none; 
}

body {
  background-color: #0b0b0b;
  background-image: url('./assets/bg_ff2.jpg');
  background-repeat: no-repeat;
  background-position: top center;
  margin: 0;
/*  overflow-y: scroll;
  overflow-x: hidden;*/
/*  min-width: 1000px;*/
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#header {
  margin: 0 auto;
}
#header img {
  margin-bottom: 15px;
  max-width: 90%;
}
#main {
  border-top: 1px solid #666;
  background-image: url('./assets/bg.jpg');
  background-repeat: no-repeat, repeat-y;
  background-position: center top;
  position: relative;
  background-color: transparent;
/*  height: 100vh;*/
}
div.page {
  color: #ccd6dd;
  /*background: url('../assets/section_bg.png') no-repeat right top;*/
}
div.subheader h2 {
  width: 100%;
  background-color: #2d2f32;
  margin: 0;
  padding: 15px 0;
}
p {
  margin: 0;
  margin-bottom: 15px;
}
.modal-open {
  overflow: hidden;
}
</style>
