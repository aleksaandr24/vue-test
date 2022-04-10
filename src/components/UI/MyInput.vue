<template>
  <input :value="value" @input="updateInput" type="text" :placeholder="placeholder"><br>
</template>

<script>
export default {
  name: 'my-input',
  props: {
    value: String,
    placeholder: String
  },
  methods: {
    updateInput(event) {
      this.$emit('update:value', event.target.value)
    }
  }
}
</script>

<style scoped>
input {
  padding: 5px;
}
</style>