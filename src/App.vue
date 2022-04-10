<template>
  <div>
    <post-form @create="addPost"/>
    <post-list :posts="posts" @remove="removePost"/>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";

export default {
  components: {
    PostForm,
    PostList
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'Post Title 1', body: 'Post Description 1'},
        {id: 2, title: 'Post Title 2', body: 'Post Description 2'},
        {id: 3, title: 'Post Title 3', body: 'Post Description 3'}
      ]
    }
  },
  methods: {
    addPost(post) {
      this.posts.push(post);
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
</style>