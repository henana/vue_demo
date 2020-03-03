<template>
  <div id="app">
    <router-link to='/a'>Core Docs</router-link>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from'./components/HelloWorld'
export default {
  name:'App'
 //components:{A},
 //components:{B}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
