<template>
  <div class="lot">
    <div class="mockname">
      <h3>{{ lot.id }}</h3>
      <div class="devider"></div>
      <h3>{{ lot.name }}</h3>
    </div>

    <button @click="editLot">Редактировать</button>

    <LotModal v-if="showModal" :lot="lot" @save="saveChanges" @close="closeModal" />
  </div>
</template>

<script>
import LotModal from './LotModal.vue';

export default {
  components: {
    LotModal,
  },
  props: {
    lot: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    editLot() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    saveChanges() {
      console.log("Сохранение изменений");

      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.lot {
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
  padding: 20px;
  border: 5px solid red;
}

.devider {
  height: 100%;
  width: 3px;
  background-color: red;
  margin-left: 20px;
  margin-right: 20px;
}

.mockname {
  display: flex;
  flex-direction: row;
}
</style>