import axios from "./index";

export function getNav<T>(){   //底部导航情求
    return axios.get('/nav-data');
}

export function getSwiper<T>(){  //轮播图片请求
    return axios.get('/swiper-data');
}

export function getList<T>(){     //列表数据请求
    return axios.get('/home/page');
}