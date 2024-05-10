<script lang="ts" setup>
import { add } from './a.js';

enum Color {
  Red,
  Green,
  Blue
}

const Value: Color = 1;
</script>
<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <p>Start building amazing things with Rsbuild.</p>
    <p> {{ add(1, 2) }} </p>

    <p>{{ <Color.Red>Value }}</p>
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
