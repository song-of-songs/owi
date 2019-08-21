<template>
  <div>
    <div>

      <div>
        <p>
          <span>ID：</span>
          <span>{{ blog.id }}</span>
        </p>
      </div>

      <div>
        <p>
          <span>标题：</span>
          <span>{{ blog.title }}</span>
        </p>
      </div>

      <div>
        <p>
          <span>发布于：</span>
          <span>{{ blog.created_at }}</span>
        </p>
      </div>

      <div>
        <p>
          <span>内容：</span>
        </p>
        <div v-html='blog.body'>{{ blog.body }}</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blog: {}
    }
  },
  mounted () {
    this.$http.get('api/interface/blogs/show?id=' + this.$route.query.id).then((response) => {
      this.blog = response.body.result
    }, (response) => {
      console.error(response)
    })
  }
}
</script>
