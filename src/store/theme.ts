import type { ConfigProviderTheme } from 'naive-ui'
import { isDark } from '~/composables/dark'

export const useThemeStore = defineStore('theme', () => {
  const vantTheme = computed<ConfigProviderTheme>(() => isDark.value ? 'dark' : 'light')

  return {
    vantTheme,
  }
})
