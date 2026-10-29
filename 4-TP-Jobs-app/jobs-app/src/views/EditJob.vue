<template>
  <div>
    <h1>Modifier l'emploi</h1>
    <form v-if="job" @submit.prevent="modifier">
      <input v-model="job.title" placeholder="Titre" required />
      <textarea v-model="job.description" placeholder="Description" required></textarea>
      <input v-model.number="job.salary" type="number" placeholder="Salaire" required />
      <input v-model="job.createdAt" type="date" required />
      <input v-model.number="job.experience" type="number" placeholder="Années d'expérience" required />
      <button type="submit">Enregistrer</button>
    </form>

    <JobDetail v-if="job" :job="job" @delete="retourAccueil" />
  </div>
</template>

<script>
import JobDetail from '../components/JobDetail.vue';

export default {
  name: 'EditJob',
  components: { JobDetail },
  props: { id: { type: [String, Number], required: true } },
  data() {
    return { job: null };
  },
  methods: {
    charger() {
      fetch(`http://localhost:3000/jobs/${this.id}`)
        .then(response => response.json())
        .then(data => (this.job = data))
        .catch(err => console.log(err));
    },
    modifier() {
      fetch(`http://localhost:3000/jobs/${this.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.job)
      })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err));
    },
    retourAccueil() {
      this.$router.push('/');
    }
  },
  mounted() {
    this.charger();
  }
};
</script>