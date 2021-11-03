<template>
  <v-card elevation="0" class="cardMain text-center mt-2" outlined>
    <v-card-title>{{ CARD_DATA[this.cardNumber].TITLE }}</v-card-title>
    <v-card-text>{{ CARD_DATA[this.cardNumber].DESCRIPTION }}</v-card-text>
    <a
      v-if="CARD_DATA[this.cardNumber].HREF"
      :href="CARD_DATA[this.cardNumber].HREF"
      target="_blank"
    >{{ CARD_DATA[this.cardNumber].TYPE_LINK }}
    </a>
  </v-card>
</template>

<script>
import { CARD_DATA } from '@/data/card/cards';

export default {
  /*
  * Define what information will be used inside the card, according to Array publication.
  */
  props: {
    cardNumber: Number,
  },
  created() {
    this.CARD_DATA = CARD_DATA;
  },
};
</script>

<style lang="scss">
.cardMain {
  opacity: 0.5;
}
</style>
