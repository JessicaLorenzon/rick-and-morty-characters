<template>
  <section>
    <img :src="character.image" />
    <button class="like-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
        />
      </svg>
    </button>

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
  background-color: var(--gray-50);
  display: flex;
  border-radius: 10px;
  box-shadow: var(--shadow);
  position: relative;
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
  color: var(--gray-400);
  font-size: 15px;
  font-weight: 500;
}

h2 {
  font-weight: 700;
  color: var(--gray-800);
  font-size: 20px;
  margin-bottom: 10px;
}

.gender {
  flex: 1;
}

.location {
  font-size: 12px;
  color: var(--blue);
  font-weight: 700;
}

.dot {
  height: 5px;
  width: 5px;
  background-color: var(--gray-300);
  border-radius: 50%;
}

.alive {
  color: var(--green);
}

.dead {
  color: var(--red);
  text-decoration: line-through;
}

.like-button {
  border: none;
  height: 30px;
  width: 30px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-200);
  cursor: pointer;
  border-radius: 50%;
  right: -10px;
  top: -10px;
  fill: var(--gray-700);
}

.like-button:hover {
  background-color: var(--gray-50);
  fill: var(--red);
  outline: 1px solid var(--red);
}

svg {
  width: 15px;
}
</style>
