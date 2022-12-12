<template>
  <div class="main">
    <div class="best">
      <h3>추천하는 관광지</h3>
      <slot name="best"></slot>
    </div>
    <div class="city">
      <h3> {{ ran_city.cityname }}</h3>
      <img :src="ran_city.pic" alt="">
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['ran_city']
}
</script>