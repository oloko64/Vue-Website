<template>
  <v-app>
    <v-app-bar app flat height="64">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn text height="64" @click="handleHome">
        <h2>{{ TOP_MENU_DATA.HOME }}</h2>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text height="64" @click="handleAbout">{{ TOP_MENU_DATA.ABOUT }}</v-btn>
      <v-btn text height="64">{{ TOP_MENU_DATA.PORTFOLIO }}</v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary app>
      <drawer-menu-items />
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import DrawerMenuItems from '@/components/navigation/DrawerMenuItems.vue';
import { TOP_MENU_DATA } from '@/data/menu/navbar';

export default {
  name: 'App',
  components: {
    DrawerMenuItems,
  },

  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  created() {
    this.TOP_MENU_DATA = TOP_MENU_DATA;
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    // TODO - Improve logic
    handleAbout() {
      const path = '/about';
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
      // this.$router.push({ name: 'About' });
    },
    handleHome() {
      const path = '/';
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
  },
};
</script>
