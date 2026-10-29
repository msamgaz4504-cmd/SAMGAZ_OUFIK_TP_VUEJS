<template>
  <div class="book-list">
    <BookCard v-for="book in books" :key="book.id" :book="book">
      <template #actions>
        <slot name="actions" />
      </template>
    </BookCard>
  </div>
</template>

<script>
import BookCard from './BookCard.vue';

export default {
  components: { BookCard },
  props: {
    books: {
      type: Array,
      required: true
    }
  }
};
</script>