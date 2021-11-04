<template>
  <v-list nav flat>
    <v-list-item-group
      v-model="group"
    >
      <v-list-item :key="item.NAME" v-for="item in DRAWER_DATA">
        <v-icon>{{ item.ICON }}</v-icon>
        <v-list-item-title class="ml-3"> {{ item.NAME }}</v-list-item-title>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { DRAWER_DATA } from '@/data/menu/navbar';

export default {
  name: 'DrawerMenuItems',
  props: {
    smallScreen: {
      type: Boolean,
    },
  },
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
