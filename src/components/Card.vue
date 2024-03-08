<template>
  <section>
    <img :src="imageLink" />

    <div class="text-container">
      <div class="horizontal-group">
        <p>{{ status }}</p>
        <span class="dot"></span>
        <p>{{ species }}</p>
      </div>

      <h2>{{ name }}</h2>
      <p class="gender">{{ gender }}</p>

      <p class="location">{{ location }}</p>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: ["image", "id", "name", "status", "species", "gender", "location"],

  data() {
    return {
      imageLink: this.image,
    };
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
  height: 150px;
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
  width: 115px;
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
  background-color: var(--neutral-ligth-250);
  border-radius: 50%;
}
</style>
