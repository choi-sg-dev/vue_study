<template>
  <div>
    <ul>
      <li v-for="todolist in todoItems" v-bind:key="todolist">
        {{ todolist }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      todoItems: [],
    }
  },
  created(){
    for(var i = 0; i < localStorage.length; i++){
      this.todoItems.push(localStorage.key(i));
      console.log(this.todoItems);
    }
  }
}
</script>

<style>

</style>