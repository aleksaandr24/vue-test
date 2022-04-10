<template>
  <div class="post">
      <div class="post__body">
        <div><strong>Title</strong> {{ post.title }}</div>
        <div><strong>Description</strong> {{ post.body }}</div>
      </div>
      <div class="post__btns">
        <my-button @click="$emit('remove', post)">Delete</my-button>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 1px solid teal;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}
</style>