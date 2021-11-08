<template>
  <div>
    <book-previewer/>
    <book-recommended/>
  </div>
</template>

<script>
import BookPreviewer from '@/components/list/BookPreviewer.vue';
import BookRecommended from '@/components/list/BookRecommended.vue';

export default {
  data() {
    return {

    };
  },
  components: {
    BookPreviewer,
    BookRecommended,
  },
};
</script>
