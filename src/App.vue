<template>
  <div id="app">
    <div class="parentNav">
      <div id="nav">
        <router-link to="/">Accueil</router-link> |
        <router-link to="/about">A propos</router-link> |
        <router-link to="/meteo">meteo</router-link> |
      </div>
    </div>
    <router-view />
    <footer><p>&copy; Léo Bocal Academy 2021</p></footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.parentNav {
  justify-content: center;
  background-color: rgb(66, 135, 245);
}
#nav {
  padding: 30px;
}
footer {
  width: 100%;
  height: 10vh;
  background-color: rgb(66, 135, 245);
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  color: white;
}
#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  margin: 0px;
}
</style>
