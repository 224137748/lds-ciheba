import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e7c2caea = () => interopDefault(import('..\\pages\\activity.vue' /* webpackChunkName: "pages/activity" */))
const _5790759e = () => interopDefault(import('..\\pages\\connect.vue' /* webpackChunkName: "pages/connect" */))
const _54010c53 = () => interopDefault(import('..\\pages\\introduce.vue' /* webpackChunkName: "pages/introduce" */))
const _c3445db4 = () => interopDefault(import('..\\pages\\join.vue' /* webpackChunkName: "pages/join" */))
const _3214a8c6 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _450e824f = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _67a8017a = () => interopDefault(import('..\\pages\\publish.vue' /* webpackChunkName: "pages/publish" */))
const _3beeb172 = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _1d4e0886 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/activity",
    component: _e7c2caea,
    name: "activity"
  }, {
    path: "/connect",
    component: _5790759e,
    name: "connect"
  }, {
    path: "/introduce",
    component: _54010c53,
    name: "introduce"
  }, {
    path: "/join",
    component: _c3445db4,
    name: "join"
  }, {
    path: "/login",
    component: _3214a8c6,
    name: "login"
  }, {
    path: "/news",
    component: _450e824f,
    name: "news"
  }, {
    path: "/publish",
    component: _67a8017a,
    name: "publish"
  }, {
    path: "/user",
    component: _3beeb172,
    name: "user"
  }, {
    path: "/",
    component: _1d4e0886,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
