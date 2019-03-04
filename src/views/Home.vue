<template>
  <div class="sheet">
    <articles></articles>
  </div>
</template>

<script>
import Articles from '@/components/Articles';

export default {
  name: 'Home',
  components: {
    Articles
  }
}
</script>

<style lang="scss" scoped>

.sheet {
  margin: 0;
}
</style>