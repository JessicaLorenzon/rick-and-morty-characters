<script lang="ts">
import Card from "./components/Card.vue";

export default {
  components: { Card },
};
</script>

<template>
  <body>
    <header>
      <h1>Rick and Morty Personagens</h1>
    </header>
    <div>
      <Card />
    </div>
  </body>
</template>

<style>
body {
  background-color: var(--neutral-ligth-100);
}

header {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--neutral-ligth-450);
  font-weight: 700;
  color: var(--neutral-ligth-100);
}

h1 {
  font-size: 25px;
}
</style>
