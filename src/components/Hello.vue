<template>
  <div>

    <div>
      <h1 class="h1">{{ my_value }}</h1>
      <p>加油哇！</p>
    </div>

    <div>
      <input type='button' @click='show_my_value()' value='show' />
    </div>

    <div>
      <input type='button' v-on:click="say_hi('Jim')" value="show2" />
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      my_value: '默认值'
    }
  },
  mothods: {
    show_my_value: function () {
      alert('my_value: ' + this.my_value)
    },

    say_hi: function (name) {
      alert('hi,' + name)
    }
  }
}
</script>

<style>
  .h1{
    color: blue;
}
</style>
