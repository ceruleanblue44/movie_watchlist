import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainPageView from '@/views/MainPageView.vue'
import MovieDetailsView from '@/views/MovieDetailsView.vue'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'mainPage',
		component: MainPageView,
	},
	{
		path: '/movie/:imdbID',
		name: 'movieDetails',
		component: MovieDetailsView,
		props: true,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
