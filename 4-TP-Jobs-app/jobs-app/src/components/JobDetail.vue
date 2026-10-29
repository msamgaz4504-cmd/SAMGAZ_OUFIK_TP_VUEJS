<template>
  <div class="job-detail">
    <h2>{{ job.title }}</h2>
    <p>{{ job.description }}</p>
    <p>Salaire : {{ job.salary }} €</p>
    <p>Date de création : {{ job.createdAt }}</p>
    <p>Expérience : {{ job.experience }} an(s)</p>

    <router-link :to="`/jobs/${job.id}`">
      <button>Modifier</button>
    </router-link>
    <button @click="supprimer">Supprimer</button>
  </div>
</template>

<script>
export default {
  name: 'JobDetail',
  props: {
    job: { type: Object, required: true }
  },
  methods: {
    supprimer() {
      if (confirm('Confirmer la suppression de cet emploi ?')) {
        fetch(`http://localhost:3000/jobs/${this.job.id}`, {
          method: 'DELETE'
        })
          .then(() => this.$emit('delete', this.job.id))
          .catch(err => console.log(err));
      }
    }
  }
};
</script>