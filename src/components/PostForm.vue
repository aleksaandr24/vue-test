<template>
  <form class="form" @submit.prevent>
      <strong>Add Post</strong><br>
      <my-input v-model:value="post.title" type="text" :placeholder="'post title'"/><br>
      <my-input v-model:value="post.body" type="text" :placeholder="'post text'"/><br>
      <my-button @click="addPost">Add</my-button>
    </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        id: undefined,
        title: '',
        body: ''
      }
    }
  },
  methods: {
    addPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
.form {
  padding: 15px 30px 15px 15px;
  display: flex;
  flex-direction: column;
}

</style>