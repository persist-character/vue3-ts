//require -- node
var express = require("express");

var bodyParser = require("body-parser");

var app = express();
// var router = express.Router();

app.use(bodyParser.json()); //解析前端发的json数据
app.use(bodyParser.urlencoded({ extended: true }));

//跨域 js进阶(node nginx webpack) cors 中间件 拦截器
app.use(function (req, res, next) {
  //http请求的来源
  res.setHeader("Access-Control-Allow-Origin", "*");
  //http请求的方法 get put post delete
  res.setHeader("Access-Control-Allow-Methods", "*");
  //http请求的头 token jwt cookie
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// app.all("*", function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

app.get("/nav-data", function (req, res) {
  res.status(200).send({
    code: 200,
    data: [
      {
        title: "首页",
        path: "/home",
        icon: "iconiconfontzhizuobiaozhun023101"
      },
      { title: "订单", path: "/order", icon: "icondingdan" },
      { title: "发现", path: "/find", icon: "iconfaxian1" },
      { title: "地图", path: "/map", icon: "iconwo1" }
    ]
  });
});

app.get("/swiper-data", function (req, res) {
  res.status(200).send({
    code: 200,
    data: [
      { url: "/img/1.jpg" },
      { url: "/img/2.jpg" },
      { url: "/img/3.jpg" },
      { url: "/img/4.jpg" },
      { url: "/img/5.jpg" },
      { url: "/img/6.jpg" }
    ]
  });
});

app.get("/home/page", function (req, res) {
  res.status(200).send({
    code: 200,
    data: [
      {
        product_id: 3,
        product_img_url:
          "https://gd1.alicdn.com/bao/uploaded/i1/2254228937/TB2pqExhpXXXXXkXXXXXXXXXXXX_!!2254228937.jpg",
        product_name:
          "素缕2015冬装新款文艺百搭羊毛毛呢外套女九分袖短款SL546031栐",
        product_price: 379,
        product_uprice: 329
      },
      {
        product_id: 4,
        product_img_url:
          "https://gd1.alicdn.com/bao/uploaded/i1/TB100kJKFXXXXbIXVXXXXXXXXXX_!!0-item_pic.jpg",
        product_name:
          "S家原创设计欧洲站女装街头风斗篷立领个性短款棉衣a字蓬蓬棉服女",
        product_price: 596,
        product_uprice: 298
      },
      {
        product_id: 5,
        product_img_url:
          "https://gd1.alicdn.com/bao/uploaded/i1/TB1xmimJFXXXXXJXpXXXXXXXXXX_!!0-item_pic.jpg",
        product_name:
          "七七之缘2015秋冬新款女装韩版 黑色v领蕾丝修身显瘦背带裙连衣裙",
        product_price: 358,
        product_uprice: 148
      }
    ]
  });
});

app.listen(4000, function () {
  console.log("服务已启动，端口4000 ^-^");
});
