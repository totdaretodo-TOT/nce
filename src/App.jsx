import { useState, useEffect, useRef, useCallback } from 'react'

const BOOKS = [
  {
    key: 'NCE1',
    title: '新概念英语第一册',
    level: 'A2',
    lessons: [
      {
        id: 1,
        title: 'Lesson 1: Excuse me!',
        titleCn: '打扰一下',
        lyrics: [
          { en: 'Excuse me!', cn: '打扰一下！' },
          { en: 'Yes?', cn: '什么事？' },
          { en: 'Is this your handbag?', cn: '这是您的手提包吗？' },
          { en: 'Pardon?', cn: '请再说一遍？' },
          { en: 'Is this your handbag?', cn: '这是您的手提包吗？' },
          { en: 'Yes, it is.', cn: '是的，它是。' },
          { en: 'Thank you very much.', cn: '非常感谢。' }
        ],
        vocabulary: [
          { word: 'excuse', phonetic: '/ɪkˈskjuːz/', pos: 'verb', def: '原谅；宽恕', example: 'Excuse me, could you tell me the time?' },
          { word: 'handbag', phonetic: '/ˈhændbæɡ/', pos: 'noun', def: '手提包', example: 'She left her handbag on the bus.' },
          { word: 'pardon', phonetic: '/ˈpɑːrdn/', pos: 'interjection', def: '对不起；请再说一遍', example: "Pardon? I didn't hear you." }
        ],
        quizzes: [
          { q: '如何礼貌地引起别人注意？', options: ['Hey!', 'Excuse me!', 'You!', 'Come here!'], answer: 1, exp: '"Excuse me" 是礼貌引起注意的方式' },
          { q: '"Handbag" 是什么意思？', options: ['A bag for hands', 'Small bag for personal items', 'School bag', 'Travel bag'], answer: 1, exp: 'Handbag 是女士用来装个人物品的小包' }
        ]
      },
      {
        id: 2,
        title: 'Lesson 2: Sorry, sir',
        titleCn: '对不起，先生',
        lyrics: [
          { en: 'My coat and my umbrella, please.', cn: '请拿一下我的外套和伞。' },
          { en: 'Here is my ticket.', cn: '这是我的票。' },
          { en: 'Thank you, sir.', cn: '谢谢，先生。' },
          { en: 'Number seven.', cn: '七号。' },
          { en: 'Here is your umbrella and your coat.', cn: '这是您的伞和外套。' },
          { en: 'This is not my umbrella.', cn: '这不是我的伞。' },
          { en: 'Sorry, sir.', cn: '对不起，先生。' },
          { en: 'Is this your umbrella?', cn: '这是您的伞吗？' },
          { en: 'No, it isn\'t.', cn: '不，不是。' },
          { en: 'Is this it?', cn: '这是吗？' },
          { en: 'Yes, it is.', cn: '是的，它是。' },
          { en: 'Thank you very much.', cn: '非常感谢。' }
        ],
        vocabulary: [
          { word: 'umbrella', phonetic: '/ʌmˈbrelə/', pos: 'noun', def: '雨伞；阳伞', example: "Don't forget to take your umbrella." },
          { word: 'ticket', phonetic: '/ˈtɪkɪt/', pos: 'noun', def: '票；入场券', example: 'I need to buy a train ticket.' },
          { word: 'sir', phonetic: '/sɜːr/', pos: 'noun', def: '先生（尊称）', example: 'Can I help you, sir?' }
        ],
        quizzes: [
          { q: '在英式英语中如何礼貌称呼陌生人？', options: ['Dude', 'Mate', 'Sir', 'Boss'], answer: 2, exp: '"Sir" 是正式礼貌的称呼方式' }
        ]
      },
      {
        id: 3,
        title: 'Lesson 3: Nice to meet you',
        titleCn: '很高兴认识你',
        lyrics: [
          { en: 'Good morning.', cn: '早上好。' },
          { en: 'Good morning.', cn: '早上好。' },
          { en: 'This is Swedish girl.', cn: '这是一位瑞典女孩。' },
          { en: 'Nice to meet you.', cn: '很高兴认识你。' },
          { en: 'Nice to meet you.', cn: '很高兴认识你。' },
          { en: 'What is her name?', cn: '她叫什么名字？' },
          { en: 'Her name is Ann.', cn: '她叫安。' },
          { en: 'Is she French, too?', cn: '她也是法国人吗？' },
          { en: 'No, she isn\'t.', cn: '不，不是。' },
          { en: 'She is Swedish.', cn: '她是瑞典人。' },
          { en: 'Swedish?', cn: '瑞典人？' },
          { en: 'Your name, please?', cn: '请告诉我你的名字？' },
          { en: 'Greta.', cn: '格雷塔。' },
          { en: 'Nice to meet you.', cn: '很高兴认识你。' }
        ],
        vocabulary: [
          { word: 'Swedish', phonetic: '/ˈswiːdɪʃ/', pos: 'adjective', def: '瑞典的；瑞典语的', example: 'She is Swedish.' },
          { word: 'nationality', phonetic: '/ˌnæʃəˈnæləti/', pos: 'noun', def: '国籍', example: 'What is your nationality?' }
        ],
        quizzes: [
          { q: '当有人说 "Nice to meet you" 时应该如何回应？', options: ['Hello.', 'Nice to meet you.', 'Goodbye.', 'Thank you.'], answer: 1, exp: '用同样的话回应表示礼貌' }
        ]
      },
      {
        id: 4,
        title: 'Lesson 4: Are you a teacher?',
        titleCn: '你是一名教师吗？',
        lyrics: [
          { en: 'I am a new student.', cn: '我是一名新学生。' },
          { en: 'My name is Robert.', cn: '我叫罗伯特。' },
          { en: 'Nice to meet you.', cn: '很高兴认识你。' },
          { en: 'I am a teacher.', cn: '我是一名教师。' },
          { en: 'What is your job?', cn: '你的工作是什么？' },
          { en: 'I am a keyboard operator.', cn: '我是一名键盘操作员。' },
          { en: 'What is your job?', cn: '你的工作是什么？' },
          { en: 'I am an engineer.', cn: '我是一名工程师。' }
        ],
        vocabulary: [
          { word: 'teacher', phonetic: '/ˈtiːtʃər/', pos: 'noun', def: '教师；老师', example: 'She is a teacher at the local school.' },
          { word: 'engineer', phonetic: '/ˌendʒɪˈnɪr/', pos: 'noun', def: '工程师', example: 'He works as an engineer.' },
          { word: 'keyboard', phonetic: '/ˈkiːbɔːrd/', pos: 'noun', def: '键盘', example: 'I need a new keyboard for my computer.' }
        ],
        quizzes: [
          { q: '询问他人职业的正确方式是？', options: ['What is your job?', 'What do you do?', 'Both A and B', 'Where do you work?'], answer: 2, exp: '两种方式都可以用来询问职业' }
        ]
      }
    ]
  },
  {
    key: 'NCE2',
    title: '新概念英语第二册',
    level: 'B1',
    lessons: [
      {
        id: 1,
        title: 'Lesson 1: A Private Conversation',
        titleCn: '一次私人谈话',
        lyrics: [
          { en: 'Last week I went to the theatre.', cn: '上周我去了剧院。' },
          { en: 'I had a very good seat.', cn: '我的座位非常好。' },
          { en: 'The play was very interesting.', cn: '戏很有趣。' },
          { en: 'I did not enjoy it.', cn: '但我并没有欣赏到它。' },
          { en: 'A young man and a young woman were sitting behind me.', cn: '一对年轻男女坐在我后面。' },
          { en: 'They were talking loudly.', cn: '他们在大声交谈。' },
          { en: 'I got very angry.', cn: '我非常生气。' },
          { en: 'I could not hear the actors.', cn: '我听不到演员的声音。' },
          { en: 'I turned round.', cn: '我转过身去。' },
          { en: 'I looked at the man and the woman angrily.', cn: '生气地看着那对男女。' },
          { en: 'They did not pay any attention.', cn: '他们毫不在意。' },
          { en: 'In the end, I could not bear it.', cn: '最后，我实在忍不住了。' },
          { en: 'I turned round again.', cn: '我又转过身去。' },
          { en: '"I could not hear a word!" I said angrily.', cn: '"我一个字都听不到！"我生气地说。' },
          { en: '"It is none of your business," the young man said rudely.', cn: '"这不关你的事，"那个年轻人粗鲁地说。' },
          { en: '"This is a private conversation!"', cn: '"这是一次私人谈话！"' }
        ],
        vocabulary: [
          { word: 'private', phonetic: '/ˈpraɪvət/', pos: 'adjective', def: '私人的；私密的', example: 'This is a private conversation.' },
          { word: 'conversation', phonetic: '/ˌkɒnvəˈseɪʃn/', pos: 'noun', def: '对话；交谈', example: 'We had an interesting conversation.' },
          { word: 'angry', phonetic: '/ˈæŋɡri/', pos: 'adjective', def: '生气的；愤怒的', example: 'She was very angry with him.' },
          { word: 'bear', phonetic: '/beər/', pos: 'verb', def: '忍受；容忍', example: 'I cannot bear this noise anymore.' }
        ],
        quizzes: [
          { q: '叙述者为什么在剧院里生气？', options: ['The play was boring.', 'People behind were talking loudly.', 'His seat was uncomfortable.', 'He was hungry.'], answer: 1, exp: '因为后面的人大声说话影响了他听戏' },
          { q: '"It is none of your business" 是什么意思？', options: ['It is very important.', 'You should mind your own affairs.', 'This is a secret.', 'I need your help.'], answer: 1, exp: '意思是"这不关你的事"' }
        ]
      },
      {
        id: 2,
        title: 'Lesson 2: Breakfast or Lunch?',
        titleCn: '早餐还是午餐？',
        lyrics: [
          { en: 'Last Saturday I got up very late.', cn: '上星期六我起得很晚。' },
          { en: 'I looked out of the window.', cn: '我向窗外望去。' },
          { en: 'It was dark outside.', cn: '外面天很暗。' },
          { en: '"What a day!" I thought.', cn: '"多糟糕的一天！"我想。' },
          { en: '"It is raining again."', cn: '"又在下雨了。"' },
          { en: 'Just then, the telephone rang.', cn: '就在这时，电话响了。' },
          { en: 'It was my aunt Lucy.', cn: '是我姑妈露西打来的。' },
          { en: '"I have just arrived by train," she said.', cn: '"我刚下火车，"她说。' },
          { en: '"I am coming to see you."', cn: '"我正要来看你。"' },
          { en: '"But I am still having breakfast," I said.', cn: '"但我还在吃早餐呢，"我说。' },
          { en: '"What? You are still having breakfast? Dear me!"', cn: '"什么？你还在吃早餐？天哪！"' },
          { en: '"It is one o\'clock."', cn: '"已经一点钟了。""' }
        ],
        vocabulary: [
          { word: 'breakfast', phonetic: '/ˈbrekfəst/', pos: 'noun', def: '早餐', example: "I always eat breakfast at 7 o'clock." },
          { word: 'outside', phonetic: '/ˌaʊtˈsaɪd/', pos: 'adverb', def: '外面；在外面', example: 'It is cold outside.' },
          { word: 'aunt', phonetic: '/ɑːnt/', pos: 'noun', def: '姑妈；姨妈', example: 'My aunt lives in London.' }
        ],
        quizzes: [
          { q: '"Last Saturday I got up very late" 用的是什么时态？', options: ['Simple present', 'Past simple', 'Present perfect', 'Future simple'], answer: 1, exp: '描述过去发生的事情用一般过去时' }
        ]
      },
      {
        id: 3,
        title: 'Lesson 3: Please Send Me a Card',
        titleCn: '请给我寄一张明信片',
        lyrics: [
          { en: 'Last summer I went to Italy.', cn: '去年夏天我去了意大利。' },
          { en: 'I visited museums and sat in public gardens.', cn: '我参观了博物馆，还在公园里坐过。' },
          { en: 'A friendly waiter taught me a few words of Italian.', cn: '一位友善的服务员教了我几句意大利语。' },
          { en: 'Then he lent me a book.', cn: '然后他借给了我一本书。' },
          { en: 'I read a few lines, but I did not understand a word.', cn: '我读了几行，但一个字也看不懂。' },
          { en: 'Every day I thought about postcards.', cn: '每天我都在想明信片的事。' },
          { en: 'I spent whole mornings in my room.', cn: '整个上午我都待在房间里。' },
          { en: 'I did not write any cards to my friends.', cn: '我没有给朋友写任何明信片。' },
          { en: 'At last I gave up.', cn: '最后我放弃了。' },
          { en: 'I bought a book instead.', cn: '我买了一本书作为替代。' }
        ],
        vocabulary: [
          { word: 'museum', phonetic: '/mjuˈziːəm/', pos: 'noun', def: '博物馆', example: 'The museum is open every day.' },
          { word: 'postcard', phonetic: '/ˈpoʊstkɑːrd/', pos: 'noun', def: '明信片', example: 'She sent me a postcard from Paris.' },
          { word: 'give up', phonetic: '/ɡɪv ʌp/', pos: 'phrasal verb', def: '放弃', example: 'I gave up learning French.' }
        ],
        quizzes: [
          { q: '为什么叙述者买了书而不是寄明信片？', options: ['He forgot to buy postcards.', 'He could not write postcards.', 'He gave up trying to write them.', 'Postcards were too expensive.'], answer: 2, exp: '文章说"At last I gave up"' }
        ]
      },
      {
        id: 4,
        title: 'Lesson 4: An Exciting Trip',
        titleCn: '一次令人兴奋的旅行',
        lyrics: [
          { en: 'I have just received a letter from my brother, Tim.', cn: '我刚收到弟弟蒂姆的来信。' },
          { en: 'He has been an engineer for three years now.', cn: '他做工程师已经三年了。' },
          { en: 'Tim is older than me, but he is younger than my sister.', cn: '蒂姆比我大，但比我姐姐小。' },
          { en: 'He has just bought a new car.', cn: '他刚买了一辆新车。' },
          { en: 'He has gone to Singapore.', cn: '他去了新加坡。' },
          { en: 'He will stay there for three months.', cn: '他将在那里待三个月。' },
          { en: 'He will visit a number of different places.', cn: '他将访问许多不同的地方。' },
          { en: 'He has already visited a lot of places in Singapore.', cn: '他已经在新加坡参观了很多地方。' }
        ],
        vocabulary: [
          { word: 'receive', phonetic: '/rɪˈsiːv/', pos: 'verb', def: '收到；接到', example: 'I received a letter from my friend.' },
          { word: 'engineer', phonetic: '/ˌendʒɪˈnɪr/', pos: 'noun', def: '工程师', example: 'She works as an engineer.' },
          { word: 'already', phonetic: '/ɔːlˈredi/', pos: 'adverb', def: '已经', example: 'I have already finished my homework.' }
        ],
        quizzes: [
          { q: '"He has been an engineer for three years now" 用的是什么时态？', options: ['Simple present', 'Present perfect continuous', 'Past simple', 'Present perfect'], answer: 3, exp: '现在完成时表示从过去持续到现在的动作' }
        ]
      }
    ]
  },
  {
    key: 'NCE3',
    title: '新概念英语第三册',
    level: 'B2',
    lessons: [
      {
        id: 1,
        title: 'Lesson 1: A Puma at Large',
        titleCn: '逃遁的美洲狮',
        lyrics: [
          { en: 'Pumas are large, cat-like animals which are found in America.', cn: '美洲狮是一种体型巨大、像猫一样的动物，产于美洲。' },
          { en: 'When reports came into London Zoo that a wild puma had been spotted forty-five miles south of London, they were not taken seriously.', cn: '当报告传到伦敦动物园说在伦敦以南45英里处发现了一只野生美洲狮时，这些报告并没有被认真对待。' },
          { en: 'However, as the evidence began to accumulate, experts from the Zoo felt obliged to investigate.', cn: '然而，随着证据越来越多，动物园的专家们觉得有必要进行调查。' },
          { en: 'For the descriptions given by people who claimed to have seen the puma were extraordinarily similar.', cn: '因为那些声称看见过美洲狮的人所描述的情况竟惊人地相似。' }
        ],
        vocabulary: [
          { word: 'puma', phonetic: '/ˈpjuːmə/', pos: 'noun', def: '美洲狮', example: 'The puma escaped from the zoo.' },
          { word: 'spot', phonetic: '/spɒt/', pos: 'verb', def: '发现；认出', example: 'I spotted a rare bird in the tree.' },
          { word: 'evidence', phonetic: '/ˈevɪdəns/', pos: 'noun', def: '证据；迹象', example: 'There is no evidence of life on Mars.' },
          { word: 'accumulate', phonetic: '/əˈkjuːmjəleɪt/', pos: 'verb', def: '积累；积聚', example: 'Dust accumulated on the desk.' }
        ],
        quizzes: [
          { q: '为什么最初关于美洲狮的报告没有被认真对待？', options: ['Pumas do not exist in England.', 'The reports came from ordinary people.', 'London Zoo did not care.', 'Pumas are not dangerous.'], answer: 1, exp: '因为报告来自普通人而不是专家' }
        ]
      },
      {
        id: 2,
        title: 'Lesson 2: Thirteen Equals One',
        titleCn: '十三等于一',
        lyrics: [
          { en: 'Our village will soon be one hundred years old.', cn: '我们村子即将迎来一百周年纪念。' },
          { en: 'As a result of this, we are planning to hold a celebration.', cn: '因此，我们正在计划举办一场庆祝活动。' },
          { en: 'In the village there is an old church which dates back to the Middle Ages.', cn: '村子里有一座古老的教堂，可以追溯到中世纪。' },
          { en: 'The church tower needs repairing, so we decided to raise money by organizing a sale.', cn: '教堂的钟楼需要修缮，所以我们决定通过组织一场义卖来筹款。' },
          { en: 'We have collected enough money to have the tower repaired.', cn: '我们已经筹集了足够的钱来修缮钟楼。' },
          { en: 'But we need one thousand pounds more.', cn: '但我们还需要一千英镑。' },
          { en: 'We have decided to sell our church clock to the highest bidder.', cn: '我们决定把教堂的钟卖给出价最高的人。' },
          { en: 'It will be taken down next week.', cn: '它将于下周被拆除。' }
        ],
        vocabulary: [
          { word: 'celebration', phonetic: '/ˌselɪˈbreɪʃn/', pos: 'noun', def: '庆祝；庆祝活动', example: 'We had a party in celebration of her birthday.' },
          { word: 'church', phonetic: '/tʃɜːrtʃ/', pos: 'noun', def: '教堂；礼拜堂', example: 'The church was built in the 12th century.' },
          { word: 'bidder', phonetic: '/ˈbɪdər/', pos: 'noun', def: '出价人；投标人', example: 'The painting was sold to the highest bidder.' }
        ],
        quizzes: [
          { q: '为什么村民们需要筹钱？', options: ['To build a new church.', 'To repair the church tower.', 'To organize a celebration.', 'To buy a new clock.'], answer: 1, exp: '文章明确指出"The church tower needs repairing"' }
        ]
      },
      {
        id: 3,
        title: 'Lesson 3: An Unknown Goddess',
        titleCn: '无名女神',
        lyrics: [
          { en: 'Some time ago, an interesting discovery was made by archaeologists on the Aegean island of Kea.', cn: '不久之前，考古学家在爱琴海的基亚岛上有一个有趣的发现。' },
          { en: 'An American team explored a temple which stands in an ancient city on the promontory of Ayia Irini.', cn: '一支美国考古队在一个古老的城市——阿伊亚·伊里尼海角的一座寺庙里进行发掘。' },
          { en: 'The city was destroyed by an earthquake, but since it was abandoned, no one suspected that there were treasures beneath the ground.', cn: '这座城市毁于一场地震，但自从被废弃以后，没有人怀疑地下埋藏着宝藏。' },
          { en: 'In the temple, which was probably built in the 15th century BC, excavations revealed a large number of statues.', cn: '在这座可能建于公元前15世纪的寺庙里，发掘出大量的雕像。' }
        ],
        vocabulary: [
          { word: 'archaeologist', phonetic: '/ˌɑːrkiˈɒlədʒɪst/', pos: 'noun', def: '考古学家', example: 'Archaeologists discovered ancient ruins.' },
          { word: 'excavation', phonetic: '/ˌekskəˈveɪʃn/', pos: 'noun', def: '发掘；挖掘', example: 'The excavation took several years.' },
          { word: 'abandon', phonetic: '/əˈbændən/', pos: 'verb', def: '遗弃；放弃', example: 'The town was abandoned after the flood.' }
        ],
        quizzes: [
          { q: '这座古城是如何被毁的？', options: ['By a fire', 'By an earthquake', 'By a flood', 'By war'], answer: 1, exp: '文章指出"The city was destroyed by an earthquake"' }
        ]
      },
      {
        id: 4,
        title: 'Lesson 4: The Double Life of Alfred Bloggs',
        titleCn: '阿尔弗雷德的双重生活',
        lyrics: [
          { en: 'These days, people who do manual work often earn higher wages than people who work in offices.', cn: '如今，体力工作者经常比办公室工作人员挣更高的工资。' },
          { en: 'People who work in offices are frequently referred to as "white collar workers".', cn: '在办公室工作的人常被称为"白领工人"。' },
          { en: 'Many people leave their jobs to find better positions.', cn: '许多人离职去找更好的职位。' },
          { en: 'They may also find that they have to do different kinds of work.', cn: '他们也可能发现必须做不同种类的工作。' },
          { en: 'However, some people enjoy their work and would not change jobs.', cn: '然而，有些人热爱他们的工作，不想换工作。' },
          { en: 'They are very happy to be "blue collar workers".', cn: '他们非常乐意做"蓝领工人"。' }
        ],
        vocabulary: [
          { word: 'manual', phonetic: '/ˈmænjuəl/', pos: 'adjective', def: '体力的；手工的', example: 'He does manual labor at the factory.' },
          { word: 'wage', phonetic: '/weɪdʒ/', pos: 'noun', def: '工资；报酬', example: 'The minimum wage has increased.' },
          { word: 'position', phonetic: '/pəˈzɪʃn/', pos: 'noun', def: '职位；岗位', example: 'She applied for a position as manager.' }
        ],
        quizzes: [
          { q: '什么是"白领工人"？', options: ['Workers who wear white shirts', 'Office workers', 'Factory workers', 'Construction workers'], answer: 1, exp: 'White collar workers 指的是在办公室工作的人' }
        ]
      }
    ]
  },
  {
    key: 'NCE4',
    title: '新概念英语第四册',
    level: 'C1',
    lessons: [
      {
        id: 1,
        title: 'Lesson 1: The Birth of Modern Science',
        titleCn: '现代科学的诞生',
        lyrics: [
          { en: 'In the 16th century, a great wave of skepticism and inquiry swept across the European continent.', cn: '在16世纪，一股怀疑与探究的浪潮席卷了欧洲大陆。' },
          { en: 'It began with a rediscovery of classical learning and the conviction that humanity could understand the world through systematic observation and experiment.', cn: '它始于对古典学问的重新发现，以及人类可以通过系统的观察和实验来理解世界的信念。' },
          { en: 'The scientific revolution that followed challenged traditional authorities and transformed our understanding of the universe.', cn: '随之而来的科学革命挑战了传统权威，改变了我们对宇宙的理解。' },
          { en: 'Scholars began to question accepted doctrines and sought to verify knowledge through direct experience rather than relying on ancient texts.', cn: '学者们开始质疑被广泛接受的教条，并寻求通过直接经验来验证知识，而不是依赖古代文献。' }
        ],
        vocabulary: [
          { word: 'skepticism', phonetic: '/ˈskeptɪsɪzəm/', pos: 'noun', def: '怀疑主义', example: 'His claims met with considerable skepticism.' },
          { word: 'systematic', phonetic: '/ˌsɪstəˈmætɪk/', pos: 'adjective', def: '系统的；有条理的', example: 'We need a systematic approach to solving this problem.' },
          { word: 'conviction', phonetic: '/kənˈvɪkʃn/', pos: 'noun', def: '坚定的信念', example: 'She has strong convictions about justice.' }
        ],
        quizzes: [
          { q: '科学革命的特点是什么？', options: ['A return to classical literature', 'A questioning of traditional authorities', 'An emphasis on religious belief', 'A focus on art and music'], answer: 1, exp: '科学革命"挑战了传统权威"' }
        ]
      },
      {
        id: 2,
        title: 'Lesson 2: The Great Migration',
        titleCn: '大迁徙',
        lyrics: [
          { en: 'The movement of people from rural to urban areas has accelerated dramatically in the past century.', cn: '在过去的一个世纪里，人们从农村向城市的流动急剧加速。' },
          { en: 'This phenomenon, known as urbanization, has reshaped the demographic landscape of nations across the globe.', cn: '这种被称为城市化的现象重塑了全球各国的人口格局。' },
          { en: 'While cities offer opportunities for employment and education, they also present significant challenges.', cn: '虽然城市提供了就业和教育的机会，但也带来了重大挑战。' },
          { en: 'Housing shortages, traffic congestion, and environmental degradation are persistent problems that accompany urban growth.', cn: '住房短缺、交通拥堵和环境恶化是伴随城市增长的持续性问题。' },
          { en: 'Governments must balance the benefits of urbanization against its considerable social costs.', cn: '各国政府必须在城市化的好处和其相当大的社会成本之间取得平衡。' }
        ],
        vocabulary: [
          { word: 'migration', phonetic: '/maɪˈɡreɪʃn/', pos: 'noun', def: '迁移；移居', example: 'The migration from rural areas continues.' },
          { word: 'urbanization', phonetic: '/ˌɜːrbənaɪˈzeɪʃn/', pos: 'noun', def: '城市化', example: 'Rapid urbanization has changed China dramatically.' },
          { word: 'degradation', phonetic: '/ˌdeɡrəˈdeɪʃn/', pos: 'noun', def: '退化；恶化', example: 'Environmental degradation is a serious concern.' }
        ],
        quizzes: [
          { q: '这篇文章的主题是什么？', options: ['Rural life', 'Urbanization and its effects', 'Housing problems', 'Environmental protection'], answer: 1, exp: '文章讨论了城市化的利弊和影响' }
        ]
      },
      {
        id: 3,
        title: 'Lesson 3: The Economic Problem',
        titleCn: '经济问题',
        lyrics: [
          { en: 'Scarcity is the fundamental economic problem.', cn: '稀缺是基本的经济问题。' },
          { en: 'It arises because human wants are unlimited while the resources available to satisfy those wants are limited.', cn: '它之所以产生，是因为人类的欲望是无限的，而用来满足这些欲望的资源是有限的。' },
          { en: 'Economics, as a discipline, studies how societies allocate scarce resources among competing uses.', cn: '经济学作为一门学科，研究社会如何在相互竞争的各种用途之间分配稀缺资源。' },
          { en: 'This allocation process involves choices about what to produce, how to produce, and for whom to produce.', cn: '这种分配过程涉及关于生产什么、如何生产和为谁生产的抉择。' },
          { en: 'Every decision to produce one good necessarily involves sacrificing the opportunity to produce another.', cn: '每一个生产某种商品的决定都必然涉及牺牲生产另一种商品的机会。' }
        ],
        vocabulary: [
          { word: 'scarcity', phonetic: '/ˈskersəti/', pos: 'noun', def: '稀缺；不足', example: 'Water scarcity affects many regions.' },
          { word: 'allocate', phonetic: '/ˈæləkeɪt/', pos: 'verb', def: '分配；拨给', example: 'The government allocated funds for education.' },
          { word: 'sacrifice', phonetic: '/ˈsækrɪfaɪs/', pos: 'verb', def: '牺牲；放弃', example: 'She sacrificed her career for her family.' }
        ],
        quizzes: [
          { q: '什么是基本的经济问题？', options: ['Unemployment', 'Scarcity', 'Inflation', 'Poverty'], answer: 1, exp: '文章明确指出"Scarcity is the fundamental economic problem"' }
        ]
      },
      {
        id: 4,
        title: 'Lesson 4: The Language of the Media',
        titleCn: '媒体语言',
        lyrics: [
          { en: 'The media shapes public opinion through careful selection and presentation of information.', cn: '媒体通过精心选择和呈现信息来塑造公众舆论。' },
          { en: 'Journalists make countless decisions about what stories to cover and how to frame them.', cn: '记者们做出无数关于报道什么故事以及如何构架这些故事的决定。' },
          { en: 'These choices influence how audiences perceive events and issues.', cn: '这些选择影响着受众如何感知事件和问题。' },
          { en: 'Objective reporting strives to present facts without bias, but complete neutrality is arguably impossible.', cn: '客观报道努力呈现不带偏见的事实，但完全的中立或许是不可能的。' },
          { en: 'Every narrative involves selection, emphasis, and omission.', cn: '每一个叙述都涉及选择、强调和省略。' },
          { en: 'Media literacy has become essential for citizens who wish to understand the complex world around them.', cn: '对于想要理解周围复杂世界的公民来说，媒体素养已成为必不可少的能力。' }
        ],
        vocabulary: [
          { word: 'objective', phonetic: '/əbˈdʒektɪv/', pos: 'adjective', def: '客观的', example: 'Try to be objective when judging the situation.' },
          { word: 'bias', phonetic: '/ˈbaɪəs/', pos: 'noun', def: '偏见；倾向', example: 'The article shows a clear bias toward the government.' },
          { word: 'omission', phonetic: '/əˈmɪʃn/', pos: 'noun', def: '省略；遗漏', example: 'The report contained several omissions.' }
        ],
        quizzes: [
          { q: '为什么新闻报道中完全的中立是不可能的？', options: ['Journalists are poorly trained.', 'Every narrative involves selection.', 'All media is controlled.', 'Facts are always subjective.'], answer: 1, exp: '因为"每一个叙述都涉及选择、强调和省略"' }
        ]
      }
    ]
  }
]

