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
        :favorite="isFavorite(character.id)"
        @toggleFavorite="handleFavorite"
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
import { RickAndMortyService } from "./services/RickAndMortyService";
import type ICharacter from "./interfaces/ICharacter";

export default {
  components: { Card, Loading, BackToTop },
  data() {
    return {
      charactersList: [] as ICharacter[],
      page: 1,
      requestInProgress: false,
      favoriteList: [] as number[],
    };
  },
  mounted() {
    this.favoriteList = this.getFavoriteListFromLocalStorage();
    this.getNextPage();
    this.createScrollEvent();
  },
  methods: {
    async getNextPage() {
      this.requestInProgress = true;
      const rickAndoMortyService = new RickAndMortyService();
      const characters = await rickAndoMortyService.getCharacters(this.page);
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
    handleFavorite(id: number) {
      if (this.favoriteList.includes(id)) {
        const index = this.favoriteList.indexOf(id);
        this.favoriteList.splice(index, 1);
      } else {
        this.favoriteList.push(id);
      }
      this.updateLocalStorage();
    },
    isFavorite(id: number) {
      return this.favoriteList.includes(id);
    },
    updateLocalStorage() {
      localStorage.setItem("favoriteList", JSON.stringify(this.favoriteList));
    },
    getFavoriteListFromLocalStorage() {
      const localStorageData = localStorage.getItem("favoriteList");
      return localStorageData ? JSON.parse(localStorageData) : [];
    },
  },
};
</script>

<style>
.container {
  background-image: url("./assets/images/bg-stars.svg");
  background-size: contain;
  background-color: var(--gray-100);
  min-height: 100vh;
}

header {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--gray-900);
  font-weight: 700;
  color: var(--gray-100);
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
./services/index./services/RickAndMortyService
