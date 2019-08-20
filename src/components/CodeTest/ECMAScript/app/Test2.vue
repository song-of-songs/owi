<template>
  <p>点击一下按钮</p>
</template>

<script>
  
import * as math from "../libs/math"

export default {
  data () {
    return {}
  } ,
  app1 () {
    // body...
    alert("2π = " + math.sum(math.pi, math.pi));
  }
}

</script>