<template>
  <div class="divider
              flex items-center justify-center
              mt-10
              before:flex-grow before:border-b before:border-gray-light before:mx-3
              after:flex-grow after:border-b after:border-gray-light after:mx-3
              "
      >
      <i v-for="i in 2" :key="i" class="w-[6px] h-4 rounded mx-1 bg-light block"></i>
    </div>
</template>