<script setup lang="ts">
import type { ConfigProviderThemeVars } from 'vant';

// https://github.com/vueuse/head
useHead({
  title: 'Template Vitesse Lite',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})

const theme = useThemeStore();
const { vantTheme } = storeToRefs(theme);
const themeVars: ConfigProviderThemeVars = {}
const themeVarsDark: ConfigProviderThemeVars = {}
const themeVarsLight: ConfigProviderThemeVars = {}
</script>

<template>
  <VanConfigProvider :theme="vantTheme" :theme-vars="themeVars" :theme-vars-dark="themeVarsDark" :theme-vars-light="themeVarsLight">
    <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
      <RouterView />
      <Footer />
    </main>
  </VanConfigProvider>
</template>
