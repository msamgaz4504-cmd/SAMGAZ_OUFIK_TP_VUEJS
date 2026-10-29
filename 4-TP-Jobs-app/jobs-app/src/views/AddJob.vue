<template>
  <div>
    <h1>Ajouter un emploi</h1>
    <form @submit.prevent="ajouter">
      <input v-model="job.title" placeholder="Titre" required />
      <textarea v-model="job.description" placeholder="Description" required></textarea>
      <input v-model.number="job.salary" type="number" placeholder="Salaire" required />
      <input v-model="job.createdAt" type="date" required />
      <input v-model.number="job.experience" type="number" placeholder="Années d'expérience" required />
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddJob',
  data() {
    return {
      job: {
        title: '',
        description: '',
        salary: null,
        createdAt: '',
        experience: null
      }
    };
  },
  methods: {
    ajouter() {
      fetch('http://localhost:3000/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.job)
      })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err));
    }
  }
};
</script>