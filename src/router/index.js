import Vue from 'vue'
import VueRouter from 'vue-router'
const Layout = () => import('@/views/layout')
const Home = () => import('@/views/home/index')
const Question = () => import('@/views/question/index')
const Video = () => import('@/views/video/index')
const User = () => import('@/views/user/index')
const UserProfile = () => import('@/views/user/profile')
const UserChat = () => import('@/views/user/chat')
const Login = () => import('@/views/user/login')
const Search = () => import('@/views/search/index')
const SearchResult = () => import('@/views/search/result')
const Article = () => import('@/views/home/article')

Vue.use(VueRouter)

const routes = [
  { path: '/',
    component: Layout,
    children: [
      { path: '/', name: 'home', component: Home },
      { path: '/question', name: 'question', component: Question },
      { path: '/user', name: 'user', component: User },
      { path: '/viedo', name: 'viedo', component: Video }
    ]
  },
  { path: '/user/profile', name: 'profile', component: UserProfile },
  { path: '/user/chat', name: 'chat', component: UserChat },
  { path: '/user/login', name: 'login', component: Login },
  { path: '/search', name: 'search', component: Search },
  { path: '/search/result', name: 'result', component: SearchResult },
  { path: '/home/article', name: 'result', component: Article }
]

const router = new VueRouter({
  routes
})

export default router
