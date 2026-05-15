import { readFileSync, writeFileSync } from 'fs'
const f = './public/vocabulary-data.json'
const data = JSON.parse(readFileSync(f, 'utf8'))

Object.assign(data.NCE1, {
  "51": {
    "vocabulary": [
      {"word":"test","phonetic":"/test/","pos":"n.","def":"测验","example":"The French test"},
      {"word":"pass","phonetic":"/pɑːs/","pos":"v.","def":"通过","example":"I passed the test."},
      {"word":"mark","phonetic":"/mɑːk/","pos":"n.","def":"分数","example":"Good marks"},
      {"word":"rest","phonetic":"/rest/","pos":"n.","def":"其他的","example":"The rest of us"},
      {"word":"difficult","phonetic":"/ˈdɪfɪkəlt/","pos":"adj.","def":"困难的","example":"It's very difficult."},
      {"word":"easy","phonetic":"/ˈiːzi/","pos":"adj.","def":"容易的","example":"It's easy."},
      {"word":"enough","phonetic":"/ɪˈnʌf/","pos":"adv.","def":"足够地","example":"Good enough"}
    ],
    "quizzes": [
      {"q":"pass 在考试中表示？","options":["失败","通过","放弃","准备"],"answer":1,"exp":"pass 在考试场景中表示通过"},
      {"q":"difficult 的反义词是？","options":["hard","easy","terrible","boring"],"answer":1,"exp":"difficult（困难）的反义词是 easy（容易）"}
    ]
  },
  "52": {
    "vocabulary": [
      {"word":"mistake","phonetic":"/mɪˈsteɪk/","pos":"n.","def":"错误","example":"Full of mistakes"},
      {"word":"correct","phonetic":"/kəˈrekt/","pos":"v.","def":"改正","example":"Correct the mistakes."},
      {"word":"dictionary","phonetic":"/ˈdɪkʃənri/","pos":"n.","def":"词典","example":"Look it up in the dictionary."},
      {"word":"clever","phonetic":"/ˈklevə/","pos":"adj.","def":"聪明的","example":"She's very clever."},
      {"word":"stupid","phonetic":"/ˈstjuːpɪd/","pos":"adj.","def":"笨的","example":"Don't be stupid!"}
    ],
    "quizzes": [
      {"q":"'full of mistakes' 表示？","options":["没有错误","充满错误","很少错误","一个错误"],"answer":1,"exp":"full of 表示充满"},
      {"q":"clever 的反义词是？","options":["smart","stupid","funny","quiet"],"answer":1,"exp":"clever（聪明）的反义词是 stupid（笨）"}
    ]
  },
  "53": {
    "vocabulary": [
      {"word":"size","phonetic":"/saɪz/","pos":"n.","def":"尺寸","example":"What size do you want?"},
      {"word":"fit","phonetic":"/fɪt/","pos":"v.","def":"合身","example":"It doesn't fit."},
      {"word":"suit","phonetic":"/suːt/","pos":"v.","def":"适合","example":"It suits you."},
      {"word":"material","phonetic":"/məˈtɪəriəl/","pos":"n.","def":"材料","example":"Good material"}
    ],
    "quizzes": [
      {"q":"fit 在穿衣中表示？","options":["喜欢","合身","购买","试穿"],"answer":1,"exp":"fit 表示合身"},
      {"q":"'It suits you' 表示？","options":["它很贵","它适合你","它太大","它是旧的"],"answer":1,"exp":"suit 表示适合"}
    ]
  },
  "54": {
    "vocabulary": [
      {"word":"idea","phonetic":"/aɪˈdɪə/","pos":"n.","def":"主意","example":"A good idea!"},
      {"word":"teaspoon","phonetic":"/ˈtiːspuːn/","pos":"n.","def":"茶匙","example":"A teaspoon of sugar"},
      {"word":"careful","phonetic":"/ˈkeəfl/","pos":"adj.","def":"小心的","example":"Be careful!"},
      {"word":"ready","phonetic":"/ˈredi/","pos":"adj.","def":"准备好的","example":"It's ready."},
      {"word":"jam","phonetic":"/dʒæm/","pos":"n.","def":"果酱","example":"Some jam"},
      {"word":"biscuit","phonetic":"/ˈbɪskɪt/","pos":"n.","def":"饼干","example":"Some biscuits"}
    ],
    "quizzes": [
      {"q":"'Be careful!' 表示？","options":["快点","小心","加油","别哭"],"answer":1,"exp":"careful 是小心的"},
      {"q":"biscuit 是什么？","options":["面包","饼干","蛋糕","果酱"],"answer":1,"exp":"biscuit 是饼干"}
    ]
  },
  "55": {
    "vocabulary": [
      {"word":"model","phonetic":"/ˈmɒdl/","pos":"n.","def":"型号","example":"The most expensive model"},
      {"word":"expensive","phonetic":"/ɪkˈspensɪv/","pos":"adj.","def":"贵的","example":"It's very expensive."},
      {"word":"cheap","phonetic":"/tʃiːp/","pos":"adj.","def":"便宜的","example":"A cheap one"},
      {"word":"afford","phonetic":"/əˈfɔːd/","pos":"v.","def":"买得起","example":"I can't afford it."}
    ],
    "quizzes": [
      {"q":"expensive 的反义词是？","options":["big","cheap","old","new"],"answer":1,"exp":"expensive（贵）的反义词是 cheap（便宜）"},
      {"q":"'I can't afford it' 表示？","options":["我不喜欢","我买不起","我不需要","我已经有了"],"answer":1,"exp":"can't afford 表示买不起"}
    ]
  },
  "56": {
    "vocabulary": [
      {"word":"change","phonetic":"/tʃeɪndʒ/","pos":"n.","def":"零钱","example":"Small change"},
      {"word":"note","phonetic":"/nəʊt/","pos":"n.","def":"纸币","example":"A five-pound note"},
      {"word":"coin","phonetic":"/kɔɪn/","pos":"n.","def":"硬币","example":"Some coins"}
    ],
    "quizzes": [
      {"q":"note 在金钱中指？","options":["笔记","纸币","收据","支票"],"answer":1,"exp":"note 在金钱场景中指纸币"}
    ]
  },
  "57": {
    "vocabulary": [
      {"word":"knock","phonetic":"/nɒk/","pos":"v.","def":"敲","example":"Knock on the door."},
      {"word":"everything","phonetic":"/ˈevriθɪŋ/","pos":"pron.","def":"一切","example":"Everything is ready."},
      {"word":"quiet","phonetic":"/ˈkwaɪət/","pos":"adj.","def":"安静的","example":"Be quiet!"},
      {"word":"impossible","phonetic":"/ɪmˈpɒsəbl/","pos":"adj.","def":"不可能的","example":"It's impossible!"}
    ],
    "quizzes": [
      {"q":"impossible 的意思是？","options":["可能的","不可能的","重要的","简单的"],"answer":1,"exp":"impossible 是不可能的"}
    ]
  },
  "58": {
    "vocabulary": [
      {"word":"breakfast","phonetic":"/ˈbrekfəst/","pos":"n.","def":"早餐","example":"Tommy's breakfast"},
      {"word":"egg","phonetic":"/eɡ/","pos":"n.","def":"鸡蛋","example":"A boiled egg"},
      {"word":"slice","phonetic":"/slaɪs/","pos":"n.","def":"片","example":"A slice of bread"},
      {"word":"bread","phonetic":"/bred/","pos":"n.","def":"面包","example":"A slice of bread"},
      {"word":"butter","phonetic":"/ˈbʌtə/","pos":"n.","def":"黄油","example":"Some butter"},
      {"word":"honey","phonetic":"/ˈhʌni/","pos":"n.","def":"蜂蜜","example":"Some honey"},
      {"word":"cereal","phonetic":"/ˈsɪəriəl/","pos":"n.","def":"麦片","example":"Some cereal"}
    ],
    "quizzes": [
      {"q":"'a slice of bread' 中 slice 指？","options":["一条","一片","一块","一包"],"answer":1,"exp":"slice 是片、薄片"},
      {"q":"butter 的意思是？","options":["面包","黄油","果酱","蜂蜜"],"answer":1,"exp":"butter 是黄油"}
    ]
  },
  "59": {
    "vocabulary": [
      {"word":"true","phonetic":"/truː/","pos":"adj.","def":"真实的","example":"A true story"},
      {"word":"story","phonetic":"/ˈstɔːri/","pos":"n.","def":"故事","example":"Tell me a story."},
      {"word":"happen","phonetic":"/ˈhæpən/","pos":"v.","def":"发生","example":"What happened?"},
      {"word":"thief","phonetic":"/θiːf/","pos":"n.","def":"小偷","example":"Stop thief!"},
      {"word":"enter","phonetic":"/ˈentə/","pos":"v.","def":"进入","example":"Enter the room."}
    ],
    "quizzes": [
      {"q":"'a true story' 表示？","options":["虚构的故事","真实的故事","有趣的故事","长篇故事"],"answer":1,"exp":"true 是真实的"},
      {"q":"thief 是什么人？","options":["警察","小偷","医生","老师"],"answer":1,"exp":"thief 是小偷"}
    ]
  },
  "60": {
    "vocabulary": [
      {"word":"famous","phonetic":"/ˈfeɪməs/","pos":"adj.","def":"著名的","example":"A famous actress"},
      {"word":"actress","phonetic":"/ˈæktrəs/","pos":"n.","def":"女演员","example":"A famous actress"},
      {"word":"recognize","phonetic":"/ˈrekəɡnaɪz/","pos":"v.","def":"认出","example":"I didn't recognize her."},
      {"word":"age","phonetic":"/eɪdʒ/","pos":"n.","def":"年龄","example":"What's her age?"},
      {"word":"spite","phonetic":"/spaɪt/","pos":"n.","def":"不顾","example":"In spite of this"}
    ],
    "quizzes": [
      {"q":"famous 的意思是？","options":["普通的","著名的","年轻的","陌生的"],"answer":1,"exp":"famous 是著名的"},
      {"q":"recognize 表示？","options":["忘记","认出","介绍","忽视"],"answer":1,"exp":"recognize 是认出、辨认"}
    ]
  },
  "61": {"vocabulary": [{"word":"feel","phonetic":"/fiːl/","pos":"v.","def":"感觉","example":"I feel ill."},{"word":"ill","phonetic":"/ɪl/","pos":"adj.","def":"生病的","example":"He's ill."},{"word":"call","phonetic":"/kɔːl/","pos":"v.","def":"叫","example":"Call the doctor."},{"word":"man","phonetic":"/mæn/","pos":"n.","def":"男人","example":"The man in a hat"}],"quizzes": [{"q":"ill 的意思是？","options":["健康的","生病的","快乐的","疲倦的"],"answer":1,"exp":"ill 是生病的"}]},
  "62": {"vocabulary": [{"word":"trip","phonetic":"/trɪp/","pos":"n.","def":"旅行","example":"A trip to Australia"},{"word":"voyage","phonetic":"/ˈvɔɪɪdʒ/","pos":"n.","def":"航海","example":"A long voyage"},{"word":"great","phonetic":"/ɡreɪt/","pos":"adj.","def":"伟大的","example":"The Great Barrier Reef"},{"word":"kangaroo","phonetic":"/ˌkæŋɡəˈruː/","pos":"n.","def":"袋鼠","example":"A kangaroo"}],"quizzes": [{"q":"voyage 特指什么旅行？","options":["飞行","航海","徒步","自驾"],"answer":1,"exp":"voyage 特指航海旅行"}]},
  "63": {"vocabulary": [{"word":"still","phonetic":"/stɪl/","pos":"adv.","def":"仍然","example":"She's still here."},{"word":"together","phonetic":"/təˈɡeðə/","pos":"adv.","def":"一起","example":"Tea for two"},{"word":"keep","phonetic":"/kiːp/","pos":"v.","def":"保持","example":"Keep quiet."}],"quizzes": [{"q":"still 的意思是？","options":["已经","仍然","总是","从不"],"answer":1,"exp":"still 是仍然"}]},
  "64": {"vocabulary": [{"word":"hour","phonetic":"/aʊə/","pos":"n.","def":"小时","example":"Seventy miles an hour"},{"word":"mile","phonetic":"/maɪl/","pos":"n.","def":"英里","example":"Seventy miles"},{"word":"speed","phonetic":"/spiːd/","pos":"n.","def":"速度","example":"At high speed"},{"word":"limit","phonetic":"/ˈlɪmɪt/","pos":"n.","def":"限制","example":"The speed limit"}],"quizzes": [{"q":"speed limit 指什么？","options":["最低速度","速度限制","平均速度","起步速度"],"answer":1,"exp":"speed limit 是速度限制、限速"}]},
  "65": {"vocabulary": [{"word":"sure","phonetic":"/ʃʊə/","pos":"adj.","def":"确信的","example":"Are you sure?"},{"word":"grow","phonetic":"/ɡrəʊ/","pos":"v.","def":"生长","example":"It grows quickly."},{"word":"dream","phonetic":"/driːm/","pos":"n.","def":"梦","example":"A pleasant dream"},{"word":"age","phonetic":"/eɪdʒ/","pos":"n.","def":"年龄","example":"At the age of 17"}],"quizzes": [{"q":"'Are you sure?' 表示？","options":["你安全吗","你确定吗","你好吗","你忙吗"],"answer":1,"exp":"sure 是确信的"}]},
  "66": {"vocabulary": [{"word":"news","phonetic":"/njuːz/","pos":"n.","def":"新闻","example":"Sensational news!"},{"word":"sensational","phonetic":"/senˈseɪʃənl/","pos":"adj.","def":"轰动的","example":"Sensational news!"},{"word":"report","phonetic":"/rɪˈpɔːt/","pos":"n.","def":"报道","example":"The latest report"},{"word":"latest","phonetic":"/ˈleɪtɪst/","pos":"adj.","def":"最新的","example":"The latest news"}],"quizzes": [{"q":"sensational 的意思是？","options":["无聊的","轰动的","普通的","虚假的"],"answer":1,"exp":"sensational 是轰动的"}]},
  "67": {"vocabulary": [{"word":"pleasant","phonetic":"/ˈpleznt/","pos":"adj.","def":"愉快的","example":"A pleasant dream"},{"word":"own","phonetic":"/əʊn/","pos":"adj.","def":"自己的","example":"My own car"},{"word":"each","phonetic":"/iːtʃ/","pos":"det.","def":"每个","example":"Each day"}],"quizzes": [{"q":"'my own' 表示？","options":["别人的","我自己的","我们的","大家的"],"answer":1,"exp":"own 强调自己的"}]},
  "68": {"vocabulary": [{"word":"church","phonetic":"/tʃɜːtʃ/","pos":"n.","def":"教堂","example":"A beautiful church"},{"word":"voice","phonetic":"/vɔɪs/","pos":"n.","def":"声音","example":"A loud voice"},{"word":"John","phonetic":"/dʒɒn/","pos":"n.","def":"约翰","example":"Is that you, John?"}],"quizzes": [{"q":"voice 指什么？","options":["噪音","人声","音乐","回声"],"answer":1,"exp":"voice 是人的声音"}]},
  "69": {"vocabulary": [{"word":"ride","phonetic":"/raɪd/","pos":"n.","def":"旅行","example":"Sally's first train ride"},{"word":"last","phonetic":"/lɑːst/","pos":"adj.","def":"最后的","example":"The last train"},{"word":"exciting","phonetic":"/ɪkˈsaɪtɪŋ/","pos":"adj.","def":"令人兴奋的","example":"An exciting ride"},{"word":"view","phonetic":"/vjuː/","pos":"n.","def":"景色","example":"A beautiful view"}],"quizzes": [{"q":"view 在旅行中指？","options":["座位","景色","票价","路线"],"answer":1,"exp":"view 是景色、风景"}]},
  "70": {"vocabulary": [{"word":"stationer","phonetic":"/ˈsteɪʃənə/","pos":"n.","def":"文具商","example":"At the stationer's"},{"word":"forest","phonetic":"/ˈfɒrɪst/","pos":"n.","def":"森林","example":"Through the woods"},{"word":"wood","phonetic":"/wʊd/","pos":"n.","def":"树林","example":"A walk through the woods"},{"word":"path","phonetic":"/pɑːθ/","pos":"n.","def":"小路","example":"Along the path"},{"word":"beside","phonetic":"/bɪˈsaɪd/","pos":"prep.","def":"在旁边","example":"Beside the stream"}],"quizzes": [{"q":"forest 的意思是？","options":["沙漠","森林","草原","湖泊"],"answer":1,"exp":"forest 是森林"}]},
  "71": {"vocabulary": [{"word":"wave","phonetic":"/weɪv/","pos":"v.","def":"招手","example":"He waved to me."},{"word":"track","phonetic":"/træk/","pos":"n.","def":"轨道","example":"On the track"},{"word":"mile","phonetic":"/maɪl/","pos":"n.","def":"英里","example":"Two miles away"}],"quizzes": [{"q":"wave 作动词时是？","options":["波浪","招手","冲浪","游泳"],"answer":1,"exp":"wave 作动词是招手"}]},
  "72": {"vocabulary": [{"word":"wild","phonetic":"/waɪld/","pos":"adj.","def":"野生的","example":"Wild animals"},{"word":"scared","phonetic":"/skeəd/","pos":"adj.","def":"害怕的","example":"I was scared."},{"word":"suddenly","phonetic":"/ˈsʌdnli/","pos":"adv.","def":"突然","example":"Suddenly, I saw it."},{"word":"sound","phonetic":"/saʊnd/","pos":"n.","def":"声音","example":"A strange sound"},{"word":"strange","phonetic":"/streɪndʒ/","pos":"adj.","def":"奇怪的","example":"A strange sound"}],"quizzes": [{"q":"suddenly 的意思是？","options":["慢慢地","突然","经常","安静地"],"answer":1,"exp":"suddenly 是突然地"}]}
})

writeFileSync(f, JSON.stringify(data, null, 2) + '\n')
console.log('✅ NCE1 Lessons 51-72 已添加，NCE1全部完成！')
