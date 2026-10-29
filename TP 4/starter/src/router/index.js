// TP4 - TODO 1 : configurez le routeur.
//
// Trois routes attendues :
//   '/'            -> HomeView   (nom: 'home')
//   '/livre/:id'   -> BookDetailsView (nom: 'book-details')
//   toute autre URL -> NotFoundView (nom: 'not-found')
//
// Indice : import { createRouter, createWebHistory } from 'vue-router'

// import HomeView from '../views/HomeView.vue'
// import BookDetailsView from '../views/BookDetailsView.vue'
// import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  // TODO 1 : complétez le tableau de routes
]

// TODO 1 : créez et exportez le routeur avec createRouter({ history: createWebHistory(), routes })

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BookDetailsView from '../views/BookDetailsView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/books/:id', name: 'book-details', component: BookDetailsView, props: true },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
