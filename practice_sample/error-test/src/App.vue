<template>
  <div id="app">
    <div class="menu">
      <a v-for="menu in menus" :key="menu" href="">{{ menu }}</a>
    </div>

    <div>
      <h4>{{ products[0] }}</h4>
      <p>50 만원</p>
      <button @click="reportCount[0]++">허위매물신고</button> <span>신고수 : {{ reportCount[0] }}</span>
    </div>
    <!-- <div>
      <h4>{{ products[1] }}</h4>
      <p>60 만원</p>
      <button @click="reportCount[1]++">허위매물신고</button> <span>신고수 : {{ reportCount[1] }}</span>
    </div>
    <div>
      <h4>{{ products[2] }}</h4>
      <p>70 만원</p>
      <button @click="reportCount[2]++">허위매물신고</button> <span>신고수 : {{ reportCount[2] }}</span>
    </div> -->

    <!-- <div v-for="(item, index) in products" v-bind:key="item">
      <h4>{{ item }}</h4>
      <p>{{ prices[index] }}</p>
    </div> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      reportCount: [0, 0, 0],
      //reportCount: 0,
      prices: ['50만원', '60만원', '70만원'],
      menus: ['Home', 'Shop', 'About'],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
    }
  },
  /*methods: {
    increase(){
      this.reportCount++;
    },
  },*/
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: red;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
