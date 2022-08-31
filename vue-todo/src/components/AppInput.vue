<template>
  <div>
    <label for="myInput">할 일 입력</label>
    <input type="text" id="myInput" v-model="inputData" v-on:keypress.enter="addItem">
    <button v-on:click="addItem" type="submit">추가하기</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      inputData: "",
    }
  },
  methods: {
    addItem(){
      localStorage.setItem(this.inputData, this.inputData);
      this.clearItem();
    },
    clearItem(){
      this.inputData = "";
    }
  }
}
</script>

<style>

</style>