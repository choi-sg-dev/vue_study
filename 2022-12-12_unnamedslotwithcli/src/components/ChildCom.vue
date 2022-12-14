<template>
  <div>
    <p>Child 컴포넌트</p>
    <!-- 아래에 slot을 통해 App.vue에서 정의한 <p>...</p> 데이터가 표시됨 -->
    <slot></slot>
    <slot></slot>
  </div>
</template>

<style scoped>
  p {border: 3px solid teal; padding: 4px;}  
</style>