<template>
  <div v-if="posts.length > 0">
    <strong>Post List</strong>
    <post-item v-for="post in posts" :key="post.id" :post="post" @remove="$emit('remove', post)"/>
  </div>
  <p v-else>There are no posts</p>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
div {
  padding: 15px;
}
p {
  margin: 15px;
  color: darkred;
}
</style>