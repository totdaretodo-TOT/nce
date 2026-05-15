import { readFileSync, writeFileSync } from 'fs'
const f = './public/vocabulary-data.json'
const data = JSON.parse(readFileSync(f, 'utf8'))

Object.assign(data.NCE1, {
  "6": {
    "vocabulary": [
      {"word":"make","phonetic":"/meɪk/","pos":"n.","def":"（产品的）牌子","example":"What make is it?"},
      {"word":"Swedish","phonetic":"/ˈswiːdɪʃ/","pos":"adj.","def":"瑞典的","example":"It's a Swedish car."},
      {"word":"English","phonetic":"/ˈɪŋɡlɪʃ/","pos":"adj.","def":"英国的","example":"It's an English car."},
      {"word":"American","phonetic":"/əˈmerɪkən/","pos":"adj.","def":"美国的","example":"It's an American car."},
      {"word":"Italian","phonetic":"/ɪˈtæliən/","pos":"adj.","def":"意大利的","example":"It's an Italian car."}
    ],
    "quizzes": [
      {"q":"'What make is it?' 问的是什么？","options":["颜色","品牌","价格","大小"],"answer":1,"exp":"make 在这里指产品的牌子"},
      {"q":"Swedish 指的是哪个国家的？","options":["瑞士","瑞典","西班牙","丹麦"],"answer":1,"exp":"Swedish 是瑞典的"}
    ]
  },
  "7": {
    "vocabulary": [
      {"word":"colour","phonetic":"/ˈkʌlə/","pos":"n.","def":"颜色","example":"What colour is it?"},
      {"word":"green","phonetic":"/ɡriːn/","pos":"adj.","def":"绿色的","example":"It's a green dress."},
      {"word":"come","phonetic":"/kʌm/","pos":"v.","def":"来","example":"Come here!"},
      {"word":"upstairs","phonetic":"/ˌʌpˈsteəz/","pos":"adv.","def":"楼上","example":"Come upstairs."},
      {"word":"smart","phonetic":"/smɑːt/","pos":"adj.","def":"时髦的","example":"It's a smart hat."},
      {"word":"hat","phonetic":"/hæt/","pos":"n.","def":"帽子","example":"That's a nice hat."},
      {"word":"same","phonetic":"/seɪm/","pos":"adj.","def":"相同的","example":"It's the same colour."},
      {"word":"lovely","phonetic":"/ˈlʌvli/","pos":"adj.","def":"可爱的","example":"It's a lovely hat."}
    ],
    "quizzes": [
      {"q":"'smart' 在本课中的意思是？","options":["聪明的","时髦的","快速的","干净的"],"answer":1,"exp":"smart 这里指时髦的、漂亮的"},
      {"q":"'the same colour' 表示？","options":["不同颜色","相同颜色","好看的颜色","新颜色"],"answer":1,"exp":"same 是相同的意思"}
    ]
  },
  "8": {
    "vocabulary": [
      {"word":"nationality","phonetic":"/ˌnæʃəˈnæləti/","pos":"n.","def":"国籍","example":"What nationality are you?"},
      {"word":"keyboard","phonetic":"/ˈkiːbɔːd/","pos":"n.","def":"键盘","example":"This is a keyboard."},
      {"word":"operator","phonetic":"/ˈɒpəreɪtə/","pos":"n.","def":"操作人员","example":"She is an operator."},
      {"word":"engineer","phonetic":"/ˌendʒɪˈnɪə/","pos":"n.","def":"工程师","example":"He is an engineer."},
      {"word":"policeman","phonetic":"/pəˈliːsmən/","pos":"n.","def":"警察","example":"He is a policeman."},
      {"word":"policewoman","phonetic":"/pəˈliːswʊmən/","pos":"n.","def":"女警察","example":"She is a policewoman."},
      {"word":"taxi driver","phonetic":"/ˈtæksi ˈdraɪvə/","pos":"n.","def":"出租车司机","example":"He is a taxi driver."},
      {"word":"nurse","phonetic":"/nɜːs/","pos":"n.","def":"护士","example":"She is a nurse."}
    ],
    "quizzes": [
      {"q":"'nationality' 的意思是？","options":["名字","国籍","职业","年龄"],"answer":1,"exp":"nationality 是国籍"},
      {"q":"engineer 是什么职业？","options":["教师","医生","工程师","司机"],"answer":2,"exp":"engineer 是工程师"}
    ]
  },
  "9": {
    "vocabulary": [
      {"word":"hello","phonetic":"/heˈləʊ/","pos":"int.","def":"你好","example":"Hello, Helen!"},
      {"word":"how","phonetic":"/haʊ/","pos":"adv.","def":"怎样","example":"How are you today?"},
      {"word":"today","phonetic":"/təˈdeɪ/","pos":"adv.","def":"今天","example":"How are you today?"},
      {"word":"well","phonetic":"/wel/","pos":"adj.","def":"身体好的","example":"I'm very well."},
      {"word":"fine","phonetic":"/faɪn/","pos":"adj.","def":"美好的","example":"I'm fine, thank you."},
      {"word":"thanks","phonetic":"/θæŋks/","pos":"int.","def":"谢谢","example":"Fine, thanks."},
      {"word":"goodbye","phonetic":"/ˌɡʊdˈbaɪ/","pos":"int.","def":"再见","example":"Goodbye, Helen."},
      {"word":"see","phonetic":"/siː/","pos":"v.","def":"见","example":"See you tomorrow."}
    ],
    "quizzes": [
      {"q":"'How are you?' 的最佳回答是？","options":["How are you?","I'm fine, thanks.","Goodbye.","Hello!"],"answer":1,"exp":"回答 How are you 要说自己的状态"},
      {"q":"'See you tomorrow' 用于什么场合？","options":["初次见面","告别","道歉","感谢"],"answer":1,"exp":"告别时说明天见"}
    ]
  },
  "10": {
    "vocabulary": [
      {"word":"fat","phonetic":"/fæt/","pos":"adj.","def":"胖的","example":"He is fat."},
      {"word":"thin","phonetic":"/θɪn/","pos":"adj.","def":"瘦的","example":"She is thin."},
      {"word":"tall","phonetic":"/tɔːl/","pos":"adj.","def":"高的","example":"He is tall."},
      {"word":"short","phonetic":"/ʃɔːt/","pos":"adj.","def":"矮的","example":"She is short."},
      {"word":"dirty","phonetic":"/ˈdɜːti/","pos":"adj.","def":"脏的","example":"The dog is dirty."},
      {"word":"clean","phonetic":"/kliːn/","pos":"adj.","def":"干净的","example":"The cat is clean."},
      {"word":"hot","phonetic":"/hɒt/","pos":"adj.","def":"热的","example":"It's hot today."},
      {"word":"cold","phonetic":"/kəʊld/","pos":"adj.","def":"冷的","example":"It's cold today."},
      {"word":"old","phonetic":"/əʊld/","pos":"adj.","def":"老的","example":"He is old."},
      {"word":"young","phonetic":"/jʌŋ/","pos":"adj.","def":"年轻的","example":"She is young."}
    ],
    "quizzes": [
      {"q":"fat 的反义词是？","options":["tall","thin","short","old"],"answer":1,"exp":"fat（胖）的反义词是 thin（瘦）"},
      {"q":"dirty 的反义词是？","options":["hot","cold","clean","young"],"answer":2,"exp":"dirty（脏）的反义词是 clean（干净）"}
    ]
  },
  "11": {
    "vocabulary": [
      {"word":"whose","phonetic":"/huːz/","pos":"pron.","def":"谁的","example":"Whose shirt is this?"},
      {"word":"blue","phonetic":"/bluː/","pos":"adj.","def":"蓝色的","example":"It's a blue shirt."},
      {"word":"perhaps","phonetic":"/pəˈhæps/","pos":"adv.","def":"大概","example":"Perhaps it's Tim's."},
      {"word":"white","phonetic":"/waɪt/","pos":"adj.","def":"白色的","example":"It's a white shirt."},
      {"word":"catch","phonetic":"/kætʃ/","pos":"v.","def":"抓住","example":"Catch!"}
    ],
    "quizzes": [
      {"q":"'Whose' 用来询问什么？","options":["地点","时间","所有权","数量"],"answer":2,"exp":"whose 用来询问谁的，表示所有权"},
      {"q":"'perhaps' 的意思是？","options":["一定","大概","从不","总是"],"answer":1,"exp":"perhaps 表示大概、也许"}
    ]
  },
  "12": {
    "vocabulary": [
      {"word":"father","phonetic":"/ˈfɑːðə/","pos":"n.","def":"父亲","example":"This is my father."},
      {"word":"mother","phonetic":"/ˈmʌðə/","pos":"n.","def":"母亲","example":"This is my mother."},
      {"word":"blouse","phonetic":"/blaʊz/","pos":"n.","def":"女衬衫","example":"That blouse is nice."},
      {"word":"sister","phonetic":"/ˈsɪstə/","pos":"n.","def":"姐妹","example":"She's my sister."},
      {"word":"brother","phonetic":"/ˈbrʌðə/","pos":"n.","def":"兄弟","example":"He's my brother."},
      {"word":"tie","phonetic":"/taɪ/","pos":"n.","def":"领带","example":"That's a nice tie."},
      {"word":"his","phonetic":"/hɪz/","pos":"pron.","def":"他的","example":"It's his tie."},
      {"word":"her","phonetic":"/hɜː/","pos":"pron.","def":"她的","example":"It's her blouse."}
    ],
    "quizzes": [
      {"q":"his 和 her 的区别是？","options":["没区别","his是他的，her是她的","his是她的，her是他的","都是你的"],"answer":1,"exp":"his 是他的，her 是她的"},
      {"q":"blouse 指的是？","options":["裙子","女衬衫","外套","领带"],"answer":1,"exp":"blouse 是女衬衫"}
    ]
  },
  "13": {
    "vocabulary": [
      {"word":"Mrs.","phonetic":"/ˈmɪsɪz/","pos":"n.","def":"夫人","example":"Mrs. Smith's kitchen"},
      {"word":"kitchen","phonetic":"/ˈkɪtʃɪn/","pos":"n.","def":"厨房","example":"Come into the kitchen."},
      {"word":"refrigerator","phonetic":"/rɪˈfrɪdʒəreɪtə/","pos":"n.","def":"电冰箱","example":"The refrigerator is white."},
      {"word":"right","phonetic":"/raɪt/","pos":"n.","def":"右边","example":"It's on the right."},
      {"word":"electric","phonetic":"/ɪˈlektrɪk/","pos":"adj.","def":"电的","example":"An electric cooker"},
      {"word":"left","phonetic":"/left/","pos":"n.","def":"左边","example":"It's on the left."},
      {"word":"cooker","phonetic":"/ˈkʊkə/","pos":"n.","def":"炉子","example":"The cooker is blue."},
      {"word":"middle","phonetic":"/ˈmɪdl/","pos":"n.","def":"中间","example":"It's in the middle."},
      {"word":"of","phonetic":"/ɒv/","pos":"prep.","def":"……的","example":"In the middle of the room"},
      {"word":"room","phonetic":"/ruːm/","pos":"n.","def":"房间","example":"This is a nice room."},
      {"word":"cup","phonetic":"/kʌp/","pos":"n.","def":"杯子","example":"A cup of tea"}
    ],
    "quizzes": [
      {"q":"refrigerator 是什么？","options":["炉子","电冰箱","微波炉","洗碗机"],"answer":1,"exp":"refrigerator 是电冰箱"},
      {"q":"'on the left' 表示？","options":["在右边","在左边","在中间","在上面"],"answer":1,"exp":"on the left 是在左边"}
    ]
  },
  "14": {
    "vocabulary": [
      {"word":"living room","phonetic":"/ˈlɪvɪŋ ruːm/","pos":"n.","def":"客厅","example":"Come into the living room."},
      {"word":"near","phonetic":"/nɪə/","pos":"prep.","def":"靠近","example":"Near the window"},
      {"word":"window","phonetic":"/ˈwɪndəʊ/","pos":"n.","def":"窗户","example":"Near the window"},
      {"word":"armchair","phonetic":"/ˈɑːmtʃeə/","pos":"n.","def":"扶手椅","example":"An armchair by the fireplace"},
      {"word":"door","phonetic":"/dɔː/","pos":"n.","def":"门","example":"Near the door"},
      {"word":"picture","phonetic":"/ˈpɪktʃə/","pos":"n.","def":"图画","example":"A picture on the wall"},
      {"word":"wall","phonetic":"/wɔːl/","pos":"n.","def":"墙","example":"On the wall"}
    ],
    "quizzes": [
      {"q":"living room 是家里的哪个房间？","options":["卧室","厨房","客厅","浴室"],"answer":2,"exp":"living room 是客厅"},
      {"q":"armchair 是什么？","options":["桌子","扶手椅","书架","地毯"],"answer":1,"exp":"armchair 是扶手椅"}
    ]
  },
  "15": {
    "vocabulary": [
      {"word":"shut","phonetic":"/ʃʌt/","pos":"v.","def":"关","example":"Shut the door!"},
      {"word":"bedroom","phonetic":"/ˈbedruːm/","pos":"n.","def":"卧室","example":"Come into the bedroom."},
      {"word":"untidy","phonetic":"/ʌnˈtaɪdi/","pos":"adj.","def":"乱的","example":"The room is untidy."},
      {"word":"must","phonetic":"/mʌst/","pos":"modal v.","def":"必须","example":"You must tidy it."},
      {"word":"open","phonetic":"/ˈəʊpən/","pos":"v.","def":"打开","example":"Open the window!"},
      {"word":"air","phonetic":"/eə/","pos":"v.","def":"使……通风","example":"Air the room."},
      {"word":"put","phonetic":"/pʊt/","pos":"v.","def":"放","example":"Put it on the table."},
      {"word":"clothes","phonetic":"/kləʊðz/","pos":"n.","def":"衣服","example":"Put your clothes away."},
      {"word":"wardrobe","phonetic":"/ˈwɔːdrəʊb/","pos":"n.","def":"衣柜","example":"Put it in the wardrobe."},
      {"word":"dust","phonetic":"/dʌst/","pos":"v.","def":"掸去灰尘","example":"Dust the table."},
      {"word":"sweep","phonetic":"/swiːp/","pos":"v.","def":"扫","example":"Sweep the floor."}
    ],
    "quizzes": [
      {"q":"untidy 的意思是？","options":["整洁的","凌乱的","干净的","漂亮的"],"answer":1,"exp":"untidy 是凌乱的、不整洁的"},
      {"q":"wardrobe 是什么家具？","options":["书桌","衣柜","沙发","床"],"answer":1,"exp":"wardrobe 是衣柜"}
    ]
  }
})

writeFileSync(f, JSON.stringify(data, null, 2) + '\n')
console.log('✅ NCE1 Lessons 6-15 已添加')
