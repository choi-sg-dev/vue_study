<template>
  <div id="app">
    <child-com>
      <p>파리(Paris)에 가면 이른 저녁에 에펠탑 구경을 추천한다.</p>
    </child-com>
  </div>
</template>

<script>
import ChildCom from './components/ChildCom.vue'

export default {
  name: 'App',
  components: {
    'child-com': ChildCom
  }
}
</script>

<style>
</style>
