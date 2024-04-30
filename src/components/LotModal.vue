<template>
  <div class="modal">
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
</template>

<script>
import { getMockFields } from '../mocks';

export default {
  props: {
    lot: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
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
    saveChanges() {
      console.log("Сохранение изменений");
      this.$emit('save');
    },
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style>
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