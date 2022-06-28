<template>
  <main class="flex items-center justify-center min-h-screen p-4">
    <LoadingSpinner v-if="loading"/>
    <Card 
      v-bind="adviceObj"
      :loading="loading"
      @fetch-button-click="fetchAdvice"
    />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Card from './components/Card.vue'
import LoadingSpinner from './components/LoadingSpinner.vue';

// Reactive ref to control the message on the card
const adviceObj = ref({
  advice: '',
  id: 0
})

// Reactive ref to control the loading state of the card
const loading = ref(false);

const fetchAdvice = async () => {
  // Set loading state
  loading.value = true;
  // Create api request
  const request = fetch('https://api.adviceslip.com/advice', {cache: 'no-cache'});
  // set timer so that loading state is persists long enough for transition to finish
  const timer = new Promise(resolve => setTimeout(resolve, 800))
  // Wait for both promises to resolve
  const [response] = await Promise.all([request, timer])
  // Extract data from response
  const slip = (await response.json()).slip
  // Update the reactive advice ref with the new values
  adviceObj.value = slip;
  // Set loading state to false
  loading.value = false;
}

onMounted(() => {
  // Get an advice slip as soon as the page loads
  fetchAdvice();
})

</script>
