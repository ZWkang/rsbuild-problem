<script lang="ts" setup>

// i want this to work and normal svg use will be fine~
import TestComponent from './icons/b.svg?component';

import { defineEmits, defineProps, toRefs } from 'vue';

interface IProps{

}

const props = defineProps<IProps>();

const {  } = toRefs(props);

// console.log(TestComponent)
</script>

<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <p>Start building amazing things with Rsbuild.</p>
    <img alt="Vue logo" src="./icons/a.svg" />

    <TestComponent />
  </div>
</template>

<style scoped lang="css">
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;

  background-repeat: no-repeat;
  /* background-image: url("./icons/b.svg"); */
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>
