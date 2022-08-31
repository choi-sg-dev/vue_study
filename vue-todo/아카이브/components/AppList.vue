<template>
  <ul>
    <li v-for="todoItem in todoItems" v-bind:key="todoItem">
      {{ todoItem }}
    </li>
  </ul>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: [],
    }
  },
  created() {
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  }
}
</script>

<style scoped>
*{margin: 0; padding: 0;}
  li {padding: 3px; list-style: none;}
</style>
