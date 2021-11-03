<template>
  <div class="card-custom">
    <v-card :class="isCardDark" elevation="0" class="text-center card-main__rounded" outlined>
      <v-row class="justify-center" no-gutters>
        <v-icon>{{ CARD_DATA[this.cardNumber].ICON }}</v-icon>
        <v-card-title class="justify-center pa-2">
          {{ CARD_DATA[this.cardNumber].TITLE }}
        </v-card-title>
      </v-row>
      <v-card-text class="pb-2 pt-2">{{ CARD_DATA[this.cardNumber].DESCRIPTION }}
        <v-spacer class="pa-1"/>
        <a
          class="text-link__card"
          v-if="CARD_DATA[this.cardNumber].HREF"
          :href="CARD_DATA[this.cardNumber].HREF"
          target="_blank"
        >
          {{ CARD_DATA[this.cardNumber].TYPE_LINK }}
        </a>
        <v-spacer class="non-link__spacer" v-else/>
      </v-card-text>
    </v-card>
  </div>
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
  computed: {
    isCardDark() {
      return this.$vuetify.theme.dark ? 'card-main__dark' : 'card-main__light';
    },
  },
  created() {
    this.CARD_DATA = CARD_DATA;
  },
};
</script>

<style lang="scss" scoped>
.card-custom {
  .non-link__spacer {
    margin-bottom: 23px;
  }

  .text-link__card {
    font-size: 16px;
  }

  .card-main {
    &__dark:hover {
      background-color: $color-dark-hover-transparent !important;
    }
    &__dark {
      background-color: $color-dark-transparent !important;
    }
    &__light:hover {
       background-color: $color-light-hover-transparent !important;
    }
    &__light {
       background-color: $color-light-transparent !important;
    }
  }
  .card-main__rounded {
    border-radius: $border-radius;
  }
}
</style>
