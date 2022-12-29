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
  /*beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter:' + 'to: ', to, 'from: ', from);
    next({name: 'login', params: {id: 'cywon', pw: '1234'}})
    //next(); // to 로 이동시킴
    //next(false); // false라면 admin 페이지로 이동하지 않는다.
    //next('/login'); // admin 페이지로 가지않고, login 페이지로 감 (redirect 됨)
  }*/
  /*beforeRouteUpdate(to, from, next){ // beforeRouteUpdate : 현재 컴포넌트의 라우트에 변경이 발생하면 호출되는 메서드. (하위 경로에 해당하는 /admin/list, /admin/insert로 이동할 경우 호출된다)
    console.log("beforeRouteUpdate : " + "to ", to, "from: ", from);
    next();
  }*/
}
</script>

<style scoped>
  li {display: inline-block; padding: 5px;}
  li a {font-weight: bold; color: black;}
</style>
