<template>
  <div class="book-previewer">
    <v-card>
      <v-toolbar
        flat
      >
        <v-toolbar-title>{{ PAGE_TITLE.TEXT }}</v-toolbar-title>
      </v-toolbar>
      <v-tabs vertical>
        <!-- Book labels -->
        <v-tab :key="item.NAME" v-for="item in BOOK">
          <v-icon left>
            {{ item.ICON }}
          </v-icon>
          {{ item.NAME }}
        </v-tab>

        <!-- Book details -->
        <v-tab-item :key="item.NAME" v-for="item in BOOK">
          <v-card flat>
            <v-row no-gutters>
              <v-col cols="auto">
                <v-img
                  class="mt-5"
                  max-width="100px"
                  :lazy-src="item.IMAGE_LOCATION"
                  :src="item.IMAGE_LOCATION"
                />
              </v-col>
              <v-col>
                <h2 class="ml-4 mt-5">{{ item.RESUME_TITLE }}</h2>
                <v-card-text>
                  {{ item.RESUME }}
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

export default {
  name: 'BookPreviewer',
  created() {
    this.BOOK = BOOK;
    this.PAGE_TITLE = PAGE_TITLE;
  },
};
</script>

<style lang="scss" scoped>
.book-previewer {
  .v-image {
    border-radius: 8px;
  }
}
</style>
