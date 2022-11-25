<template>
  <nav text-xl mt-6 inline-flex gap-2>
    <RouterLink class="mx-2 icon-btn" to="/" title="首页">
      <div class="i-carbon-campsite" />
    </RouterLink>

    <button icon-btn @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>

    <RouterLink class="mx-2 icon-btn" to="/about" title="关于">
      <div class="i-carbon-dicom-overlay" />
    </RouterLink>

    <a
      icon-btn i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/antfu/vitesse-lite"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
