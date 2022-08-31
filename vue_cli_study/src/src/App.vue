<template>
  <div>
    <form v-on:submit.prevent="submitForm">
      <div>
        <label for="username">id: </label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label for="password">pw: </label>
        <input type="text" id="password" v-model="password">
      </div>

      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    submitForm: function() {
      const userdata = {
        id: this.username,
        password: this.password
      }
      axios.post("https://kolon.sdfsdfsdfsdsdf", userdata)
        .then(response => {
          console.log(response);
        })
        .catch(error => console.log(error));
    }
  }
}
</script>

<style>

</style>
