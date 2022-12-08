<template>
  <div class="container">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam molestiae reiciendis at incidunt eos nesciunt beatae ipsum, distinctio id illo sequi, odit necessitatibus possimus ullam laudantium fuga recusandae repudiandae veritatis!
    <child-component></child-component>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'
export default {
  component: {
    'child-component' : ChildComponent
  }
}
</script>

<style scoped>
  div{
    background: #00897b;
    color: white;
    padding:  10px 20px;
  }
</style>