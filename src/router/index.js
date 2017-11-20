import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import NewsList from '@/components/NewsList'
import CharactersList from '@/components/CharactersList'
import GameplayGuide from '@/components/GameplayGuide'
import SearchPage from '@/components/SearchPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/news',
      name: 'news',
      component: NewsList
    },
    {
      path: '/personnages',
      name: 'characters',
      component: CharactersList
    },
    {
      path: '/guide',
      name: 'guide',
      component: GameplayGuide
    },
    {
      path: '/rechercher',
      name: 'search',
      component: SearchPage
    }
  ]
})
