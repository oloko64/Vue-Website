<template>
  <div class="about">
    <v-row>
      <v-spacer />
      <v-col cols="4">
        <card-custom card-number="0"/>
      </v-col>
      <v-col cols="4">
        <card-custom card-number="1"/>
      </v-col>
      <v-spacer />
    </v-row>
  </div>
</template>

<script>
import CardCustom from '@/components/card/CardCustom.vue';

export default {
  components: {
    CardCustom,
  },
};
</script>
