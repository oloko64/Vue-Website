<template>
  <div class="time-line-main">
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="card in CARD_TIMELINE_DATA"
        :key="card.ID"
      >
        <span
          slot="opposite"
          v-if="card.OPPOSITE_DESCRIPTION"
        >
          {{ card.OPPOSITE_DESCRIPTION }}
        </span>
        <card-custom :card-number="card.ID"/>
      </v-timeline-item>
    </v-timeline>
  </div>

</template>

<script>
import CardCustom from '../card/CardCustom.vue';
import { CARD_TIMELINE_DATA } from '../../data/card/cards';

export default {
  components: {
    CardCustom,
  },
  created() {
    this.CARD_TIMELINE_DATA = CARD_TIMELINE_DATA;
  },
};
</script>

<style lang="scss" scoped>
.time-line-main {}
</style>
