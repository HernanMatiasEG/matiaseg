<script setup>

import IconMoon from '../icons/IconMoon.vue';
import IconSun from '../icons/IconSun.vue';

import { inject } from 'vue'

const {darkmode, updateDarkmode} = inject('darkmode')

// console.log(window.matchMedia('(prefers-color-scheme: dark)').matches)

defineProps({
  darkmode: {
    type: Boolean
  }
})

</script>

<template>
  <i @click="updateDarkmode" v-if="darkmode" class="text-primary dark:text-dprimary"><IconMoon /></i>
  <i @click="updateDarkmode" v-else class="text-primary dark:text-dprimary"><IconSun /></i>
</template>