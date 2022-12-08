<template>
  <div>
    <AppHeader v-bind:propsdata="title"></AppHeader>
    <AppInput></AppInput>
    <AppList></AppList>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppInput from "./components/AppInput.vue";
import AppList from "./components/AppList.vue";

export default {
  data(){
    return {
      title: "To do list"
    }
  },
  components: {
    "AppHeader": AppHeader,
    "AppInput": AppInput,
    "AppList": AppList,
  }
}
</script>

<style>

</style>