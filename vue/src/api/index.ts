import axios,{AxiosResponse,AxiosRequestConfig} from "_axios@0.21.4@axios";

axios.defaults.baseURL='http://localhost:4000';

axios.interceptors.request.use((config:AxiosRequestConfig)=>{
    //请求之前的操作
    return config;
});

//请求响应之后的操作
axios.interceptors.response.use((res:AxiosResponse)=>{
    return res;
},err=>{
    console.log(err);
}) ;

export default axios;