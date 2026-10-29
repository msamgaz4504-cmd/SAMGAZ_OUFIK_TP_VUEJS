import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import AddJob from './views/AddJob.vue';
import EditJob from './views/EditJob.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/add', name: 'add', component: AddJob },
  { path: '/jobs/:id', name: 'edit', component: EditJob, props: true }
];

export default createRouter({
  history: createWebHistory(),
  routes
});