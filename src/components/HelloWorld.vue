<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <header class="bg-white/15 dark:bg-primary/15 h-screen mx-auto flex relative flex-col justify-center items-center text-center px-12 gap-4 ">
    <!-- <nav class="absolute top-0">
      asdasd
    </nav> -->
    <h1 class="text-7xl sm:text-8xl md:text-9xl text-primary dark:text-dprimary"><strong>Matias Escalante</strong></h1>
    <span class="text-3xl sm:text-4xl md:text-5xl text-primary dark:text-dprimary">Fullstack Developer</span>
  </header>
</template>

<style scoped>

</style>
