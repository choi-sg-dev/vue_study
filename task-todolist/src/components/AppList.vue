<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item">
        <span v-bind:class="{checked: todoItem.completed}" @click="toggleItem(todoItem, index)">CHK</span>
        <span class="item" v-bind:class="{tComplete: todoItem.completed}">{{ todoItem.item }}</span>
        <button v-on:click="senddelete(todoItem, index)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['propsdata'],
  methods:{
    senddelete(todoItem, index){
      this.$emit("senddelete", todoItem, index);
    },
    toggleItem(todoItem, index) {
      console.log(todoItem, index);
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    } 
  },
}
</script>

<style scoped>
  ul li {padding: 5px; list-style: none;}
  .item{margin: 0 10px;}
  .tComplete{text-decoration: line-through;}
  .checked{color: red;}
</style>
