<template>
  <div>
    <AppHeader v-bind:propsdata="title"></AppHeader>
    <AppInput></AppInput>
    <AppList></AppList>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppInput from "./components/AppInput.vue";
import AppList from "./components/AppList.vue";
import AppFooter from "./components/AppFoot.vue";
export default {
  data: function() {
    return {
      title: "TODO APP 만들기",
    }
  },
  components: {
    "AppHeader": AppHeader,
    "AppInput": AppInput,
    "AppList": AppList,
    "AppFooter": AppFooter,
  }
}
</script>

<style>

</style>
