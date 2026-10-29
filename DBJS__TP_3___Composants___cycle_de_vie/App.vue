<template>
  <div id="app">
    <h1>Catalogue de livres</h1>

    <p v-show="loading">Chargement…</p>

    <AddBookForm @ajouter="ajouterLivre" />

    <BookList :books="books">
      <template #actions>
        <button @click.stop="rien">Détails</button>
      </template>
    </BookList>
  </div>
</template>

<script>
import AddBookForm from './components/AddBookForm.vue';
import BookList from './components/BookList.vue';

export default {
  components: { AddBookForm, BookList },
  data() {
    return {
      books: [],
      loading: true,
      initialBooks: [
        { id: 1, title: 'Les Misérables', author: 'Victor Hugo', year: 1862, genre: 'roman', isFav: false, keywords: ['classique'] },
        { id: 2, title: 'L\u2019Étranger', author: 'Albert Camus', year: 1942, genre: 'roman', isFav: true, keywords: ['absurde'] }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.books = this.initialBooks;
      this.loading = false;
    }, 600);
  },
  methods: {
    ajouterLivre(livre) {
      this.books.push({ ...livre, id: Date.now() });
    },
    rien() {}
  }
};
</script>