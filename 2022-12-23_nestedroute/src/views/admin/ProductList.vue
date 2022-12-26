<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>제품코드</th>
          <th>제품명</th>
          <th>가격</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.pcode" v-on:click="sendCode(product.pcode)">
          <td>{{ product.pcode }}</td>
          <td>{{ product.pname }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {pcode: 'p01', pname: 'LG gram 노트북', description: 'OS: Windows 10 Home, CPU: intel', price: 1745160},
        {pcode: 'p02', pname: '페레가모 선글라스', description: '병행수입제품', price: 139400},
        {pcode: 'p03', pname: '단골언니 신발', description: '저렴한 가격의 신발', price: 12800},
      ]
    }
  },
  methods: {
    sendCode(inCode){
      const id = inCode;
      this.$router.push({name: 'productedit', params: {id}});
    }
  },
}
</script>