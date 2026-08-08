import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ClassroomControls from './ClassroomControls.vue'
const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp(context) { DefaultTheme.enhanceApp?.(context) },
  Layout() { return h(DefaultTheme.Layout, null, { 'layout-top': () => h(ClassroomControls) }) }
}
export default theme
