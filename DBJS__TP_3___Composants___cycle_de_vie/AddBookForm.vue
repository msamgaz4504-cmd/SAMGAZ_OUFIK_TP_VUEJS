<template>
  <form @submit.prevent="soumettre">
    <input ref="titleInput" v-model.trim="newBook.title" placeholder="Titre" />
    <input v-model.lazy="newBook.author" placeholder="Auteur" />
    <input v-model.number="newBook.year" type="number" placeholder="Année" />
    <select v-model="newBook.genre">
      <option value="">-- Genre --</option>
      <option value="roman">Roman</option>
      <option value="essai">Essai</option>
      <option value="bd">BD</option>
      <option value="poesie">Poésie</option>
    </select>
    <label>
      <input type="checkbox" v-model="newBook.isFav" /> Favori
    </label>

    <input
      v-model="nouveauMotCle"
      placeholder="Mot-clé"
      @keyup.enter="ajouterMotCle"
    />
    <span v-for="mot in newBook.keywords" :key="mot" class="chip">
      {{ mot }}
      <button type="button" @click.stop="retirerMotCle(mot)">×</button>
    </span>

    <button type="submit" :disabled="!formulaireValide">Ajouter</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newBook: {
        title: '',
        author: '',
        year: null,
        genre: '',
        isFav: false,
        keywords: []
      },
      nouveauMotCle: ''
    };
  },
  computed: {
    formulaireValide() {
      return this.newBook.title !== '' && this.newBook.author !== '';
    }
  },
  mounted() {
    this.$refs.titleInput.focus();
  },
  methods: {
    soumettre() {
      this.$emit('ajouter', { ...this.newBook, keywords: [...this.newBook.keywords] });
      this.newBook = {
        title: '',
        author: '',
        year: null,
        genre: '',
        isFav: false,
        keywords: []
      };
    },
    ajouterMotCle() {
      const mot = this.nouveauMotCle;
      if (mot && !this.newBook.keywords.includes(mot)) {
        this.newBook.keywords.push(mot);
      }
      this.nouveauMotCle = '';
    },
    retirerMotCle(mot) {
      this.newBook.keywords = this.newBook.keywords.filter(m => m !== mot);
    }
  }
};
</script>