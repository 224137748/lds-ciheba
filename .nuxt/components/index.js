export { default as Header } from '../..\\components\\Header.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Modal } from '../..\\components\\Modal.vue'

export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components_Header" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyModal = import('../..\\components\\Modal.vue' /* webpackChunkName: "components_Modal" */).then(c => c.default || c)
