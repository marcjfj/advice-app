<template>
  <article
    class="
      card
      bg-gray-dark
      rounded-xl
      text-center
      p-8
      pb-0
      md:p-12 md:pb-0
      w-full
      max-w-[540px]
      relative
      transition-all
      duration-300
      ease-in-out
    "
    :class="{ 'opacity-0 translate-y-4': loading }"
  >
    <header>
      <p class="text-accent uppercase tracking-omg font-semibold text-xs mb-6">
        Advice #{{ id }}
      </p>
    </header>
    <p
      class="
        advice
        text-light text-2xl
        font-bold
        transition-all
        ease-out
        duration-700
      "
      :class="{ 'opacity-0 translate-y-4': loading }"
    >
      &#8220;{{ advice }}&#8221;
    </p>
    <Divider />
    <button
      aria-label="Fetch a new advice slip"
      class="
        rounded-full
        bg-accent
        w-16
        h-16
        flex
        items-center
        justify-center
        mx-auto
        translate-y-[50%]
      "
      @click="$emit('fetch-button-click')"
      v-html="iconDice"
    ></button>
  </article>
</template>

<script lang="ts" setup>
import iconDice from '../assets/icon-dice.svg?raw';
import Divider from './Divider.vue';

defineProps<{ advice: string; id: number; loading: boolean }>();
defineEmits<{ fetchButtonClick: void }>();
</script>
