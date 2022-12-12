<template>
  <div id="app">
    <child-comp>
      <template v-slot:footer>
        <span class="footer">webisfree.com</span>
      </template>
    </child-comp>
  </div>
</template>

<script>
import ChildComp from './components/ChildComp.vue'

export default {
  name: 'app',
  components: {
    'child-comp': ChildComp
  }
}
</script>

<style>
</style>
