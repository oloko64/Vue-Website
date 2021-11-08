<template>
  <div class="card-custom">
    <v-card :class="isCardDark" elevation="0" class="text-center card-main__rounded" outlined>
      <v-row class="justify-center" no-gutters>
        <v-icon>{{ CARD_DATA[this.cardNumber].ICON }}</v-icon>
        <v-card-title class="justify-center pa-2">
          {{ CARD_DATA[this.cardNumber].TITLE }}
        </v-card-title>
      </v-row>
      <v-card-text
        :key="line.LINE"
        class="pb-2 pt-2 paragraph-indent"
        v-for="line in CARD_DATA[this.cardNumber].DESCRIPTION"
      >
        {{ line.LINE }}
      </v-card-text>
        <a
          :key="link.NAME_LINK"
          :href="link.HREF"
          class="text-link__card"
          target="_blank"
          v-for="link in CARD_DATA[this.cardNumber].LINK"
        >
          {{ link.NAME_LINK }}
          <br>
        </a>
      <v-spacer class="pa-1"/>
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

  .paragraph-indent {
    text-indent: 50px;
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
