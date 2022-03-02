<template>
  <div class="index-main">
    <ul>
      <li class="lists" v-for="v in list" :key="v.product_id">
        <router-link :to="'/detail/' + v.product_id">
          <img :src="v.product_img_url" alt="" />
        </router-link>
        <span class="name">{{ v.product_name }}</span>
        <label>
          <span class="price-text">￥{{ v.product_price }}</span>
          <span class="discount">￥{{ v.product_uprice }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { IGlobalState } from "../../store";
import { GETLIST } from "../../store/actionType";
export default defineComponent({
  async setup() {
    const store = useStore<IGlobalState>();
    let list = computed(() => store.state.home.list);
    if (list.value.length == 0) {
      await store.dispatch("home/" + GETLIST);
    }
    return { list };
  },
});
</script>