<template>
  <v-footer class="mainFooter" padless>
    <v-container>
      <v-row no-gutters>
        <v-col class="text-center mt-4" cols="7">
          <h2>{{ SOBRE_USER_DATA.SOBRE }}</h2>
          <p>{{ SOBRE_USER_DATA.DESCRIPTION }}</p>
        </v-col>
        <v-col cols="auto" class="text-lg-center">
          <h3>{{ LINKS_USER_DATA.LINKS }}</h3>
          <a :href="LINKS_USER_DATA.LINK_GITHUB" target="_blank">{{ LINKS_USER_DATA.GITHUB }}</a>
          <br/>
          <a :href="LINKS_USER_DATA.LINK_LINKEDIN" target="_blank">
            {{ LINKS_USER_DATA.LINKEDIN }}
          </a>
          <br/>
          <br/>
          <h3>{{ LINKS_USER_DATA.FULL_NAME }}</h3>
          <p>{{ LINKS_USER_DATA.EMAIL }}</p>
        </v-col>
        <v-col cols="auto">
          <h3>{{ LINKS_USER_DATA.ENDERECO }}</h3>
          <p>{{ LINKS_USER_DATA.ENDERECO_LOCATION }}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import { SOBRE_USER_DATA, LINKS_USER_DATA } from '@/data/footer/profile';

export default {
  created() {
    this.SOBRE_USER_DATA = SOBRE_USER_DATA;
    this.LINKS_USER_DATA = LINKS_USER_DATA;
  },
};
</script>

<style>
.mainFooter {
  font-family: "Roboto", sans-serif;
  padding: 50px;
}
.mainFooter a:hover {
  color: #627482;
}
.mainFooter h2 {
  color: #989c9e;
  font-weight: normal;
  font-size: 2.5em;
}
.mainFooter h3 {
  font-size: 1em;
  color: #989c9e;
}
.mainFooter p {
  color: #627482;
}

</style>
