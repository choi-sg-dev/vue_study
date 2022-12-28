<template>
  <div>
    <h3>{{title}}</h3>

    <ul class="white">
      <li><router-link :to="{name: 'productlist'}">제품 리스트(Product List)</router-link> | </li>
      <li><router-link :to="{name: 'productinsert'}">제품 추가(New Product)</router-link></li>
      <li><router-link :to="{name: 'productedit', params: {id: 'p01'}}">제품 수정(Edit Product)</router-link></li>
    </ul>

    <router-view></router-view> <!-- children 라우트 -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Admin 페이지'
    }
  },
}
</script>

<style scoped>
  li {display: inline-block; padding: 5px;}
  li a {font-weight: bold; color: black;}
</style>
