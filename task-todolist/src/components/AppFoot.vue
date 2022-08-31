<template>
  <div>
    <button v-on:click="sendremove">RemoveAll</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendremove(){
      this.$emit('sendremove');
    }
  }
}
</script>

<style>

</style>
