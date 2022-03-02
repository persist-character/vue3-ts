import {  Module} from 'vuex'
import { IGlobalState } from '..'
import { IHomeState ,IResponse ,IList,INav,ISwiper} from '@/utils/homeDataType'
import * as dataType from '../actionType'
import { getList, getNav, getSwiper } from '@/api/http';

const state:IHomeState={
    nav:[],
    swiper:[],
    list:[]
};
const home : Module<IHomeState,IGlobalState>={
    namespaced:true, //命名空间
    state,
    actions:{
        async [dataType.GETNAV]({commit}){      //底部导航
            const res=await getNav<IResponse>();
            commit(dataType.GETNAV,res.data.data);
        },

        async [dataType.GETSWIPER]({commit}){      //轮播
            const res=await getSwiper<IResponse>();
            console.log(res);
            commit(dataType.GETSWIPER,res.data.data);
        },

        async [dataType.GETLIST]({commit}){        //列表
            const res=await getList<IResponse>();
            commit(dataType.GETLIST,res.data.data);
        },
    },
    mutations:{
        [dataType.GETNAV](state,payload:INav[]){
            state.nav=payload;
        },

        [dataType.GETSWIPER](state,payload:ISwiper[]){
            state.swiper=payload;
        },

        [dataType.GETLIST](state,payload:IList[]){
            state.list=payload;
        },
    }
}

export default home;