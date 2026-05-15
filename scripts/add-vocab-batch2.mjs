import { readFileSync, writeFileSync } from 'fs'
const f = './public/vocabulary-data.json'
const data = JSON.parse(readFileSync(f, 'utf8'))

Object.assign(data.NCE1, {
  "16": {
    "vocabulary": [
      {"word":"where","phonetic":"/weə/","pos":"adv.","def":"在哪里","example":"Where's Sally?"},
      {"word":"in","phonetic":"/ɪn/","pos":"prep.","def":"在……里","example":"She's in the garden."},
      {"word":"garden","phonetic":"/ˈɡɑːdn/","pos":"n.","def":"花园","example":"She's in the garden."},
      {"word":"under","phonetic":"/ˈʌndə/","pos":"prep.","def":"在……下","example":"Under the tree"},
      {"word":"tree","phonetic":"/triː/","pos":"n.","def":"树","example":"Under the tree"},
      {"word":"climb","phonetic":"/klaɪm/","pos":"v.","def":"爬","example":"Who is climbing the tree?"},
      {"word":"who","phonetic":"/huː/","pos":"pron.","def":"谁","example":"Who is it?"},
      {"word":"run","phonetic":"/rʌn/","pos":"v.","def":"跑","example":"Don't run!"},
      {"word":"grass","phonetic":"/ɡrɑːs/","pos":"n.","def":"草地","example":"On the grass"},
      {"word":"after","phonetic":"/ˈɑːftə/","pos":"prep.","def":"在……之后","example":"Run after the cat."}
    ],
    "quizzes": [
      {"q":"under 的意思是？","options":["在上面","在下面","在旁边","在前面"],"answer":1,"exp":"under 是在……下面"},
      {"q":"'Who is climbing the tree?' 问的是？","options":["什么时候","在哪里","谁在爬树","为什么"],"answer":2,"exp":"who 问的是谁"}
    ]
  },
  "17": {
    "vocabulary": [
      {"word":"day","phonetic":"/deɪ/","pos":"n.","def":"日子","example":"It's a fine day today."},
      {"word":"cloud","phonetic":"/klaʊd/","pos":"n.","def":"云","example":"There are some clouds."},
      {"word":"sky","phonetic":"/skaɪ/","pos":"n.","def":"天空","example":"The sky is blue."},
      {"word":"sun","phonetic":"/sʌn/","pos":"n.","def":"太阳","example":"The sun is shining."},
      {"word":"shine","phonetic":"/ʃaɪn/","pos":"v.","def":"照耀","example":"The sun is shining."},
      {"word":"family","phonetic":"/ˈfæməli/","pos":"n.","def":"家庭","example":"Mr. Jones and his family"},
      {"word":"walk","phonetic":"/wɔːk/","pos":"v.","def":"走路","example":"They're walking."},
      {"word":"bridge","phonetic":"/brɪdʒ/","pos":"n.","def":"桥","example":"Over the bridge"},
      {"word":"boat","phonetic":"/bəʊt/","pos":"n.","def":"船","example":"Some boats on the river"},
      {"word":"river","phonetic":"/ˈrɪvə/","pos":"n.","def":"河","example":"They live near the river."}
    ],
    "quizzes": [
      {"q":"'The sun is shining' 表示？","options":["下雨了","阳光照耀","刮风了","下雪了"],"answer":1,"exp":"shine 是照耀的意思"},
      {"q":"bridge 是什么？","options":["桥","船","河","路"],"answer":0,"exp":"bridge 是桥"}
    ]
  },
  "18": {
    "vocabulary": [
      {"word":"village","phonetic":"/ˈvɪlɪdʒ/","pos":"n.","def":"村庄","example":"Our village is small."},
      {"word":"valley","phonetic":"/ˈvæli/","pos":"n.","def":"山谷","example":"It's in a valley."},
      {"word":"between","phonetic":"/bɪˈtwiːn/","pos":"prep.","def":"在……之间","example":"Between two hills"},
      {"word":"hill","phonetic":"/hɪl/","pos":"n.","def":"小山","example":"On the hill"},
      {"word":"another","phonetic":"/əˈnʌðə/","pos":"det.","def":"另一个","example":"Another bridge"},
      {"word":"wife","phonetic":"/waɪf/","pos":"n.","def":"妻子","example":"My wife and I"},
      {"word":"along","phonetic":"/əˈlɒŋ/","pos":"prep.","def":"沿着","example":"Walk along the river"},
      {"word":"bank","phonetic":"/bæŋk/","pos":"n.","def":"河岸","example":"On the bank of the river"},
      {"word":"water","phonetic":"/ˈwɔːtə/","pos":"n.","def":"水","example":"The water is clean."},
      {"word":"swim","phonetic":"/swɪm/","pos":"v.","def":"游泳","example":"We swim in the river."}
    ],
    "quizzes": [
      {"q":"valley 指什么地形？","options":["山顶","山谷","平原","沙漠"],"answer":1,"exp":"valley 是山谷"},
      {"q":"between 表示？","options":["在上面","在下面","在之间","在旁边"],"answer":2,"exp":"between 是在……之间"}
    ]
  },
  "19": {
    "vocabulary": [
      {"word":"matter","phonetic":"/ˈmætə/","pos":"n.","def":"事情","example":"What's the matter?"},
      {"word":"tired","phonetic":"/taɪəd/","pos":"adj.","def":"累的","example":"I'm tired."},
      {"word":"thirsty","phonetic":"/ˈθɜːsti/","pos":"adj.","def":"渴的","example":"I'm thirsty."},
      {"word":"sit down","phonetic":"/sɪt daʊn/","pos":"v.","def":"坐下","example":"Sit down, please."},
      {"word":"right","phonetic":"/raɪt/","pos":"adj.","def":"好的","example":"All right."},
      {"word":"ice cream","phonetic":"/aɪs kriːm/","pos":"n.","def":"冰激凌","example":"An ice cream, please."}
    ],
    "quizzes": [
      {"q":"'What's the matter?' 用来问什么？","options":["时间","怎么了","在哪里","你好吗"],"answer":1,"exp":"询问怎么了、出什么事了"},
      {"q":"thirsty 的意思是？","options":["饿的","渴的","累的","冷的"],"answer":1,"exp":"thirsty 是口渴的"}
    ]
  },
  "20": {
    "vocabulary": [
      {"word":"big","phonetic":"/bɪɡ/","pos":"adj.","def":"大的","example":"It's a big box."},
      {"word":"small","phonetic":"/smɔːl/","pos":"adj.","def":"小的","example":"It's a small box."},
      {"word":"heavy","phonetic":"/ˈhevi/","pos":"adj.","def":"重的","example":"It's very heavy."},
      {"word":"light","phonetic":"/laɪt/","pos":"adj.","def":"轻的","example":"It's very light."},
      {"word":"long","phonetic":"/lɒŋ/","pos":"adj.","def":"长的","example":"A long box"},
      {"word":"shoe","phonetic":"/ʃuː/","pos":"n.","def":"鞋","example":"Give me the shoes."},
      {"word":"grandfather","phonetic":"/ˈɡrænfɑːðə/","pos":"n.","def":"祖父","example":"My grandfather"},
      {"word":"grandmother","phonetic":"/ˈɡrænmʌðə/","pos":"n.","def":"祖母","example":"My grandmother"}
    ],
    "quizzes": [
      {"q":"heavy 的反义词是？","options":["big","small","light","short"],"answer":2,"exp":"heavy（重）的反义词是 light（轻）"},
      {"q":"big 的反义词是？","options":["tall","small","thin","short"],"answer":1,"exp":"big（大）的反义词是 small（小）"}
    ]
  },
  "21": {
    "vocabulary": [
      {"word":"give","phonetic":"/ɡɪv/","pos":"v.","def":"给","example":"Give me a book."},
      {"word":"one","phonetic":"/wʌn/","pos":"pron.","def":"一个","example":"Which one?"},
      {"word":"which","phonetic":"/wɪtʃ/","pos":"det.","def":"哪一个","example":"Which book?"},
      {"word":"large","phonetic":"/lɑːdʒ/","pos":"adj.","def":"大的","example":"The large one"}
    ],
    "quizzes": [
      {"q":"'Which one?' 用来？","options":["问时间","做选择","问地点","打招呼"],"answer":1,"exp":"which 用来在多个选项中做选择"}
    ]
  },
  "22": {
    "vocabulary": [
      {"word":"empty","phonetic":"/ˈempti/","pos":"adj.","def":"空的","example":"The bottle is empty."},
      {"word":"full","phonetic":"/fʊl/","pos":"adj.","def":"满的","example":"The glass is full."},
      {"word":"glass","phonetic":"/ɡlɑːs/","pos":"n.","def":"杯子","example":"A glass of water"},
      {"word":"bottle","phonetic":"/ˈbɒtl/","pos":"n.","def":"瓶子","example":"A bottle of milk"},
      {"word":"sharp","phonetic":"/ʃɑːp/","pos":"adj.","def":"锋利的","example":"A sharp knife"},
      {"word":"small","phonetic":"/smɔːl/","pos":"adj.","def":"小的","example":"A small glass"},
      {"word":"fork","phonetic":"/fɔːk/","pos":"n.","def":"叉子","example":"A fork and a knife"},
      {"word":"knife","phonetic":"/naɪf/","pos":"n.","def":"刀子","example":"A sharp knife"},
      {"word":"spoon","phonetic":"/spuːn/","pos":"n.","def":"勺子","example":"A large spoon"}
    ],
    "quizzes": [
      {"q":"empty 的反义词是？","options":["big","full","clean","new"],"answer":1,"exp":"empty（空的）反义词是 full（满的）"},
      {"q":"knife 是什么？","options":["叉子","勺子","刀子","盘子"],"answer":2,"exp":"knife 是刀子"}
    ]
  },
  "23": {
    "vocabulary": [
      {"word":"on","phonetic":"/ɒn/","pos":"prep.","def":"在……上","example":"On the shelf"},
      {"word":"shelf","phonetic":"/ʃelf/","pos":"n.","def":"架子","example":"On the shelf"},
      {"word":"desk","phonetic":"/desk/","pos":"n.","def":"课桌","example":"On the desk"},
      {"word":"table","phonetic":"/ˈteɪbl/","pos":"n.","def":"桌子","example":"On the table"},
      {"word":"plate","phonetic":"/pleɪt/","pos":"n.","def":"盘子","example":"A clean plate"},
      {"word":"cupboard","phonetic":"/ˈkʌbəd/","pos":"n.","def":"食橱","example":"In the cupboard"},
      {"word":"cigarette","phonetic":"/ˌsɪɡəˈret/","pos":"n.","def":"香烟","example":"A box of cigarettes"},
      {"word":"television","phonetic":"/ˈtelɪvɪʒn/","pos":"n.","def":"电视机","example":"On the television"},
      {"word":"floor","phonetic":"/flɔː/","pos":"n.","def":"地板","example":"On the floor"},
      {"word":"newspaper","phonetic":"/ˈnjuːzpeɪpə/","pos":"n.","def":"报纸","example":"The newspaper is on the floor."}
    ],
    "quizzes": [
      {"q":"cupboard 是什么？","options":["杯子","食橱","桌子","椅子"],"answer":1,"exp":"cupboard 是食橱"},
      {"q":"shelf 的意思是？","options":["门","窗","架子","墙"],"answer":2,"exp":"shelf 是架子、搁板"}
    ]
  },
  "24": {
    "vocabulary": [
      {"word":"come","phonetic":"/kʌm/","pos":"v.","def":"来","example":"Come in, please."},
      {"word":"large","phonetic":"/lɑːdʒ/","pos":"adj.","def":"大的","example":"A large cup"},
      {"word":"cup","phonetic":"/kʌp/","pos":"n.","def":"杯子","example":"A cup of coffee"},
      {"word":"coffee","phonetic":"/ˈkɒfi/","pos":"n.","def":"咖啡","example":"A cup of coffee"},
      {"word":"tea","phonetic":"/tiː/","pos":"n.","def":"茶","example":"A cup of tea"},
      {"word":"sugar","phonetic":"/ˈʃʊɡə/","pos":"n.","def":"糖","example":"Do you want sugar?"},
      {"word":"milk","phonetic":"/mɪlk/","pos":"n.","def":"牛奶","example":"Do you want milk?"},
      {"word":"like","phonetic":"/laɪk/","pos":"v.","def":"喜欢","example":"Do you like coffee?"}
    ],
    "quizzes": [
      {"q":"'Do you like coffee?' 的意思是？","options":["你想喝咖啡吗","你喜欢咖啡吗","你有咖啡吗","这是咖啡吗"],"answer":1,"exp":"like 表示喜欢"},
      {"q":"tea 的意思是？","options":["咖啡","茶","牛奶","水"],"answer":1,"exp":"tea 是茶"}
    ]
  },
  "25": {
    "vocabulary": [
      {"word":"butcher","phonetic":"/ˈbʊtʃə/","pos":"n.","def":"屠夫","example":"At the butcher's"},
      {"word":"meat","phonetic":"/miːt/","pos":"n.","def":"肉","example":"I want some meat."},
      {"word":"beef","phonetic":"/biːf/","pos":"n.","def":"牛肉","example":"Some beef, please."},
      {"word":"lamb","phonetic":"/læm/","pos":"n.","def":"羊肉","example":"I want some lamb."},
      {"word":"husband","phonetic":"/ˈhʌzbənd/","pos":"n.","def":"丈夫","example":"Her husband"},
      {"word":"steak","phonetic":"/steɪk/","pos":"n.","def":"牛排","example":"A steak, please."},
      {"word":"mince","phonetic":"/mɪns/","pos":"n.","def":"肉馅","example":"Some mince, please."},
      {"word":"chicken","phonetic":"/ˈtʃɪkɪn/","pos":"n.","def":"鸡肉","example":"I want some chicken."},
      {"word":"tell","phonetic":"/tel/","pos":"v.","def":"告诉","example":"Tell me."},
      {"word":"truth","phonetic":"/truːθ/","pos":"n.","def":"实情","example":"Tell me the truth."},
      {"word":"either","phonetic":"/ˈaɪðə/","pos":"adv.","def":"也（否定句）","example":"I don't like lamb, either."}
    ],
    "quizzes": [
      {"q":"beef 指什么肉？","options":["猪肉","牛肉","鸡肉","羊肉"],"answer":1,"exp":"beef 是牛肉"},
      {"q":"'at the butcher's' 指在哪里？","options":["面包店","肉店","书店","药店"],"answer":1,"exp":"butcher's 是肉店"}
    ]
  },
  "26": {
    "vocabulary": [
      {"word":"climate","phonetic":"/ˈklaɪmət/","pos":"n.","def":"气候","example":"A pleasant climate"},
      {"word":"country","phonetic":"/ˈkʌntri/","pos":"n.","def":"国家","example":"Which country?"},
      {"word":"pleasant","phonetic":"/ˈpleznt/","pos":"adj.","def":"宜人的","example":"A pleasant climate"},
      {"word":"weather","phonetic":"/ˈweðə/","pos":"n.","def":"天气","example":"The weather is nice."},
      {"word":"spring","phonetic":"/sprɪŋ/","pos":"n.","def":"春天","example":"In spring"},
      {"word":"windy","phonetic":"/ˈwɪndi/","pos":"adj.","def":"有风的","example":"It's windy."},
      {"word":"warm","phonetic":"/wɔːm/","pos":"adj.","def":"温暖的","example":"It's warm."},
      {"word":"rain","phonetic":"/reɪn/","pos":"v.","def":"下雨","example":"It often rains."},
      {"word":"sometimes","phonetic":"/ˈsʌmtaɪmz/","pos":"adv.","def":"有时","example":"It sometimes rains."},
      {"word":"summer","phonetic":"/ˈsʌmə/","pos":"n.","def":"夏天","example":"In summer"},
      {"word":"autumn","phonetic":"/ˈɔːtəm/","pos":"n.","def":"秋天","example":"In autumn"},
      {"word":"winter","phonetic":"/ˈwɪntə/","pos":"n.","def":"冬天","example":"In winter"},
      {"word":"snow","phonetic":"/snəʊ/","pos":"v.","def":"下雪","example":"It often snows."},
      {"word":"January","phonetic":"/ˈdʒænjuəri/","pos":"n.","def":"一月","example":"In January"},
      {"word":"February","phonetic":"/ˈfebruəri/","pos":"n.","def":"二月","example":"In February"},
      {"word":"March","phonetic":"/mɑːtʃ/","pos":"n.","def":"三月","example":"In March"}
    ],
    "quizzes": [
      {"q":"climate 和 weather 的区别是？","options":["没区别","climate是气候，weather是天气","climate是温度，weather是湿度","完全一样"],"answer":1,"exp":"climate 指长期气候，weather 指短期天气"},
      {"q":"'It sometimes rains' 表示？","options":["总是下雨","有时下雨","从不下雨","正在下雨"],"answer":1,"exp":"sometimes 表示有时候"}
    ]
  },
  "27": {
    "vocabulary": [
      {"word":"season","phonetic":"/ˈsiːzn/","pos":"n.","def":"季节","example":"The best season"},
      {"word":"best","phonetic":"/best/","pos":"adj.","def":"最好的","example":"The best season"},
      {"word":"night","phonetic":"/naɪt/","pos":"n.","def":"夜晚","example":"At night"},
      {"word":"rise","phonetic":"/raɪz/","pos":"v.","def":"升起","example":"The sun rises early."},
      {"word":"early","phonetic":"/ˈɜːli/","pos":"adv.","def":"早","example":"The sun rises early."},
      {"word":"set","phonetic":"/set/","pos":"v.","def":"（太阳）落下","example":"The sun sets late."},
      {"word":"late","phonetic":"/leɪt/","pos":"adv.","def":"晚","example":"The sun sets late."},
      {"word":"interesting","phonetic":"/ˈɪntrəstɪŋ/","pos":"adj.","def":"有趣的","example":"An interesting subject"},
      {"word":"subject","phonetic":"/ˈsʌbdʒɪkt/","pos":"n.","def":"话题","example":"An interesting subject"},
      {"word":"conversation","phonetic":"/ˌkɒnvəˈseɪʃn/","pos":"n.","def":"谈话","example":"An interesting conversation"}
    ],
    "quizzes": [
      {"q":"rise 的反义词是？","options":["fall","set","go","come"],"answer":1,"exp":"太阳 rise（升起）和 set（落下）是反义"},
      {"q":"season 有几个？","options":["2个","3个","4个","5个"],"answer":2,"exp":"四季：spring, summer, autumn, winter"}
    ]
  },
  "28": {
    "vocabulary": [
      {"word":"live","phonetic":"/lɪv/","pos":"v.","def":"住","example":"Where do you live?"},
      {"word":"stay","phonetic":"/steɪ/","pos":"v.","def":"待","example":"Stay at home."},
      {"word":"home","phonetic":"/həʊm/","pos":"n.","def":"家","example":"Stay at home."},
      {"word":"housework","phonetic":"/ˈhaʊswɜːk/","pos":"n.","def":"家务","example":"She does the housework."},
      {"word":"lunch","phonetic":"/lʌntʃ/","pos":"n.","def":"午饭","example":"At lunch time"},
      {"word":"afternoon","phonetic":"/ˌɑːftəˈnuːn/","pos":"n.","def":"下午","example":"In the afternoon"},
      {"word":"usually","phonetic":"/ˈjuːʒuəli/","pos":"adv.","def":"通常","example":"He usually comes home late."},
      {"word":"together","phonetic":"/təˈɡeðə/","pos":"adv.","def":"一起","example":"They watch TV together."},
      {"word":"evening","phonetic":"/ˈiːvnɪŋ/","pos":"n.","def":"晚上","example":"In the evening"},
      {"word":"arrive","phonetic":"/əˈraɪv/","pos":"v.","def":"到达","example":"He arrives home at 7."}
    ],
    "quizzes": [
      {"q":"housework 指什么？","options":["作业","家务","建筑","装修"],"answer":1,"exp":"housework 是家务活"},
      {"q":"usually 表示频率有多高？","options":["从不","偶尔","通常","总是"],"answer":2,"exp":"usually 表示通常、经常"}
    ]
  },
  "29": {
    "vocabulary": [
      {"word":"shop","phonetic":"/ʃɒp/","pos":"v.","def":"购物","example":"She always shops on Saturday."},
      {"word":"Monday","phonetic":"/ˈmʌndeɪ/","pos":"n.","def":"星期一","example":"On Monday"},
      {"word":"Tuesday","phonetic":"/ˈtjuːzdeɪ/","pos":"n.","def":"星期二","example":"On Tuesday"},
      {"word":"Wednesday","phonetic":"/ˈwenzdeɪ/","pos":"n.","def":"星期三","example":"On Wednesday"},
      {"word":"Thursday","phonetic":"/ˈθɜːzdeɪ/","pos":"n.","def":"星期四","example":"On Thursday"},
      {"word":"Friday","phonetic":"/ˈfraɪdeɪ/","pos":"n.","def":"星期五","example":"On Friday"},
      {"word":"Saturday","phonetic":"/ˈsætədeɪ/","pos":"n.","def":"星期六","example":"On Saturday"},
      {"word":"Sunday","phonetic":"/ˈsʌndeɪ/","pos":"n.","def":"星期日","example":"On Sunday"}
    ],
    "quizzes": [
      {"q":"一周有几天？","options":["5天","6天","7天","8天"],"answer":2,"exp":"一周有7天，从Monday到Sunday"},
      {"q":"weekend 包括哪几天？","options":["周一周二","周五周六","周六周日","周日周一"],"answer":2,"exp":"weekend 是周末，包括 Saturday 和 Sunday"}
    ]
  },
  "30": {
    "vocabulary": [
      {"word":"grocery","phonetic":"/ˈɡrəʊsəri/","pos":"n.","def":"食品杂货","example":"At the grocer's"},
      {"word":"change","phonetic":"/tʃeɪndʒ/","pos":"n.","def":"零钱","example":"Here's your change."},
      {"word":"bar","phonetic":"/bɑː/","pos":"n.","def":"条","example":"A bar of soap"},
      {"word":"soap","phonetic":"/səʊp/","pos":"n.","def":"肥皂","example":"A bar of soap"},
      {"word":"pound","phonetic":"/paʊnd/","pos":"n.","def":"英镑","example":"One pound"},
      {"word":"tin","phonetic":"/tɪn/","pos":"n.","def":"罐头","example":"A tin of beans"}
    ],
    "quizzes": [
      {"q":"'a bar of soap' 中 bar 是什么意思？","options":["酒吧","条/块","门","杆"],"answer":1,"exp":"bar 这里指条/块，量词"},
      {"q":"change 在购物场景中指？","options":["改变","零钱","交换","衣服"],"answer":1,"exp":"change 在购物中指找零、零钱"}
    ]
  }
})

writeFileSync(f, JSON.stringify(data, null, 2) + '\n')
console.log('✅ NCE1 Lessons 16-30 已添加')
