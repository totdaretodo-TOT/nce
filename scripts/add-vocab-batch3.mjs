import { readFileSync, writeFileSync } from 'fs'
const f = './public/vocabulary-data.json'
const data = JSON.parse(readFileSync(f, 'utf8'))

Object.assign(data.NCE1, {
  "31": {
    "vocabulary": [
      {"word":"bad","phonetic":"/bæd/","pos":"adj.","def":"坏的","example":"A bad cold"},
      {"word":"cold","phonetic":"/kəʊld/","pos":"n.","def":"感冒","example":"I have a cold."},
      {"word":"headache","phonetic":"/ˈhedeɪk/","pos":"n.","def":"头痛","example":"I have a headache."},
      {"word":"aspirin","phonetic":"/ˈæsprɪn/","pos":"n.","def":"阿司匹林","example":"Take an aspirin."},
      {"word":"earache","phonetic":"/ˈɪəreɪk/","pos":"n.","def":"耳痛","example":"I have an earache."},
      {"word":"toothache","phonetic":"/ˈtuːθeɪk/","pos":"n.","def":"牙痛","example":"I have a toothache."},
      {"word":"doctor","phonetic":"/ˈdɒktə/","pos":"n.","def":"医生","example":"See the doctor."},
      {"word":"stomach ache","phonetic":"/ˈstʌmək eɪk/","pos":"n.","def":"胃痛","example":"I have a stomach ache."},
      {"word":"medicine","phonetic":"/ˈmedsn/","pos":"n.","def":"药","example":"Take this medicine."},
      {"word":"temperature","phonetic":"/ˈtemprətʃə/","pos":"n.","def":"温度/体温","example":"I have a temperature."},
      {"word":"flu","phonetic":"/fluː/","pos":"n.","def":"流感","example":"I have flu."}
    ],
    "quizzes": [
      {"q":"headache 指哪里痛？","options":["胃","头","耳朵","牙"],"answer":1,"exp":"headache 是头痛"},
      {"q":"'I have a temperature' 表示？","options":["我知道温度","我发烧了","天气很热","我很冷"],"answer":1,"exp":"have a temperature 表示发烧"}
    ]
  },
  "32": {
    "vocabulary": [
      {"word":"thank","phonetic":"/θæŋk/","pos":"v.","def":"感谢","example":"Thank you, doctor."},
      {"word":"better","phonetic":"/ˈbetə/","pos":"adj.","def":"好转的","example":"I feel better now."},
      {"word":"certainly","phonetic":"/ˈsɜːtnli/","pos":"adv.","def":"当然","example":"Certainly!"},
      {"word":"get up","phonetic":"/ɡet ʌp/","pos":"v.","def":"起床","example":"You must not get up."},
      {"word":"yet","phonetic":"/jet/","pos":"adv.","def":"还","example":"You mustn't get up yet."},
      {"word":"rich","phonetic":"/rɪtʃ/","pos":"adj.","def":"油腻的","example":"Don't eat rich food."},
      {"word":"food","phonetic":"/fuːd/","pos":"n.","def":"食物","example":"Rich food"}
    ],
    "quizzes": [
      {"q":"'You mustn't get up yet' 表示？","options":["你必须起床","你还不能起床","你可以起床","你想起床吗"],"answer":1,"exp":"mustn't 表示不许/不能"},
      {"q":"rich food 指什么？","options":["贵的食物","油腻的食物","健康的食物","好吃的食物"],"answer":1,"exp":"rich food 指油腻的食物"}
    ]
  },
  "33": {
    "vocabulary": [
      {"word":"baby","phonetic":"/ˈbeɪbi/","pos":"n.","def":"婴儿","example":"She's a baby."},
      {"word":"hair","phonetic":"/heə/","pos":"n.","def":"头发","example":"She has beautiful hair."},
      {"word":"cry","phonetic":"/kraɪ/","pos":"v.","def":"哭","example":"The baby is crying."},
      {"word":"laugh","phonetic":"/lɑːf/","pos":"v.","def":"笑","example":"Don't laugh!"},
      {"word":"teeth","phonetic":"/tiːθ/","pos":"n.","def":"牙齿","example":"She has no teeth."},
      {"word":"all","phonetic":"/ɔːl/","pos":"adv.","def":"都","example":"We're all very well."}
    ],
    "quizzes": [
      {"q":"cry 的反义词是？","options":["walk","laugh","run","sleep"],"answer":1,"exp":"cry（哭）的反义词是 laugh（笑）"},
      {"q":"teeth 是 tooth 的什么形式？","options":["过去式","复数","比较级","否定"],"answer":1,"exp":"teeth 是 tooth 的复数形式"}
    ]
  },
  "34": {
    "vocabulary": [
      {"word":"weekend","phonetic":"/ˌwiːkˈend/","pos":"n.","def":"周末","example":"At the weekend"},
      {"word":"church","phonetic":"/tʃɜːtʃ/","pos":"n.","def":"教堂","example":"We go to church."},
      {"word":"dairy","phonetic":"/ˈdeəri/","pos":"n.","def":"乳品店","example":"At the dairy"},
      {"word":"grocer","phonetic":"/ˈɡrəʊsə/","pos":"n.","def":"食品杂货商","example":"At the grocer's"},
      {"word":"greengrocer","phonetic":"/ˈɡriːnɡrəʊsə/","pos":"n.","def":"蔬菜水果商","example":"At the greengrocer's"},
      {"word":"newsagent","phonetic":"/ˈnjuːzeɪdʒənt/","pos":"n.","def":"报刊经销商","example":"At the newsagent's"},
      {"word":"stationer","phonetic":"/ˈsteɪʃənə/","pos":"n.","def":"文具商","example":"At the stationer's"},
      {"word":"chemist","phonetic":"/ˈkemɪst/","pos":"n.","def":"药剂师","example":"At the chemist's"}
    ],
    "quizzes": [
      {"q":"greengrocer 卖什么？","options":["肉类","蔬菜水果","文具","药品"],"answer":1,"exp":"greengrocer 是蔬菜水果商"},
      {"q":"chemist's 是什么店？","options":["书店","药店","花店","鞋店"],"answer":1,"exp":"chemist's 是药店"}
    ]
  },
  "35": {
    "vocabulary": [
      {"word":"race","phonetic":"/reɪs/","pos":"n.","def":"比赛","example":"A car race"},
      {"word":"crowd","phonetic":"/kraʊd/","pos":"n.","def":"人群","example":"A large crowd"},
      {"word":"stand","phonetic":"/stænd/","pos":"v.","def":"站","example":"Stand up!"},
      {"word":"exciting","phonetic":"/ɪkˈsaɪtɪŋ/","pos":"adj.","def":"令人兴奋的","example":"It's very exciting."},
      {"word":"just","phonetic":"/dʒʌst/","pos":"adv.","def":"正好","example":"It's just the beginning."},
      {"word":"finish","phonetic":"/ˈfɪnɪʃ/","pos":"n.","def":"终点","example":"Near the finish"},
      {"word":"winner","phonetic":"/ˈwɪnə/","pos":"n.","def":"获胜者","example":"The winner!"},
      {"word":"behind","phonetic":"/bɪˈhaɪnd/","pos":"prep.","def":"在后面","example":"Behind the car"}
    ],
    "quizzes": [
      {"q":"exciting 的意思是？","options":["无聊的","令人兴奋的","困难的","简单的"],"answer":1,"exp":"exciting 是令人兴奋的"},
      {"q":"winner 是什么人？","options":["失败者","获胜者","观众","裁判"],"answer":1,"exp":"winner 是获胜者"}
    ]
  },
  "36": {
    "vocabulary": [
      {"word":"want","phonetic":"/wɒnt/","pos":"v.","def":"想要","example":"I want a cup of coffee."},
      {"word":"speak","phonetic":"/spiːk/","pos":"v.","def":"说","example":"I can't speak English."},
      {"word":"terrible","phonetic":"/ˈterəbl/","pos":"adj.","def":"糟糕的","example":"He's a terrible man!"},
      {"word":"believe","phonetic":"/bɪˈliːv/","pos":"v.","def":"相信","example":"I don't believe it!"},
      {"word":"phone","phonetic":"/fəʊn/","pos":"v.","def":"打电话","example":"Phone the police!"},
      {"word":"moment","phonetic":"/ˈməʊmənt/","pos":"n.","def":"片刻","example":"Just a moment."},
      {"word":"next door","phonetic":"/nekst dɔː/","pos":"adj.","def":"隔壁的","example":"The next-door neighbour"}
    ],
    "quizzes": [
      {"q":"terrible 的意思是？","options":["好的","糟糕的","有趣的","美丽的"],"answer":1,"exp":"terrible 是糟糕的、可怕的"},
      {"q":"'Just a moment' 表示？","options":["再见","等一下","你好","谢谢"],"answer":1,"exp":"请等一下、稍等片刻"}
    ]
  },
  "37": {
    "vocabulary": [
      {"word":"way","phonetic":"/weɪ/","pos":"n.","def":"路","example":"Can you tell me the way?"},
      {"word":"street","phonetic":"/striːt/","pos":"n.","def":"街道","example":"King Street"},
      {"word":"take","phonetic":"/teɪk/","pos":"v.","def":"走（路）","example":"Take the first turning."},
      {"word":"turning","phonetic":"/ˈtɜːnɪŋ/","pos":"n.","def":"转弯处","example":"The first turning on the left."},
      {"word":"another","phonetic":"/əˈnʌðə/","pos":"det.","def":"另一个","example":"Take another turning."},
      {"word":"along","phonetic":"/əˈlɒŋ/","pos":"prep.","def":"沿着","example":"Go along the street."},
      {"word":"cross","phonetic":"/krɒs/","pos":"v.","def":"横过","example":"Cross the street."}
    ],
    "quizzes": [
      {"q":"'Can you tell me the way to...?' 用于？","options":["买东西","问路","打招呼","道歉"],"answer":1,"exp":"用于问路"},
      {"q":"cross 的意思是？","options":["沿着走","横穿","停下","转弯"],"answer":1,"exp":"cross 是横过、穿过"}
    ]
  },
  "38": {
    "vocabulary": [
      {"word":"uncomfortable","phonetic":"/ʌnˈkʌmftəbl/","pos":"adj.","def":"不舒服的","example":"These shoes are uncomfortable."},
      {"word":"wear","phonetic":"/weə/","pos":"v.","def":"穿","example":"I can't wear them."},
      {"word":"pair","phonetic":"/peə/","pos":"n.","def":"双/对","example":"A pair of shoes"},
      {"word":"fashion","phonetic":"/ˈfæʃn/","pos":"n.","def":"时尚","example":"They're in fashion."},
      {"word":"size","phonetic":"/saɪz/","pos":"n.","def":"尺码","example":"What size?"}
    ],
    "quizzes": [
      {"q":"uncomfortable 的意思是？","options":["舒服的","不舒服的","好看的","便宜的"],"answer":1,"exp":"un- 前缀表否定，uncomfortable 是不舒服的"},
      {"q":"'a pair of shoes' 指？","options":["一只鞋","一双鞋","很多鞋","半只鞋"],"answer":1,"exp":"a pair of 表示一双/一对"}
    ]
  },
  "39": {
    "vocabulary": [
      {"word":"dentist","phonetic":"/ˈdentɪst/","pos":"n.","def":"牙医","example":"Go to the dentist."},
      {"word":"appointment","phonetic":"/əˈpɔɪntmənt/","pos":"n.","def":"预约","example":"I have an appointment."},
      {"word":"urgent","phonetic":"/ˈɜːdʒənt/","pos":"adj.","def":"紧急的","example":"It's urgent!"},
      {"word":"until","phonetic":"/ʌnˈtɪl/","pos":"prep.","def":"直到","example":"Until tomorrow"}
    ],
    "quizzes": [
      {"q":"dentist 是什么医生？","options":["眼科","牙科","心脏科","皮肤科"],"answer":1,"exp":"dentist 是牙医"},
      {"q":"urgent 表示？","options":["不重要","紧急的","有趣的","缓慢的"],"answer":1,"exp":"urgent 是紧急的"}
    ]
  },
  "40": {
    "vocabulary": [
      {"word":"shopping list","phonetic":"/ˈʃɒpɪŋ lɪst/","pos":"n.","def":"购物清单","example":"Here's a shopping list."},
      {"word":"vegetable","phonetic":"/ˈvedʒtəbl/","pos":"n.","def":"蔬菜","example":"Fresh vegetables"},
      {"word":"fruit","phonetic":"/fruːt/","pos":"n.","def":"水果","example":"Some fruit"},
      {"word":"need","phonetic":"/niːd/","pos":"v.","def":"需要","example":"I need some vegetables."},
      {"word":"hope","phonetic":"/həʊp/","pos":"v.","def":"希望","example":"I hope so."},
      {"word":"thing","phonetic":"/θɪŋ/","pos":"n.","def":"东西","example":"A lot of things"},
      {"word":"money","phonetic":"/ˈmʌni/","pos":"n.","def":"钱","example":"I have no money."}
    ],
    "quizzes": [
      {"q":"shopping list 是什么？","options":["菜单","购物清单","账单","收据"],"answer":1,"exp":"shopping list 是购物清单"},
      {"q":"vegetable 和 fruit 的区别？","options":["没区别","vegetable是蔬菜，fruit是水果","都是水果","都是蔬菜"],"answer":1,"exp":"vegetable 蔬菜，fruit 水果"}
    ]
  },
  "41": {
    "vocabulary": [
      {"word":"roast","phonetic":"/rəʊst/","pos":"adj.","def":"烤的","example":"Roast beef"},
      {"word":"potato","phonetic":"/pəˈteɪtəʊ/","pos":"n.","def":"土豆","example":"Roast potatoes"},
      {"word":"pea","phonetic":"/piː/","pos":"n.","def":"豌豆","example":"Some peas"},
      {"word":"bean","phonetic":"/biːn/","pos":"n.","def":"豆","example":"Some beans"},
      {"word":"cabbage","phonetic":"/ˈkæbɪdʒ/","pos":"n.","def":"卷心菜","example":"Some cabbage"},
      {"word":"lettuce","phonetic":"/ˈletɪs/","pos":"n.","def":"生菜","example":"Some lettuce"},
      {"word":"peach","phonetic":"/piːtʃ/","pos":"n.","def":"桃","example":"Some peaches"},
      {"word":"grape","phonetic":"/ɡreɪp/","pos":"n.","def":"葡萄","example":"Some grapes"}
    ],
    "quizzes": [
      {"q":"roast 的意思是？","options":["煮的","烤的","炸的","蒸的"],"answer":1,"exp":"roast 是烤的"},
      {"q":"下列哪个是水果？","options":["cabbage","pea","peach","bean"],"answer":2,"exp":"peach（桃）是水果，其他是蔬菜"}
    ]
  },
  "42": {
    "vocabulary": [
      {"word":"Paris","phonetic":"/ˈpærɪs/","pos":"n.","def":"巴黎","example":"We're going to Paris."},
      {"word":"cinema","phonetic":"/ˈsɪnəmə/","pos":"n.","def":"电影院","example":"Let's go to the cinema."},
      {"word":"film","phonetic":"/fɪlm/","pos":"n.","def":"电影","example":"A good film"},
      {"word":"beautiful","phonetic":"/ˈbjuːtɪfl/","pos":"adj.","def":"美丽的","example":"A beautiful city"},
      {"word":"holiday","phonetic":"/ˈhɒlɪdeɪ/","pos":"n.","def":"假日","example":"On holiday"},
      {"word":"travel","phonetic":"/ˈtrævl/","pos":"v.","def":"旅行","example":"We're going to travel."}
    ],
    "quizzes": [
      {"q":"cinema 和 film 的区别？","options":["没区别","cinema是电影院，film是电影","cinema是电影，film是电影院","都是电影"],"answer":1,"exp":"cinema 是电影院，film 是电影"},
      {"q":"holiday 指什么？","options":["工作日","假日","星期一","周末"],"answer":1,"exp":"holiday 是假日、假期"}
    ]
  },
  "43": {
    "vocabulary": [
      {"word":"crash","phonetic":"/kræʃ/","pos":"n.","def":"碰撞","example":"A car crash"},
      {"word":"lamp-post","phonetic":"/ˈlæmp pəʊst/","pos":"n.","def":"灯柱","example":"He hit the lamp-post."},
      {"word":"repair","phonetic":"/rɪˈpeə/","pos":"v.","def":"修理","example":"I must repair it."},
      {"word":"try","phonetic":"/traɪ/","pos":"v.","def":"努力","example":"Try again!"},
      {"word":"garage","phonetic":"/ˈɡærɑːʒ/","pos":"n.","def":"车库","example":"At the garage"}
    ],
    "quizzes": [
      {"q":"crash 在交通中指？","options":["停车","碰撞事故","加油","拐弯"],"answer":1,"exp":"crash 是碰撞、撞车"},
      {"q":"repair 的意思是？","options":["购买","修理","驾驶","清洗"],"answer":1,"exp":"repair 是修理"}
    ]
  },
  "44": {
    "vocabulary": [
      {"word":"for sale","phonetic":"/fə seɪl/","pos":"待售","def":"出售","example":"This house is for sale."},
      {"word":"retire","phonetic":"/rɪˈtaɪə/","pos":"v.","def":"退休","example":"He has retired."},
      {"word":"cost","phonetic":"/kɒst/","pos":"v.","def":"花费","example":"How much does it cost?"},
      {"word":"price","phonetic":"/praɪs/","pos":"n.","def":"价格","example":"What's the price?"},
      {"word":"worth","phonetic":"/wɜːθ/","pos":"prep.","def":"值……钱","example":"It's worth a lot."}
    ],
    "quizzes": [
      {"q":"'for sale' 表示？","options":["打折","出售","已售","免费"],"answer":1,"exp":"for sale 表示出售中"},
      {"q":"retire 的意思是？","options":["上班","退休","加班","辞职"],"answer":1,"exp":"retire 是退休"}
    ]
  },
  "45": {
    "vocabulary": [
      {"word":"poor","phonetic":"/pɔː/","pos":"adj.","def":"可怜的","example":"Poor Ian!"},
      {"word":"receive","phonetic":"/rɪˈsiːv/","pos":"v.","def":"收到","example":"I received a letter."},
      {"word":"firm","phonetic":"/fɜːm/","pos":"n.","def":"公司","example":"He works for a firm."},
      {"word":"employ","phonetic":"/ɪmˈplɔɪ/","pos":"v.","def":"雇佣","example":"They employ many people."},
      {"word":"immediately","phonetic":"/ɪˈmiːdiətli/","pos":"adv.","def":"立刻","example":"Come immediately!"}
    ],
    "quizzes": [
      {"q":"receive 的意思是？","options":["发送","收到","拒绝","丢失"],"answer":1,"exp":"receive 是收到"},
      {"q":"immediately 表示？","options":["慢慢地","立刻","以后","有时"],"answer":1,"exp":"immediately 是立刻、马上"}
    ]
  },
  "46": {
    "vocabulary": [
      {"word":"neighbour","phonetic":"/ˈneɪbə/","pos":"n.","def":"邻居","example":"Our new neighbour"},
      {"word":"people","phonetic":"/ˈpiːpl/","pos":"n.","def":"人们","example":"Nice people"},
      {"word":"already","phonetic":"/ɔːlˈredi/","pos":"adv.","def":"已经","example":"I already know."},
      {"word":"meet","phonetic":"/miːt/","pos":"v.","def":"遇见","example":"Come and meet our neighbour."},
      {"word":"lady","phonetic":"/ˈleɪdi/","pos":"n.","def":"女士","example":"A young lady"}
    ],
    "quizzes": [
      {"q":"neighbour 是什么人？","options":["同事","邻居","亲戚","朋友"],"answer":1,"exp":"neighbour 是邻居"},
      {"q":"already 的意思是？","options":["还没","已经","总是","从不"],"answer":1,"exp":"already 表示已经"}
    ]
  },
  "47": {
    "vocabulary": [
      {"word":"ticket","phonetic":"/ˈtɪkɪt/","pos":"n.","def":"票","example":"Two tickets, please."},
      {"word":"platform","phonetic":"/ˈplætfɔːm/","pos":"n.","def":"站台","example":"Platform seven"},
      {"word":"plenty","phonetic":"/ˈplenti/","pos":"n.","def":"大量","example":"Plenty of time"},
      {"word":"bar","phonetic":"/bɑː/","pos":"n.","def":"酒吧","example":"At the bar"},
      {"word":"station","phonetic":"/ˈsteɪʃn/","pos":"n.","def":"车站","example":"At the station"},
      {"word":"catch","phonetic":"/kætʃ/","pos":"v.","def":"赶上","example":"Catch the train!"},
      {"word":"miss","phonetic":"/mɪs/","pos":"v.","def":"错过","example":"Don't miss the train!"},
      {"word":"train","phonetic":"/treɪn/","pos":"n.","def":"火车","example":"The 8 o'clock train"}
    ],
    "quizzes": [
      {"q":"platform 在车站指什么？","options":["售票处","站台","出口","候车室"],"answer":1,"exp":"platform 是站台"},
      {"q":"catch 和 miss 是什么关系？","options":["同义词","反义词","没关系","近义词"],"answer":1,"exp":"catch（赶上）和 miss（错过）是反义词"}
    ]
  },
  "48": {
    "vocabulary": [
      {"word":"case","phonetic":"/keɪs/","pos":"n.","def":"箱子","example":"A small blue case"},
      {"word":"belong","phonetic":"/bɪˈlɒŋ/","pos":"v.","def":"属于","example":"Does this belong to you?"},
      {"word":"label","phonetic":"/ˈleɪbl/","pos":"n.","def":"标签","example":"There's a label on it."},
      {"word":"handle","phonetic":"/ˈhændl/","pos":"n.","def":"把手","example":"The handle is broken."},
      {"word":"address","phonetic":"/əˈdres/","pos":"n.","def":"地址","example":"What's the address?"},
      {"word":"pence","phonetic":"/pens/","pos":"n.","def":"便士","example":"Fifty pence"}
    ],
    "quizzes": [
      {"q":"'Does this belong to you?' 问的是？","options":["你喜欢吗","这是你的吗","你在哪买的","多少钱"],"answer":1,"exp":"belong to 是属于的意思"},
      {"q":"label 是什么？","options":["盖子","标签","把手","锁"],"answer":1,"exp":"label 是标签"}
    ]
  },
  "49": {
    "vocabulary": [
      {"word":"ow","phonetic":"/aʊ/","pos":"int.","def":"哎哟","example":"Ow!"},
      {"word":"slip","phonetic":"/slɪp/","pos":"v.","def":"滑倒","example":"He slipped."},
      {"word":"fall","phonetic":"/fɔːl/","pos":"v.","def":"落下","example":"He fell downstairs."},
      {"word":"downstairs","phonetic":"/ˌdaʊnˈsteəz/","pos":"adv.","def":"楼下","example":"He fell downstairs."},
      {"word":"hurt","phonetic":"/hɜːt/","pos":"v.","def":"伤","example":"Have you hurt yourself?"},
      {"word":"back","phonetic":"/bæk/","pos":"n.","def":"背","example":"My back hurts."},
      {"word":"stand up","phonetic":"/stænd ʌp/","pos":"v.","def":"站起来","example":"Stand up slowly."},
      {"word":"help","phonetic":"/help/","pos":"v.","def":"帮助","example":"Can you help me?"}
    ],
    "quizzes": [
      {"q":"slip 的意思是？","options":["跳","滑倒","跑","走"],"answer":1,"exp":"slip 是滑倒"},
      {"q":"'Have you hurt yourself?' 问的是？","options":["你好吗","你受伤了吗","你在干什么","你要去哪"],"answer":1,"exp":"hurt 是受伤的意思"}
    ]
  },
  "50": {
    "vocabulary": [
      {"word":"card","phonetic":"/kɑːd/","pos":"n.","def":"明信片","example":"A card from Jimmy"},
      {"word":"write","phonetic":"/raɪt/","pos":"v.","def":"写","example":"Write a letter."},
      {"word":"soon","phonetic":"/suːn/","pos":"adv.","def":"不久","example":"See you soon!"},
      {"word":"spend","phonetic":"/spend/","pos":"v.","def":"度过","example":"Spend your holiday"},
      {"word":"country","phonetic":"/ˈkʌntri/","pos":"n.","def":"乡下","example":"In the country"},
      {"word":"enjoy","phonetic":"/ɪnˈdʒɔɪ/","pos":"v.","def":"享受","example":"I enjoy the city."}
    ],
    "quizzes": [
      {"q":"'See you soon' 表示？","options":["再也不见","待会见","很高兴见到你","你好"],"answer":1,"exp":"soon 是不久，see you soon 是待会见/不久后见"},
      {"q":"enjoy 的意思是？","options":["讨厌","享受/喜爱","忍受","忽视"],"answer":1,"exp":"enjoy 是享受、喜爱"}
    ]
  }
})

writeFileSync(f, JSON.stringify(data, null, 2) + '\n')
console.log('✅ NCE1 Lessons 31-50 已添加')
