<template>
  <section>
    <img :src="character.image" />

    <div class="text-container">
      <div class="horizontal-group">
        <p
          :class="{
            alive: character.status === 'Alive',
            dead: character.status === 'Dead',
          }"
        >
          {{ character.status }}
        </p>
        <span class="dot"></span>
        <p>{{ character.species }}</p>
      </div>

      <h2>{{ character.name }}</h2>
      <p class="gender">{{ character.gender }}</p>

      <p class="location">{{ character.location.name }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type ICharacter from "@/interfaces/ICharacter";

export default {
  props: {
    character: { type: Object as PropType<ICharacter>, required: true },
  },
};
</script>

<style scoped>
section {
  background-color: var(--neutral-ligth-50);
  display: flex;
  border-radius: 10px;
  box-shadow: var(--shadow);
}

img {
  width: 150px;
  border-radius: 10px 0 0 10px;
}

.text-container {
  display: flex;
  flex-direction: column;
  padding: 16px;
  flex: 1;
}

.horizontal-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
}

p {
  color: var(--neutral-ligth-250);
  font-size: 15px;
  font-weight: 500;
}

h2 {
  font-weight: 700;
  color: var(--neutral-ligth-300);
  font-size: 20px;
  margin-bottom: 10px;
}

.gender {
  flex: 1;
}

.location {
  font-size: 12px;
  color: var(--primary-100);
  font-weight: 700;
}

.dot {
  height: 5px;
  width: 5px;
  background-color: var(--neutral-ligth-200);
  border-radius: 50%;
}

.alive {
  color: var(--primary-200);
}

.dead {
  color: var(--primary-300);
  text-decoration: line-through;
}
</style>
