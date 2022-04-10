<template>
  <div>
    <div class="top-header">
      <h1>Post Page</h1>
      <my-button @click="showDialog">Create Post</my-button>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="addPost"/>
    </my-dialog>
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
      ],
      dialogVisible: false
    }
  },
  methods: {
    addPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
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

.top-header {
  margin: 15px;
}

.top-header h1 {
  margin: 15px 0;
}

</style>