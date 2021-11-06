<template>
  <div class="Home">
    <h1 class="text-center mt-4">{{ HOME_DATA.FULL_NAME }}</h1>
    <v-row  class="my-8">
      <v-spacer />
      <v-col align="right" cols="4">
        <v-img
          max-height="350"
          max-width="350"
          :src="HOME_DATA.IMAGE_PROFILE()"
        />
      </v-col>
      <v-col cols="4">
        <p>{{ HOME_DATA.DESCRIPTION }}</p>
      </v-col>
      <v-spacer />
    </v-row>
    <!--
     it is not necessary to remove
     this component "in-progress",
     if you are at work just pass
     :progress="true",
     progress default is false.
   -->
    <in-progress/>
  </div>
</template>

<script>
import inProgress from '../components/inProgress.vue';
import { HOME_DATA } from '../data/home/home';

export default {
  name: 'Home',

  components: {
    inProgress,
  },
  created() {
    this.HOME_DATA = HOME_DATA;
  },
};
</script>
