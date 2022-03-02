<template>
  <div>
    <Suspense>
      <template #default>
        <Banner />
      </template>
      <template #fallback><div>loading</div></template>
    </Suspense>
    <Suspense>
      <template #default>
        <List />
      </template>
      <template #fallback><div>loading</div></template>
    </Suspense>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Banner from "../components/Home/Banner.vue";
import List from "../components/Home/List.vue";

export default defineComponent({
  components: {
    Banner,
    List,
  },
});
</script>
