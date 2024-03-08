<template>
  <body>
    <header>
      <h1>Rick and Morty Characters</h1>
    </header>
    <div class="card-list">
      <Card
        v-for="character in charactersList"
        :key="character.id"
        :name="character.name"
        :status="character.status"
        :species="character.species"
        :gender="character.gender"
        :location="character.location.name"
        :image="character.image"
      />
    </div>
    <button @click="nextPage">Next Page</button>
    <Loading />
  </body>
</template>

<script lang="ts">
import Card from "./components/Card.vue";
import Loading from "./components/Loading.vue";
import { getCharacters } from "./http/index";

export default {
  components: { Card, Loading },
  data() {
    return {
      charactersList: [],
      page: 1,
    };
  },
  async mounted() {
    this.nextPage();
  },
  methods: {
    async nextPage() {
      const characters = await getCharacters(this.page);
      this.charactersList = this.charactersList.concat(characters.results);
      this.page++;
    },
  },
};
</script>

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

.card-list {
  display: grid;
  gap: 30px;
  padding: 30px;
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
