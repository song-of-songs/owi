<template>
  <div>

    <div>
      <h1>{{ title }}</h1>
    </div>

    <div>
      <table>

        <tr v-for='blog in blogs' :key="blog">

          <td @click='show_blog(blog.id)'>
            {{ blog.id }}
          </td>

          <td @click='show_blog(blog.id)'>
            {{ blog.title }}
          </td>

          <td>
            {{ blog.created_at }}
          </td>

        </tr>

      </table>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '博客列表页',
      blogs: [
      ]
    }
  },
  mounted () {
    this.$http.get('api/interface/blogs/all').then((response) => {
      console.info(response.body)
      this.blogs = response.body.blogs
    }, (response) => {
      console.error(response)
    })
  },
  methods: {
    show_blog: function (blogId) {
      this.$router.push({name: 'Blog', query: {id: blogId}})
    }
  }
}
</script>

<style>
  h1 {
    color: #AFAFAF;
  }
  td {
    color: #428353;
    border-bottom: 1px solid grey;
  }
</style>
