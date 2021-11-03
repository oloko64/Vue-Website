<template>
  <div class="app-nav-bar">
    <v-app-bar v-resize="onResize" height="64" hide-on-scroll flat app>
      <v-app-bar-nav-icon :class="darkColorHover" @click.stop="drawer = !drawer"/>
      <v-btn :class="darkColorHover" text height="64" @click="handleHome">
        <h2>{{ TOP_MENU_DATA.HOME }}</h2>
      </v-btn>
      <v-spacer/>
      <v-btn
        :class="darkColorHover"
        text height="64"
        @click="handleAbout"
      >
        {{ TOP_MENU_DATA.ABOUT }}
      </v-btn>
      <v-btn
        :class="darkColorHover"
        height="64"
        text
        v-if="!smallScreen"
      >
        {{ TOP_MENU_DATA.PORTFOLIO }}
      </v-btn>
      <v-switch
        v-model="$vuetify.theme.dark"
        :prepend-icon="themeIcon"
        hide-details
        inset
      />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary app>
      <drawer-menu-items :small-screen="smallScreen" />
    </v-navigation-drawer>
  </div>
</template>

<script>
import DrawerMenuItems from '@/components/navigation/DrawerMenuItems.vue';
import { TOP_MENU_DATA } from '@/data/menu/navbar';
import narrowScreen from '@/helpers/general/screen';

export default {
  name: 'AppNavBar',
  components: {
    DrawerMenuItems,
  },
  data() {
    return {
      windowSize: {
        x: 0,
        y: 0,
      },
      drawer: false,
      group: null,
    };
  },
  created() {
    this.TOP_MENU_DATA = TOP_MENU_DATA;
  },
  mounted() {
    this.onResize();
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  computed: {
    darkColorHover() {
      return this.$vuetify.theme.dark ? 'hover-color' : '';
    },
    smallScreen() {
      return narrowScreen(this.windowSize);
    },
    themeIcon() {
      return this.$vuetify.theme.dark ? 'mdi-weather-night' : 'mdi-brightness-6';
    },
  },
  methods: {
    onResize() {
      this.$store.dispatch('updateWindowSize', { x: window.innerWidth, y: window.innerHeight });
      this.windowSize = this.$store.getters.windowsSizeStore;
    },
    handleAbout() {
      const path = '/about';
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
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

<style lang="scss" scoped>
.app-nav-bar {
  .hover-color:hover {
    color: $color-dark-primary-hover;
  }

  .hover-color::before {
    color: $color-dark-primary-hover;
  }
}
</style>
