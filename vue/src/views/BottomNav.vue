<template>
    <div class="nav-bottom">
        <router-link active-class="active" v-for="(v,i) in navData" :key="i" :to="v.path">
            <i :class="['iconfont',v.icon]"></i>
            <label>{{v.title}}</label>
        </router-link>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import {GETNAV} from '../store/actionType'
import { useStore } from 'vuex'
export default defineComponent({
    async setup(){
        const store=useStore();
        let navData=computed(()=>store.state.home.nav);
        if(navData.value.length==0){
            await store.dispatch('home/'+GETNAV);
            console.log(navData.value);
        }
        return {navData};
    }
})
</script>
<style scoped>
/* 路由点击样式 */
.active{
  color: lightblue;
}
</style>