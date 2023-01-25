import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../components/welcomePage.vue'),
  }
  ,

  {
    path: '/folder/:id',
    component: () => import ('../views/folderPage.vue'),
    name: 'folderPage',
  },
 
  {
    path: '/splineChart',
    component: () => import('../components/splinePage.vue'),
  },
  {
    path: '/showDelivery',
    name:'showDelivery',
    component: () => import('../components/showDelivery.vue'),
  }
 ,
 {
  path: '/pieChart',
  component: () => import('../components/pieChart.vue'),
},
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router
