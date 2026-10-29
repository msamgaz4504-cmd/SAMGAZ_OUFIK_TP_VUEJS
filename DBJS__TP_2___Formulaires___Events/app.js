const { createApp } = Vue;

createApp({
  data() {
    return {
      books: [],
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
  methods: {
    ajouterLivre() {
      this.books.push({
        ...this.newBook,
        keywords: [...this.newBook.keywords],
        id: Date.now()
      });
      this.newBook = {
        title: '',
        author: '',
        year: null,
        genre: '',
        isFav: false,
        keywords: []
      };
    },
    supprimerLivre(book) {
      this.books = this.books.filter(b => b.id !== book.id);
    },
    toggleFavori(book) {
      book.isFav = !book.isFav;
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
}).mount('#app');