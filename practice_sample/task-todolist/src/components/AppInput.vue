<template>
  <div>
    <input type="text" v-model="inputData" v-on:keydown.enter="sendadd">
    <button type="button" v-on:click="sendadd">plus</button>
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
    sendadd(){
      this.$emit('sendadd', this.inputData);
      this.clearInput();
    },    
    clearInput(){
      this.inputData = "";
    }
  }
}
</script>

<style>

</style>
