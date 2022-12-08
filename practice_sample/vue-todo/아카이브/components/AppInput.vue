<template>
  <div>
    <input type="text" v-model="inputItem" v-on:keyup.enter="addTodo">
    <button type="button" v-on:click="addTodo">+</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      inputItem: "",
    }
  },
  methods: {
    addTodo: function() {
      localStorage.setItem(this.inputItem, this.inputItem);
      this.clearInput();
    },
    clearInput: function() {
      this.inputItem = "";
    },
  }
}
</script>

<style>

</style>
