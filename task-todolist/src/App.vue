<template>
  <div>
    <AppHeader v-bind:propsdata="title"></AppHeader>
    <AppInput v-on:sendadd="addTodo"></AppInput>
    <AppList v-bind:propsdata="todoItems" v-on:senddelete="deleteItem"></AppList>
    <AppFoot v-on:sendremove="removeAll"></AppFoot>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppInput from "./components/AppInput.vue";
import AppList from "./components/AppList.vue";
import AppFoot from "./components/AppFoot.vue";

export default {
  data(){
    return {
      title : "to do list",
      todoItems: [],      
    }
  },
  methods: {
    addTodo(received){
      if(received !== "") {
        const obj = {completed: false, item: received};
        localStorage.setItem(received, JSON.stringify(obj));
        this.todoItems.push(obj);
      }
    },
    deleteItem(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    removeAll() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  components: {
    "AppHeader" : AppHeader,
    "AppInput" : AppInput,
    "AppList" : AppList,
    "AppFoot" : AppFoot,
  }
}
</script>

<style>

</style>
