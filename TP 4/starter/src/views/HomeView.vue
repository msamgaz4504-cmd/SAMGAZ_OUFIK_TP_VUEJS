<template>
  <h1>Catalogue de livres</h1>
  <p class="loading" v-show="store.loading">Chargement du catalogue...</p>

  <!-- TODO 2 : branchez add-book sur addBook -->
  <AddBookForm />

  <!-- TODO 2 : passez store.books en props, et branchez toggle-fav / delete-book -->
  <BookList />
</template>

<script>
import AddBookForm from '../components/AddBookForm.vue'
import BookList from '../components/BookList.vue'
import { store } from '../store/books.js'

export default {
  name: 'HomeView',
  components: { AddBookForm, BookList },
  data() {
    return { store }
  },
  methods: {
    // TODO 2 : génère un id, pousse le livre dans store.books
    addBook(bookData) {

    },
    toggleFavori(book) {
      book.isFav = !book.isFav
    },
    deleteBook(book) {
      store.books = store.books.filter(b => b.id !== book.id)
    }
  }
}
</script>

<template>
  <div>
    <h1>Catalogue de livres</h1>
    <AddBookForm @add-book="addBook" />
    <BookList
      :books="store.books"
      @toggle-fav="toggleFavori"
      @delete-book="supprimerLivre"
    />
  </div>
</template>

<script>
import AddBookForm from '../components/AddBookForm.vue';
import BookList from '../components/BookList.vue';
import { store } from '../store/books';

export default {
  name: 'HomeView',
  components: { AddBookForm, BookList },
  data() {
    return { store };
  },
  methods: {
    addBook(book) {
      store.books.push({ ...book, id: Date.now() });
    },
    toggleFavori(book) {
      const cible = store.books.find(b => b.id === book.id);
      if (cible) cible.isFav = !cible.isFav;
    },
    supprimerLivre(book) {
      store.books = store.books.filter(b => b.id !== book.id);
    }
  }
};
</script>
