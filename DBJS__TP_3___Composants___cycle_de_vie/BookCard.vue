<template>
  <div class="book">
    <h2>{{ book.title }}</h2>
    <p>{{ book.author }} — {{ book.year }}</p>
    <p>{{ book.genre }}</p>

    <span class="badge">{{ book.isFav ? '★ Favori' : '☆' }}</span>

    <slot name="actions" />

    <button @click="demanderToggle">Favori</button>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
      validator: (book) => typeof book.title === 'string' && book.title.length > 0
    }
  },
  methods: {
    demanderToggle() {
      this.$emit('toggle-favori', this.book);
    }
  }
};
</script>