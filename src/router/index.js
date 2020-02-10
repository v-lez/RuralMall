import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue')
const ShopCart = () => import('views/shopcart/ShopCart.vue')
const Category = () => import('views/category/Category.vue')
const Profile = () => import('views/profile/Profile.vue')

// 1、安装插件
Vue.use(VueRouter)

// 2、创建vue对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  // 默认是hash模式，url显示的地址中会出现#。而mode: 'history'则不带有这个！
  mode: 'history'
})

// 3、导出
export default router