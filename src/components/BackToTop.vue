<template>
  <button @click="scrollToTop" v-if="show">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
      />
    </svg>
  </button>
</template>

<script lang="ts">
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.show = window.scrollY > 0;
    });
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
button {
  border-radius: 50%;
  border: none;
  height: 50px;
  width: 50px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: var(--neutral-ligth-200);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: opacity 0.2s ease;
}

button:hover {
  cursor: pointer;
  opacity: 1;
}

svg {
  width: 20px;
}
</style>
