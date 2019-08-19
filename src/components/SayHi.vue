<template>
  <div class='hi'>
    {{ message }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'ni hao ~'
    }
  }
}
</script>

<style>
  .hi {
    color: red;
    font-size: 20px;
  }
</style>
