<template>
  <div class="header-main">
    <a href="#" class="home-header">Home</a>
    <ul class="d-flex">
      <li>
        <a href="#">Sobre</a>
      </li>
      <li>
        <a href="#">Portfólio</a>
      </li>
      <li>
        <a @click="openOptions">Mais <v-icon color="orange darken-2">mdi-plus</v-icon></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header-main {
  display: flex;
  background-color: rgba(22, 22, 22, 0.8);
  text-align: center;
  padding: 16px 8px;
  font-family: "Roboto", sans-serif;
  height: 60px;
}

.home-header {
  color: white;
  font-size: 20px;
  padding-right: 14px;
  padding-top: 0px;
}

ul {
  display: flex;
  padding-top: 5px;
}

a {
  padding: 8px;
  color: rgba(255,255,255,0.55);
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  color: white;
}
</style>
