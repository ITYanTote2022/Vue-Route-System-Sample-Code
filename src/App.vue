<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/jobs">Jobs</router-link>
  </nav>
  <router-view/>
  <button @click="redirect">Redirect</button>
  <button @click="goForward">Forward</button>
  <button @click="goBackward">Backward</button>
</template>

<script>
export default {
        methods:
        {
          redirect(){
            this.$router.push({name: 'home'});
          },
          goForward(){
            this.$router.go(1);
          },
          goBackward(){
            this.$router.go(-1);
          }
          
        }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  background-color: crimson;
  color: white;
  border-radius: 10px;
  padding: 10px;
}
</style>
