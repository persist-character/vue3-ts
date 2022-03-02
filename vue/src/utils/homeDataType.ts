export interface IHomeState{ //home模块数据约束
    swiper:ISwiper[],
    nav:INav[],
    list:IList[]
}

export interface IResponse{
    data:INav[]|ISwiper[]|IList[];
}

export interface ISwiper{    //轮播图片相对url
    url:string
}

export interface INav{     //导航数据
    title:string,
    icon:string,
    path:string
}

export interface IList{       //列表数据
    product_id:string,
    product_img_url:string,
    product_name:string,
    product_price:number,    //原始价格
    product_uprice:number,   //打折价格
}