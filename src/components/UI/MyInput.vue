<template>
  <input :value="value" @input="updateInput" type="text"><br>
</template>

<script>
export default {
  name: 'my-input',
  props: {
    value: String
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