<template>
  <div class="footer-main">
    <v-footer class="main-footer pa-10" padless>
      <v-container class="d-flex">
        <v-row no-gutters class="justify-space-around">
          <v-col class="text-center mt-4 my-auto px-4" cols="7">
            <h2 class="grey--text">{{ SOBRE_USER_DATA.SOBRE }}</h2>
            <p class="grey--text text--darken-2">{{ SOBRE_USER_DATA.DESCRIPTION }}</p>
          </v-col>
          <v-col cols="auto" class="text-center my-auto px-4">
            <h3 class="grey--text">{{ LINKS_USER_DATA.LINKS }}</h3>
            <a :href="LINKS_USER_DATA.LINK_GITHUB" target="_blank">{{ LINKS_USER_DATA.GITHUB }}</a>
            <v-spacer/>
            <a :href="LINKS_USER_DATA.LINK_LINKEDIN" target="_blank">
              {{ LINKS_USER_DATA.LINKEDIN }}
            </a>
            <h3 class="grey--text">{{ LINKS_USER_DATA.FULL_NAME }}</h3>
            <p class="grey--text text--darken-2">{{ LINKS_USER_DATA.EMAIL }}</p>
          </v-col>
          <v-col cols="auto" class="text-center my-auto px-4">
            <h3 class="grey--text">{{ LINKS_USER_DATA.ENDERECO }}</h3>
            <p class="grey--text text--darken-2">{{ LINKS_USER_DATA.ENDERECO_LOCATION }}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
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

<style lang="scss" scoped>
.footer-main {
  .main-footer {
    font-family: "Roboto", sans-serif;
  }

  .main-footer h2 {
    font-weight: normal;
    font-size: 2.5em;
  }
}
</style>
