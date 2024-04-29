<template>
  <div class="container" v-for="lot in lots" :key="lot.id">
    <lot :lot="lot"></lot>
  </div>
</template>

<style>
.container {
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 10px;
}
</style>

<script>
import Lot from './components/Lot.vue';
import { getMockLots, getMockFields } from './mocks'; // Подключаем ваши моки

export default {
  components: {
    Lot
  },
  data() {
    return {
      lots: []
    }
  },
  created() {
    this.fetchLots();
  },
  methods: {
    fetchLots() {
      console.log("demo")
      this.lots = getMockLots();
      console.log("demo2")
    }
  }
}
</script>