function App() {
  const [currentBookKey, setCurrentBookKey] = useState('NCE1')
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [currentLyricIndex, setCurrentLyricIndex] = useState(-1)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playMode, setPlayMode] = useState('single')
  const [playbackRate, setPlaybackRate] = useState(1.0)
  const [translationMode, setTranslationMode] = useState('show')
  const [activeTab, setActiveTab] = useState('lyrics')
  const [quizAnswers, setQuizAnswers] = useState({})
  const [darkTheme, setDarkTheme] = useState(false)
  
  const audioRef = useRef(null)
  const intervalRef = useRef(null)

  const currentBook = BOOKS.find(b => b.key === currentBookKey) || BOOKS[0]
  const currentLesson = currentBook?.lessons[currentLessonIndex] || currentBook?.lessons[0]

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
    localStorage.setItem('nce-theme', darkTheme ? 'dark' : 'light')
  }, [darkTheme])

  useEffect(() => {
    const savedTheme = localStorage.getItem('nce-theme')
    if (savedTheme === 'dark') setDarkTheme(true)
  }, [])

  useEffect(() => {
    if (isPlaying && currentLyricIndex >= 0) {
      intervalRef.current = setInterval(() => {
        if (currentLyricIndex < currentLesson.lyrics.length - 1) {
          setCurrentLyricIndex(prev => prev + 1)
        } else {
          setIsPlaying(false)
          setCurrentLyricIndex(-1)
        }
      }, 2500 / playbackRate)
    }
    return () => clearInterval(intervalRef.current)
  }, [isPlaying, currentLyricIndex, currentLesson, playbackRate])

  const handleLessonSelect = (index) => {
    setCurrentLessonIndex(index)
    setCurrentLyricIndex(-1)
    setIsPlaying(false)
    setQuizAnswers({})
  }

  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false)
    } else {
      if (currentLyricIndex === -1) {
        setCurrentLyricIndex(0)
      }
      setIsPlaying(true)
    }
  }

  const handleLyricClick = (index) => {
    setCurrentLyricIndex(index)
    setIsPlaying(true)
  }

  const handlePrevLesson = () => {
    if (currentLessonIndex > 0) {
      handleLessonSelect(currentLessonIndex - 1)
    }
  }

  const handleNextLesson = () => {
    if (currentLessonIndex < currentBook.lessons.length - 1) {
      handleLessonSelect(currentLessonIndex + 1)
    }
  }

  const cycleSpeed = () => {
    const speeds = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0]
    const currentIndex = speeds.indexOf(playbackRate)
    const nextIndex = (currentIndex + 1) % speeds.length
    setPlaybackRate(speeds[nextIndex])
  }

  const togglePlayMode = () => {
    setPlayMode(prev => prev === 'single' ? 'continuous' : 'single')
  }

  const cycleTranslation = () => {
    const modes = ['show', 'hide', 'blur']
    const currentIndex = modes.indexOf(translationMode)
    const nextIndex = (currentIndex + 1) % modes.length
    setTranslationMode(modes[nextIndex])
  }

  const handleQuizAnswer = (quizIndex, optionIndex) => {
    setQuizAnswers(prev => ({ ...prev, [quizIndex]: optionIndex }))
  }

  const cycleTheme = () => {
    setDarkTheme(prev => !prev)
  }

  const getTranslationDisplay = () => {
    if (translationMode === 'hide') return '英'
    if (translationMode === 'blur') return '模'
    return '中'
  }

  return (
    <>
      <header className="header">
        <div className="header-left">
          <h1>新概念英语</h1>
          <span className="subtitle">New Concept English</span>
        </div>
        <div className="header-right">
          <select 
            className="book-select"
            value={currentBookKey}
            onChange={(e) => {
              setCurrentBookKey(e.target.value)
              setCurrentLessonIndex(0)
              setCurrentLyricIndex(-1)
              setQuizAnswers({})
            }}
          >
            {BOOKS.map(book => (
              <option key={book.key} value={book.key}>{book.title}</option>
            ))}
          </select>
          <button className="theme-toggle" onClick={cycleTheme}>
            {darkTheme ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <div className="container">
        <aside className="lesson-list">
          <h2>课程列表</h2>
          <div className="lesson-items">
            {currentBook.lessons.map((lesson, index) => (
              <div
                key={lesson.id}
                className={`lesson-item ${index === currentLessonIndex ? 'active' : ''}`}
                onClick={() => handleLessonSelect(index)}
              >
                <h3>{lesson.titleCn}</h3>
              </div>
            ))}
          </div>
        </aside>

        <div className="main-content">
          <section className="player-section">
            <div className="book-info">
              <div className="book-cover" style={{ background: 'linear-gradient(135deg, #e04e39, #f28f3b)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '20px' }}>
                {currentBook.key}ze: '20px' }}>
                {currentBook.key}
              </div>
              <div className="book-details">
                <h2>{currentLesson.title}</h2>
                <span className="level">{currentBook.level}</span>
              </div>
            </div>

            <div className="control-panel">
              <div className="control-buttons">
                <button className="nav-btn" onClick={handlePrevLesson} disabled={currentLessonIndex === 0}>
                  ◀
                </button>
                <button className="play-btn" onClick={handlePlayPause}>
                  {isPlaying ? '⏸' : '▶'}
                </button>
                <button className="nav-btn" onClick={handleNextLesson} disabled={currentLessonIndex === currentBook.lessons.length - 1}>
                  ▶
                </button>
                <button className={`speed-btn ${playbackRate !== 1.0 ? 'active' : ''}`} onClick={cycleSpeed}>
                  {playbackRate}x
                </button>
                <button className={`mode-btn ${playMode === 'continuous' ? 'active' : ''}`} onClick={togglePlayMode}>
                  {playMode === 'single' ? '单句' : '连播'}
                </button>
                <button className="translate-btn" onClick={cycleTranslation}>
                  {getTranslationDisplay()}
                </button>
              </div>
            </div>
          </section>

          <div className="tabs">
            <button className={`tab-btn ${activeTab === 'lyrics' ? 'active' : ''}`} onClick={() => setActiveTab('lyrics')}>
              课文
            </button>
            <button className={`tab-btn ${activeTab === 'vocab' ? 'active' : ''}`} onClick={() => setActiveTab('vocab')}>
              词汇 ({currentLesson.vocabulary.length})
            </button>
            <button className={`tab-btn ${activeTab === 'quiz' ? 'active' : ''}`} onClick={() => setActiveTab('quiz')}>
              测验 ({currentLesson.quizzes.length})
            </button>
          </div>

          <section className={`lyrics-section ${translationMode === 'blur' ? 'blur-mode' : ''}`}>
            {activeTab === 'lyrics' && (
              <div className="lyrics-display">
                {currentLesson.lyrics.map((line, index) => (
                  <div
                    key={index}
                    className={`lyric-line ${index === currentLyricIndex ? 'active' : ''}`}
                    onClick={() => handleLyricClick(index)}
                  >
                    <div className="lyric-text">{line.en}</div>
                    {translationMode !== 'hide' && (
                      <div className="lyric-translation">{line.cn}</div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'vocab' && (
              <div className="vocab-list">
                {currentLesson.vocabulary.map((word, index) => (
                  <div key={index} className="vocab-item">
                    <div>
                      <span className="vocab-word">{word.word}</span>
                      <span className="vocab-phonetic">{word.phonetic}</span>
                    </div>
                    <span className="vocab-pos">{word.pos}</span>
                    <div className="vocab-definition">{word.def}</div>
                    <div className="vocab-example">"{word.example}"</div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'quiz' && (
              <div className="quiz-list">
                {currentLesson.quizzes.map((quiz, quizIndex) => {
                  const userAnswer = quizAnswers[quizIndex]
                  const isAnswered = userAnswer !== undefined
                  const isCorrect = userAnswer === quiz.answer
                  
                  return (
                    <div key={quizIndex} className="quiz-item">
                      <div className="quiz-question">
                        {quizIndex + 1}. {quiz.q}
                      </div>
                      <div className="quiz-options">
                        {quiz.options.map((option, optIndex) => {
                          let optionClass = 'quiz-option'
                          if (isAnswered) {
                            if (optIndex === quiz.answer) {
                              optionClass += ' correct'
                            } else if (optIndex === userAnswer) {
                              optionClass += ' incorrect'
                            }
                          }
                          return (
                            <div
                              key={optIndex}
                              className={optionClass}
                              onClick={() => !isAnswered && handleQuizAnswer(quizIndex, optIndex)}
                            >
                              {option}
                            </div>
                          )
                        })}
                      </div>
                      {isAnswered && (
                        <div className={`quiz-result ${isCorrect ? 'correct' : 'incorrect'}`}>
                          {isCorrect ? '✓ 正确！' : '✗ 错误。'}
                          {quiz.exp}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </section>
        </div>
      </div>

      <footer className="footer">
        © 2025 新概念英语学习播放器 | NCE Learning Player
      </footer>
    </>
  )
}

export default App
