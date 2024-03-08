<script lang="ts">
import Card from "./components/Card.vue";
import Loading from "./components/Loading.vue";

export default {
  components: { Card, Loading },
};
</script>

<template>
  <body>
    <header>
      <h1>Rick and Morty Personagens</h1>
    </header>
    <div class="lista-cards">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <Loading />
  </body>
</template>

<style>
body {
  background-image: url("./assets/images/bg-stars.svg");
  background-size: contain;
  background-color: var(--neutral-ligth-100);
  height: 100%;
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

.lista-cards {
  display: grid;
  gap: 30px;
  margin: 30px;
}

@media only screen and (min-width: 768px) {
  .lista-cards {
    display: grid;
    gap: 30px;
    grid-template-columns: auto auto;
    max-width: 1000px;
    margin: 30px auto;
  }
}
</style>
