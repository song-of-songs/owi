<template>
  <div>
    <div>
      <h1>{{ title }}</h1>
    </div>
    <div>
      <table>
        <tr v-for='blog in blogs' :key="blog">
          <td>
            {{ blog.id }}
          </td>
          <td>
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
