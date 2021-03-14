<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
     <Lista-users/>
    </v-navigation-drawer>

    <v-app-bar app id="nav-bar" class="bar">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="title">Real Time Messenger</v-toolbar-title>
    </v-app-bar>
    <v-main class="main">
      <div>

      <router-view></router-view>
      </div>
      <imput/>
    </v-main>
  </v-app>
</template>
<script>
import Imput from './components/imput.vue';
import ListaUsers from './components/listaUsers.vue';
export default {
  name: "App",
  components: {ListaUsers, Imput },
  data(){ 
    return{
    drawer: null,
    }
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.bar{
  background-color: #2C5364 !important;
}
.bar .title{
  margin: 0 auto;

}
  .main{
    background: #0F2027;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }
  #inspire{
    background-color: #2C5364 !important;
  }
</style>
