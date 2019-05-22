// 用mockjs模拟生成数据
var Mock = require('mockjs');

let mr = Mock.Random;//提取mock的随机对象

//随机id和图片
let mapData = (n) => {
  var data = [];

  for (var i = 1; i <= n; i++) {

    data.push({
      id: i,
      title: "@ctitle(4)",
      "number|1-180":20,
      "price|20-180": 10,
      image:mr.image('90x90',mr.color()),
      detail:{
        fuwu:"@cparagraph(10,40)",
        content:"@cparagraph(10,40)",
        fanwei:"@cparagraph(10,40)"
      }
    })
  }
  return data
};

//json-server 要对象||函数(返回mock后的数据)
module.exports = {
  ...Mock.mock({
    'home': mapData(10),//解决 auth_icon 不随机
    'service': mapData(21),
    'recom|30':[
      {
        'id|+1': 1,
        title: "@ctitle(4)",
        address:"@county(true)",
        "distance|1-10.1":1,
        img:mr.image('90x90',mr.color())
      }
    ] ,
    'detail|100':[
      {
        'id|+1': 1,
        title: "@ctitle(4)",
        "price|50-300":50,
        image:mr.image('90x90',mr.color()),
        detail:{
          content:"@cparagraph(10,40)",
          img1:mr.image('390x800',mr.color(),mr.cword(1))
        }
      }
    ]
  })
};
