<script>
  export default {
    data () {
      return {
        species: 'dog',
        isWarning: false
      }
    }
  }
</script>

<template>
  <div>
    Differient spacies has different language.
    <!-- 条件渲染单个元素 -->
    <div v-if="species == 'dog'">{{species}} bark.</div>
    <div v-else>Oh, I can't recognize {{species}}.</div>

    <!-- 条件渲染多个元素 -->
    <template v-if="isWarning">
      <h3>So!Don't talk like a {{species}}!</h3>
      <p>Be like intelligent speces.</p>
    </template>
  </div>
</template>