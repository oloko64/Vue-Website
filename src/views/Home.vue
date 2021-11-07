<template>
  <div class="home">
    <v-container>
      <v-card :class="isCardDark" elevation="0" class="text-center card-main__rounded" outlined>
        <h1 class="text-center mt-4">{{ HOME_DATA.FULL_NAME }}</h1>
        <v-row no-gutters class="my-8 d-flex justify-center">
          <v-spacer/>
          <v-col cols="auto" md="4">
            <v-img
              max-height="350"
              max-width="350"
              :src="HOME_DATA.IMAGE_PROFILE()"
            />
          </v-col>
          <v-spacer/>
          <v-col cols="auto" md="6">
            <p
              class="text-left mt-5 mx-5 paragraph-indent"
              v-for="(paragraph, index) in HOME_DATA.FIRST_DESCRIPTION"
              :key="index"
            >
              {{ paragraph }}
            </p>
          </v-col>
          <v-spacer/>
        </v-row>
        <!--
         it is not necessary to remove
         this component "in-progress",
         if you are at work just pass
         :progress="true",
         progress default is false.
       -->
        <in-progress/>
      </v-card>
    </v-container>
    <v-container v-if="HOME_DATA.SECOND_CARD">
      <v-card :class="isCardDark" elevation="0" class="text-center card-main__rounded" outlined>
        <h2 class="text-center mt-4">{{ HOME_DATA.SECOND_TITLE }}</h2>
        <v-row
          no-gutters
          class="my-8 d-flex justify-center"
          v-for="(paragraph, index) in HOME_DATA.SERVICES_DESCRIPTION"
          :key="index"
        >
          <v-col cols="auto" md="2" class="ml-12" align="center">
            <v-img
              max-height="100"
              max-width="100"
              class="mt-11"
              :src="HOME_DATA.SERVICES_IMG[index]"
            />
          </v-col>
          <v-col cols="auto" md="9">
            <div
              class="text-left mt-9 mx-5 paragraph-indent"
            >
              <h3 class="mb-3">{{ HOME_DATA.SERVICES_TITLE[index] }}</h3>
              <p>
                {{ paragraph }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import inProgress from '@/components/inProgress.vue';
import { HOME_DATA } from '@/data/home/home';

export default {
  name: 'Home',

  components: {
    inProgress,
  },
  computed: {
    isCardDark() {
      return this.$vuetify.theme.dark ? 'card-main__dark' : 'card-main__light';
    },
  },
  created() {
    this.HOME_DATA = HOME_DATA;
  },
};
</script>

<style lang="scss" scoped>
.home {
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

  .paragraph-indent {
    text-indent: 50px;
  }
}
</style>
