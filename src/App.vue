<template>
  <div class="container">
    <header>
      <h1>Rick and Morty Characters</h1>
    </header>
    <div class="card-list">
      <Card
        v-for="character in charactersList"
        :key="character.id"
        :character="character"
      />
    </div>
    <Loading />
    <BackToTop />
  </div>
</template>

<script lang="ts">
import Card from "./components/Card.vue";
import Loading from "./components/Loading.vue";
import BackToTop from "./components/BackToTop.vue";
import { getCharacters } from "./http/index";
import type ICharacter from "./interfaces/ICharacter";

export default {
  components: { Card, Loading, BackToTop },
  data() {
    return {
      charactersList: [] as ICharacter[],
      page: 1,
      requestInProgress: false,
    };
  },
  mounted() {
    this.getNextPage();
    this.createScrollEvent();
  },
  methods: {
    async getNextPage() {
      this.requestInProgress = true;
      const characters = await getCharacters(this.page);
      this.charactersList = this.charactersList.concat(characters);
      this.page++;
      this.requestInProgress = false;
    },
    createScrollEvent() {
      window.addEventListener("scroll", () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow && !this.requestInProgress) {
          this.getNextPage();
        }
      });
    },
  },
};
</script>

<style>
.container {
  background-image: url("./assets/images/bg-stars.svg");
  background-size: contain;
  background-color: var(--neutral-ligth-100);
  min-height: 100vh;
}

header {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--neutral-ligth-400);
  font-weight: 700;
  color: var(--neutral-ligth-100);
  text-align: center;
}

h1 {
  font-size: 25px;
}

.card-list {
  display: grid;
  gap: 30px;
  padding: 30px;
  max-width: 500px;
  margin: 0 auto;
}

@media only screen and (min-width: 768px) {
  .card-list {
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr;
    max-width: 1000px;
    margin: 0 auto;
  }
}
</style>
