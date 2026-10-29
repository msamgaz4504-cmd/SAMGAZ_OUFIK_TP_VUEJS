<template>
  <div>
    <h1>Liste des emplois</h1>
    <FilterNav @filtre-change="filtre = $event" />
    <router-link to="/add">
      <button>Ajouter un emploi</button>
    </router-link>

    <p v-if="loading">Chargement…</p>
    <p v-else-if="emploisFiltres.length === 0">Aucun emploi trouvé.</p>

    <div
      v-for="job in emploisFiltres"
      :key="job.id"
      class="job-card"
    >
      <h2>{{ job.title }}</h2>
      <p>{{ job.description }}</p>
      <p>Salaire : {{ job.salary }} €</p>
      <router-link :to="`/jobs/${job.id}`">Détails</router-link>
    </div>
  </div>
</template>

<script>
import FilterNav from '../components/FilterNav.vue';

export default {
  name: 'Home',
  components: { FilterNav },
  data() {
    return {
      jobs: [],
      filtre: 'tous',
      loading: true
    };
  },
  computed: {
    emploisFiltres() {
      if (this.filtre === 'recent') {
        return [...this.jobs].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      }
      if (this.filtre === 'ancien') {
        return [...this.jobs].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      }
      return this.jobs;
    }
  },
  methods: {
    chargerEmplois() {
      fetch('http://localhost:3000/jobs')
        .then(response => response.json())
        .then(data => {
          this.jobs = data;
          this.loading = false;
        })
        .catch(err => console.log(err));
    }
  },
  mounted() {
    this.chargerEmplois();
  }
};
</script>