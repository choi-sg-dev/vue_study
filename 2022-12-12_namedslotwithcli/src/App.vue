<template>
  <div id="app">
    <h1>주의! slot, slot-scope는 이후 업데이트 될 Vue 3에서는 공식적으로 삭제된다고 하니 Vue에서 공식적으로 지원 할 v-slot만 사용하도록 합니다.</h1>

    <child-comp :ran_city="randomCity">
      <div slot="best">
        <figure>
          <img src="./assets/imgs/vienna.jpg" alt="">
          <figcaption>비엔나(Vienna)</figcaption>
        </figure>
      </div>
      <div slot="footer">
        <footer>
          <p>&copy; All right reserved</p>
        </footer>
      </div>
    </child-comp>
  </div>
</template>

<script>
import ChildComp from './components/ChildComp.vue'

export default {
  name: 'app',
  components: {
    'child-comp': ChildComp
  },
  data() {
    return {
      cities: [
        {cityname: 'paris', pic: require('@/assets/imgs/paris.jpg')},
        {cityname: 'amsterdam', pic: require('@/assets/imgs/amsterdam.jpg')},
        {cityname: 'dresden', pic: require('@/assets/imgs/dresden.jpg')},
      ]
    }
  },
  computed: {
    randomCity(){
      return this.cities[Math.floor(Math.random() * this.cities.length)]
    }
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
  margin-top: 60px;
}
</style>
