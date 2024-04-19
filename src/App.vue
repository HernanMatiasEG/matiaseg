<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div :class="darkmode" class="placeholder:bg-white dark:bg-black">
    <header>
  
      <div class="">
        <HelloWorld msg="You did it!" />
      </div>
    </header>
  
    <main>
      <!-- <TheWelcome /> -->
    </main>
  </div>
</template>

<style scoped>

</style>
