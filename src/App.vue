<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { provide, ref } from 'vue'

const SYSTEM_COLOR_SCHEME = window.matchMedia('(prefers-color-scheme: dark)');

const darkmode = ref(SYSTEM_COLOR_SCHEME.matches);

SYSTEM_COLOR_SCHEME.addEventListener('change', function() {
  darkmode.value = SYSTEM_COLOR_SCHEME.matches;
});

function updateDarkmode() {
  darkmode.value = !darkmode.value;
}

provide(/* key */ 'darkmode', /* value */ {darkmode, updateDarkmode})


</script>

<template>
  <div :class="darkmode ? 'dark' : ''" class="placeholder:bg-white dark:bg-black">
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
