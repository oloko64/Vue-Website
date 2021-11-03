<template>
  <div class="about">
      <v-container>
        <v-row class="justify-center mt-4 mb-4">
          <v-col
            class="d-flex justify-center"
            :key="item.ID"
            cols="auto"
            md="4"
            v-for="item in CARD_DATA"
          >
          <card-custom :card-number="item.ID"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardCustom from '@/components/card/CardCustom.vue';
import { CARD_DATA } from '@/data/card/cards';

export default {
  components: {
    CardCustom,
  },
  created() {
    this.CARD_DATA = CARD_DATA;
  },
};
</script>

<style lang="scss" scoped>
.about {
  background-image: url("https://i.imgur.com/pzKawbZ.png");
  background-position: center center;
  background-size: cover;
  height: 100%;
}
</style>
