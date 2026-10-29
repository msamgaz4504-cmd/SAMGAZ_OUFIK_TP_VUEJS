<template>
  <div v-if="book">
    <h1>{{ book.title }}</h1>
    <p>{{ book.author }} -- {{ book.year }}</p>
    <p>{{ book.genre }}</p>
    <span class="badge-favori" v-if="book.isFav">Favori</span>
  </div>
  <div v-else>
    <p>Livre introuvable (id {{ $route.params.id }}).</p>
  </div>

  <!-- TODO 4 : bouton "Retour" utilisant la navigation programmatique -->
  <button @click="retour">Retour</button>
</template>

<script>
import { store } from '../store/books.js'

export default {
  name: 'BookDetailsView',
  data() {
    return { store }
  },
  computed: {
    // TODO 3 : retrouvez dans store.books le livre dont l'id correspond à
    // $route.params.id
    book() {

    }
  },
  methods: {
    // TODO 4 : remplacez par this.$router.back()
    retour() {

    }
  }
}
</script>





#me 
<template>
  <div v-if="book">
    <h1>{{ book.title }}</h1>
    <p>{{ book.author }} — {{ book.year }}</p>
    <p>{{ book.genre }}</p>
    <p>{{ book.isFav ? '★ Favori' : '☆' }}</p>
    <button @click="retour">Retour</button>
  </div>
  <div v-else>
    <p>Livre introuvable.</p>
    <button @click="retour">Retour</button>
  </div>
</template>

<script>
import { store } from '../store/books';

export default {
  name: 'BookDetailsView',
  props: {
    id: { type: [String, Number], required: true }
  },
  computed: {
    book() {
      return store.books.find(b => String(b.id) === String(this.id));
    }
  },
  methods: {
    retour() {
      this.$router.back();
    }
  }
};
</script>
