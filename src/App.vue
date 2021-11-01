<template>
  <v-app>
    <app-nav-bar/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppNavBar from '@/components/navigation/AppNavBar.vue';

export default {
  name: 'App',
  components: {
    AppNavBar,
  },
};
</script>
