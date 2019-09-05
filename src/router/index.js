import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import Article from '@/components/Article'
import CharactersList from '@/components/CharactersList'
import Gameplay from '@/components/Gameplay'
import Summons from '@/components/Summons'
import Stages from '@/components/Stages'
import FAQ from '@/components/FAQ'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/personnages',
      name: 'characters',
      component: CharactersList
    },
    {
      path: '/invocations',
      name: 'summons',
      component: Summons
    },
    {
      path: '/arenes',
      name: 'stages',
      component: Stages
    },
    {
      path: '/système',
      name: 'gameplay',
      component: Gameplay
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQ
    },
    {
      path: '/articles/:slug',
      name: 'article',
      component: Article
    },
    {
      path: '/personnages/:slug',
      name: 'character',
      component: CharactersList
    },
    // {
    //   path: '/rechercher',
    //   name: 'search',
    //   component: SearchPage
    // },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
