interface IRouteData{
    name:string,
    title:string,
    path:string,
    component:string
}

export const routeData:IRouteData[]=[
    { name:'home', title: '首页', path: '/home',component:'Home'},
    { name:'detail', title: '列表详情', path: '/detail/:id',component:'Detail'},
    { name:'order', title: '订单', path: '/order', component:'Order'},
    { name:'find', title: '发现', path: '/find', component:'Find'},
    { name:'map', title: '地图', path: '/map', component:'Map'}
]