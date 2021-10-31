<template>
  <v-list nav>
    <v-list-item-group
      v-model="group"
      active-class="deep-purple--text text--accent-4"
    >
      <v-list-item>
        <v-list-item-title>{{ DRAWER_DATA.FOO }}</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-title>{{ DRAWER_DATA.BAR }}</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-title>{{ DRAWER_DATA.FIZZ }}</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-title>{{ DRAWER_DATA.BUZZ }}</v-list-item-title>
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
