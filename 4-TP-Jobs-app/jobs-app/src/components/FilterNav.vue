<template>
  <div>
    <button
      :class="{ actif: filtre === 'tous' }"
      @click="changer('tous')"
    >Tous</button>
    <button
      :class="{ actif: filtre === 'recent' }"
      @click="changer('recent')"
    >Plus récents</button>
    <button
      :class="{ actif: filtre === 'ancien' }"
      @click="changer('ancien')"
    >Plus anciens</button>
  </div>
</template>

<script>
export default {
  name: 'FilterNav',
  data() {
    return { filtre: 'tous' };
  },
  methods: {
    changer(valeur) {
      this.filtre = valeur;
      this.$emit('filtre-change', valeur);
    }
  }
};
</script>