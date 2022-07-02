import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import JobsDetail from '../views/Jobs/JobsDetail.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: "/jobsDetail/:detail",
    name: 'jobsDetail',
    component: JobsDetail,
    props: true
  },
  {
    path: "/allJobs",
    redirect: '/jobs'
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
