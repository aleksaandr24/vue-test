<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
button {
  width: 150px;
  height: 40px;
  align-self: flex-end;
  border: 1px solid;
  background: none;
  color: teal;
  cursor: pointer;
}
</style>