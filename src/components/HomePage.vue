<template>
  <div>
    <div>
      home page!
    </div>
    <div class = "beian">
      <img src="../assets/beian.png">
      <a class="info" target="_blank" href="http://www.beian.miit.gov.cn/">
        皖ICP备19015641号
      </a>
    </div>
  </div>
</template>

<script>
</script>
<style>
  div.beian{
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    line-height: 150%;
    background:#E9E6E2;
    border-top: 1px solid rgba(255,255,255,.1);
    z-index: 11000;
    color:rgba(255,255,255,.4);
    font-size: 14px;
    padding: 5px 0;
  }
  div a.info{
    color:#638AF7
  }
</style>
