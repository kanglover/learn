<template>
  <div class="mainapp">
    <!-- 标题栏 -->
    <header class="mainapp-header">
      <h1>QianKun</h1>
    </header>
    <div class="mainapp-main">
      <!-- 侧边栏 -->
      <ul class="mainapp-sidemenu">
        <li onclick="push('/react16')">React16</li>
        <li onclick="push('/react15')">React15</li>
        <li onclick="push('/vue')">Vue</li>
        <li onclick="push('/vue3')">Vue3</li>
        <li onclick="push('/angular9')">Angular9</li>
        <li onclick="push('/purehtml')">Purehtml</li>
      </ul>
      <!-- 子应用  -->
      <main id="subapp-container"></main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {},
  methods: {
    push(path) {
      history.pushState(null, path, path);
    }
  }

</script>