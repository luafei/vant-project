import Vue from 'vue';
import VueRouter from 'vue-router';

import Button from '../views/button';
import Cell from '../views/cell';
import NotPage from '../views/notPage';

Vue.use(VueRouter)

const routes = [
    { path: '*', component: NotPage },
    { path: '/button', component: Button, name: 'button' },
    { path: '/cell', component: Cell, name: 'cell' },
    { path: 'notpage', component: NotPage }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
