<template>
  <div class="banner">
    <img
      v-for="(v, i) in imgUrl"
      :key="i"
      v-show="i == flag"
      :src="require('@/assets' + v.url)"
    />
    <div class="banner-circle">
      <ul>
        <li
          v-for="(v, i) in imgUrl"
          :key="v"
          :class="{ 'selected': i == flag }"
          @click="flag=i"
        ></li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { IGlobalState } from "../../store/index";
import { computed, defineComponent, onMounted, onUnmounted, reactive, toRefs } from "vue";
import { Store, useStore } from "vuex";
import { GETSWIPER } from "../../store/actionType";
function useSwiper(store:Store<IGlobalState>){
  let imgUrl = computed(() => store.state.home.swiper);
  onMounted(()=>{
    console.log(123);
    if (imgUrl.value.length == 0) {
      store.dispatch("home/" + GETSWIPER);
    }
  });
  return imgUrl;
}
export default defineComponent({
  setup() {
    const store = useStore<IGlobalState>();
    let imgUrl=useSwiper(store);
    console.log(imgUrl.value);
    const state = reactive({
      flag: 1,
      timer: 0,
    });
    const play = () => {
      state.flag++;
      if (state.flag == imgUrl.value.length) {
        state.flag = 0;
      }
    };
    const autoPlay = () => {
      state.timer = setInterval(play, 1800);
    };
    onMounted(() => {
      autoPlay();
    });
    onUnmounted(() => {
      clearInterval(state.timer);
    });
    return {
      imgUrl,
      ...toRefs(state),
    };
  },
});
</script>