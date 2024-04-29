<template>
  <div class="lot">
    <div class="mockname">
      <h3>{{ lot.id }}</h3>
      <div class="devider"></div>
      <h3>{{ lot.name }}</h3>
    </div>

    <button @click="editLot">Редактировать</button>

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Редактировать лот "{{ lot.name }}"</h2>
        <div class="field" v-for="field in lot.fields" :key="field.id">
          <label>{{ field.name }}</label>

          <input v-if="getFieldVariant(field.id) === 'ShortTextField'" type="text" />

          <textarea v-else-if="getFieldVariant(field.id) === 'BigTextField'"></textarea>

          <section class="priceSelector" v-else-if="getFieldVariant(field.id) === 'RangeField'">
            <input type="number" />
            <div>-</div>
            <input type="number" />
          </section>

          <select v-else-if="getFieldVariant(field.id) === 'SelectField'">
            <option v-for="option in field.options" :value="option">
              {{ option }}
            </option>
          </select>
        </div>
        <button class="saveButton" @click="saveChanges">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getMockFields } from '../mocks';

export default {
  components: {},
  props: {
    lot: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
      fieldsMap: {}
    };
  },
  created() {
    this.createFieldsMap();
  },
  methods: {
    createFieldsMap() {
      const fields = getMockFields();
      fields.forEach(field => {
        this.fieldsMap[field.fieldId] = field.variant;
      });
    },
    getFieldVariant(fieldId) {
      return this.fieldsMap[fieldId] || '';
    },
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

.field {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.saveButton {
  margin-top: 20px;
}

.priceSelector {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.priceSelector div {
  padding-left: 10px;
  padding-right: 10px;
}

.priceSelector input {
  width: 100%;
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

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
  border: 5px solid rebeccapurple;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
