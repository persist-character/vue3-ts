<template>
<div>
  <router-view/>
  <Suspense>
      <template #default>
        <BottomNav/>
      </template>
      <template #fallback><div>loading</div></template>
    </Suspense>
</div>
  
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BottomNav from './views/BottomNav.vue'
export default defineComponent({
  components:{
    BottomNav
  }
})
</script>

<style>

</style>
