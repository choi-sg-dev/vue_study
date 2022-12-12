<template>
  <div id="app">
    {{ name }}
    <child-component v-on:sendmessage="receivemessage"></child-component>
  </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue'

export default {
  name: 'app',
  data() {
    return {
      name: 'emit을 이용한 데이터 전달'
    }
  },
  components: {
    'child-component': ChildComponent
  },
  methods: {
    receivemessage(msg){
      this.name = msg;
    }
  },
}
</script>

<style>
</style>
