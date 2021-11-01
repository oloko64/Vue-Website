<template>
  <v-list nav flat>
    <v-list-item-group
      v-model="group"
    >
      <v-list-item>
        <v-icon>mdi-github</v-icon>
        <v-list-item-title class="ml-3"> {{ DRAWER_DATA.FIRST }}</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-icon>mdi-code-not-equal-variant</v-icon>
        <v-list-item-title class="ml-3">{{ DRAWER_DATA.SECOND }}</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-title>{{ DRAWER_DATA.THIRD }}</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-title>{{ DRAWER_DATA.FOURTH }}</v-list-item-title>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { DRAWER_DATA } from '@/data/menu/navbar';

export default {
  name: 'DrawerMenuItems',

  data() {
    return {
      group: null,
    };
  },
  created() {
    this.DRAWER_DATA = DRAWER_DATA;
  },
};
</script>
