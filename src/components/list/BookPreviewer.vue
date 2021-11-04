<template>
  <div class="book-previewer">
    <v-card>
      <v-tabs
        :vertical="!isSmallScreen"
        center-active
        show-arrows
      >
        <!-- Book labels -->
        <v-tab
          class="justify-start tab-name__max-size"
          :key="item.NAME"
          v-for="item in BOOK"
        >
          <v-icon left>
            {{ item.ICON }}
          </v-icon>
          {{ maxLengthString(item.NAME) }}
        </v-tab>

        <!-- Book details -->
        <v-tab-item :key="item.NAME" v-for="item in BOOK">
          <v-card flat>
            <v-row class="d-flex" no-gutters>
              <v-col cols="auto" v-if="!isSmallScreen">
                <v-img
                  class="mt-5"
                  max-width="100px"
                  :lazy-src="item.IMAGE_LOCATION"
                  :src="item.IMAGE_LOCATION"
                />
              </v-col>
              <v-col class="justify-center">
                <div class="d-flex justify-center" v-if="isSmallScreen">
                  <v-img
                    class="mt-5"
                    max-width="100px"
                    :lazy-src="item.IMAGE_LOCATION"
                    :src="item.IMAGE_LOCATION"
                  />
                </div>
                <h2 :class="isSmallScreenTitle" class="mt-5">{{ item.NAME }}</h2>
                <v-card-text
                  class="py-3 paragraph-custom"
                  :key="paragraph.ID"
                  v-for="paragraph in item.RESUME"
                >
                  {{ paragraph.PARAGRAPH }}
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import { BOOK, PAGE_TITLE } from '@/data/books/recommendedBooks';
import narrowScreen from '@/helpers/general/screen';
import maxLengthString from '@/helpers/general/string';

export default {
  name: 'BookPreviewer',
  created() {
    this.BOOK = BOOK;
    this.PAGE_TITLE = PAGE_TITLE;
  },
  computed: {
    isSmallScreenTitle() {
      return narrowScreen(this.$store.getters.windowsSizeStore, 800)
        ? 'text-center'
        : 'ml-4';
    },
    isSmallScreen() {
      return narrowScreen(this.$store.getters.windowsSizeStore, 800);
    },
  },
  methods: {
    maxLengthString,
  },
};
</script>

<style lang="scss" scoped>
.book-previewer {
  .v-image {
    border-radius: 8px;
  }

  .paragraph-custom {
    text-indent: 50px;
    max-width: 800px;
  }

  .tab-name__max-size {
    max-width: 300px;
  }
}
</style>
