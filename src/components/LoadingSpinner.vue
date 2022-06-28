<template>
  <div
    class="
      loading-spinner
      absolute
      top-[calc(50%-2rem]
      left-[calc(50%-2rem)]
      h-16
      w-16
      bg-gray-light
      rounded-lg
      flex
      items-center
      justify-center
      animate-spin
    "
    v-html="diceIcon"
  ></div>
</template>

<script lang="ts" setup>
import diceIcon from '../assets/icon-dice.svg?raw';
</script>
