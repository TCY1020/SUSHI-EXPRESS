const sushiMenu = [
  {
    name: '無花果櫻桃鴨',
    name_en: 'Pekin Duck w Fig',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/6585_s.png',
    categoryId: 1
  },
  {
    name: '香草柑橘松阪豬',
    name_en: 'Herb Citrus Pork Neck',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/6587_s.png',
    categoryId: 1
  },
  {
    name: '油漬番茄翼板牛',
    name_en: 'Beef w Confit Tomato',
    price: 40,
    image: 'https://www.sushiexpress.com.tw/images/Product/6589_s.png',
    categoryId: 1
  },
  {
    name: '蒜香羅勒金目鯛',
    name_en: 'Garlic Basil Kinmedai',
    price: 40,
    image: 'https://www.sushiexpress.com.tw/images/Product/6638_s.png',
    categoryId: 1
  },
  {
    name: '明太子翼板牛',
    name_en: 'Pollack Roe w Beef',
    price: 40,
    image: 'https://www.sushiexpress.com.tw/images/Product/6640_s.png',
    categoryId: 1
  },
  {
    name: '炙香乳酪鯖魚',
    name_en: 'Seared Mackerel w Cheese',
    price: 40,
    image: 'https://www.sushiexpress.com.tw/images/Product/6643_s.png',
    categoryId: 1
  },
  {
    name: '洋蔥橘醬鮮蝦',
    name_en: 'Shrimp w Onion Orange dressing',
    price: 40,
    image: 'https://www.sushiexpress.com.tw/images/Product/6691_s.png',
    categoryId: 1
  },
  {
    name: '炙燒明太子鰻魚',
    name_en: 'Seared Pollack Roe Eel',
    price: 60,
    image: 'https://www.sushiexpress.com.tw/images/Product/6644_s.png',
    categoryId: 1
  },
  {
    name: '香檸天使紅蝦',
    name_en: 'Red Shrimp w Lemon Dressing',
    price: 60,
    image: 'https://www.sushiexpress.com.tw/images/Product/6593_s.png',
    categoryId: 1
  },
  {
    name: '義式羅勒干貝',
    name_en: 'Garlic Basil Scallop',
    price: 60,
    image: 'https://www.sushiexpress.com.tw/images/Product/6595_s.png',
    categoryId: 1
  },
  {
    name: '烤鮭魚肚',
    name_en: 'Grilled Salmon Belly',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/6458_s.png',
    categoryId: 1
  },
  {
    name: '蒲燒鯛魚',
    name_en: 'Kabayaki Tilapia',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/6459_s.png',
    categoryId: 1
  },
  {
    name: '鮮蝦',
    name_en: 'Shrimp',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/6463_s.png',
    categoryId: 1
  },
  {
    name: '羅勒比目魚',
    name_en: 'Creamy Basil Halibut',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/6534_s.png',
    categoryId: 1
  },
  {
    name: '劍魷',
    name_en: 'Calamari',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/6566_s.png',
    categoryId: 1
  },
  {
    name: '檸香酸辣章魚',
    name_en: 'Octopus w Lemon Chutney',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/6584_s.png',
    categoryId: 1
  },
  {
    name: '鮪魚',
    name_en: 'Tuna',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3968_s.png',
    categoryId: 1
  },
  {
    name: '黃金鲱魚',
    name_en: 'Herring with Capelin Roe',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3971_s.png',
    categoryId: 1
  },
  {
    name: '牛五花',
    name_en: 'Beef Plate Slices',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3977_s.png',
    categoryId: 1
  },
  {
    name: '蟹風味棒',
    name_en: 'Imitation Crab Meat',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3979_s.png',
    categoryId: 1
  },
  {
    name: '干貝',
    name_en: 'Scallop',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3984_s.png',
    categoryId: 1
  },
  {
    name: '焦糖鮭魚',
    name_en: 'Sugar Glazed Salmon',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/4457_s.png',
    categoryId: 1
  },
  {
    name: '蒲燒星鰻',
    name_en: 'Kabayaki Conger Eel',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/4677_s.png',
    categoryId: 1
  },
  {
    name: '蒜香醬旗魚',
    name_en: 'Garlic Swordfish',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/4836_s.png',
    categoryId: 1
  },
  {
    name: '玉子燒',
    name_en: 'Tamagoyaki',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/4851_s.png',
    categoryId: 1
  },
  {
    name: '羅勒鯛魚',
    name_en: 'Basil Tilapia',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/6228_s.png',
    categoryId: 1
  },
  {
    name: '南洋風舒肥雞',
    name_en: 'Chicken w／ Chili Crab Sauce',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/6452_s.png',
    categoryId: 1
  },
  {
    name: '赤貝',
    name_en: 'Ark Shell Clam',
    price: 40,
    image: 'https://www.sushiexpress.com.tw/images/Product/6428_s.png',
    categoryId: 1
  },
  {
    name: '羅勒焗烤扇貝',
    name_en: 'Garlic Basil Farrers Scallop',
    price: 40,
    image: 'https://www.sushiexpress.com.tw/images/Product/6444_s.png',
    categoryId: 1
  }, {
    name: '海鮮沙拉',
    name_en: 'Seafood Salad Gunkan',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/6646_s.png',
    categoryId: 2
  },
  {
    name: '山葵風味章魚',
    name_en: 'Cooked Octopus＆Wasabi Salad',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3920_s.png',
    categoryId: 2
  },
  {
    name: '小龍蝦沙拉',
    name_en: 'Crawfish Salad',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3922_s.png',
    categoryId: 2
  },
  {
    name: '玉米',
    name_en: 'Corn Salad',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3923_s.png',
    categoryId: 2
  },
  {
    name: '蝦味魚卵',
    name_en: 'Seasoned Herring／Capelin Roe',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3924_s.png',
    categoryId: 2
  },
  {
    name: '干貝鮭魚子',
    name_en: 'Scallop＆Salmon Roe',
    price: 40,
    image: 'https://www.sushiexpress.com.tw/images/Product/6520_s.png',
    categoryId: 2
  },
  {
    name: '滿鮮鮭魚子',
    name_en: 'Salmon Roe Overflow',
    price: 60,
    image: 'https://www.sushiexpress.com.tw/images/Product/4638_s.png',
    categoryId: 2
  }, {
    name: '鮪魚',
    name_en: 'Tuna Sashimi',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3954_s.png',
    categoryId: 3
  },
  {
    name: '旗魚',
    name_en: 'Marlin Sashimi',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/4349_s.png',
    categoryId: 3
  },
  {
    name: '極厚鮭魚',
    name_en: 'Chunky Salmon',
    price: 60,
    image: 'https://www.sushiexpress.com.tw/images/Product/4637_s.png',
    categoryId: 3
  }, {
    name: '香煎海灣貝',
    name_en: 'Pan Fried Bay Scallop',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/6512_s.png',
    categoryId: 4
  },
  {
    name: '蝦卵卷壽司',
    name_en: 'Shrimp Roe Sushi Roll',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/6568_s.png',
    categoryId: 4
  },
  {
    name: '鮮蝦手卷',
    name_en: 'Shrimp Hand Roll',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/60_s.png',
    categoryId: 4
  },
  {
    name: '蘆筍手卷',
    name_en: 'Asparagus Hand Roll',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3340_s.png',
    categoryId: 4
  },
  {
    name: '黃瓜細卷',
    name_en: 'Cucumber Roll',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3949_s.png',
    categoryId: 4
  },
  {
    name: '旗魚鬆細卷',
    name_en: 'Fried Fish Flake Roll',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3950_s.png',
    categoryId: 4
  },
  {
    name: '稻荷',
    name_en: 'Fried Tofu Pouch',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3951_s.png',
    categoryId: 4
  },
  {
    name: '海膽盛',
    name_en: 'Sea Urchin Sushi Wrap',
    price: 40,
    image: 'https://www.sushiexpress.com.tw/images/Product/4217_s.png',
    categoryId: 4
  },
  {
    name: '白醬燻鮭手卷',
    name_en: 'Bechamel Smoked Salmon Hand Roll',
    price: 40,
    image: 'https://www.sushiexpress.com.tw/images/Product/6318_s.png',
    categoryId: 4
  },
  {
    name: '鮭魚子手卷',
    name_en: 'Salmon Roe Hand Roll',
    price: 60,
    image: 'https://www.sushiexpress.com.tw/images/Product/4760_s.png',
    categoryId: 4
  }, {
    name: '蒜香乳酪蝦',
    name_en: 'Garlic Shrimp w Cheese Sauce',
    price: 40,
    image: 'https://www.sushiexpress.com.tw/images/Product/6591_s.png',
    categoryId: 5
  },
  {
    name: '檸香酸辣淡菜',
    name_en: 'Mussels w Thai Dressing',
    price: 40,
    image: 'https://www.sushiexpress.com.tw/images/Product/6648_s.png',
    categoryId: 5
  },
  {
    name: '北極甜蝦',
    name_en: 'Sweet Shrimp Sashimi',
    price: 40,
    image: 'https://www.sushiexpress.com.tw/images/Product/6650_s.png',
    categoryId: 5
  },
  {
    name: '鮮魚味噌湯',
    name_en: 'Fish Miso Soup with Tofu',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/70_s.png',
    categoryId: 5
  },
  {
    name: '蟹風味棒沙拉',
    name_en: 'Imitation Crab Meat Salad',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3928_s.png',
    categoryId: 5
  },
  {
    name: '代鮑沙拉',
    name_en: 'Imitation Abalone Salad',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3933_s.png',
    categoryId: 5
  },
  {
    name: '花蛤',
    name_en: 'Cooked Clams',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3935_s.png',
    categoryId: 5
  },
  {
    name: '海帶絲',
    name_en: 'Sesame Seaweed Salad',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3937_s.png',
    categoryId: 5
  },
  {
    name: '秋葵',
    name_en: 'Okra',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3938_s.png',
    categoryId: 5
  },
  {
    name: '花椰菜',
    name_en: 'Broccoli',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3939_s.png',
    categoryId: 5
  },
  {
    name: '毛豆',
    name_en: 'Edamame',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3940_s.png',
    categoryId: 5
  },
  {
    name: '玉子燒',
    name_en: 'Tamagoyaki',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3942_s.png',
    categoryId: 5
  },
  {
    name: '馬鈴薯沙拉',
    name_en: 'Potato Salad',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3943_s.png',
    categoryId: 5
  },
  {
    name: '螺肉',
    name_en: 'Top Shell',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/4076_s.png',
    categoryId: 5
  },
  {
    name: '扇貝茶碗蒸',
    name_en: 'Steamed Egg Custard with Scallop',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/4476_s.png',
    categoryId: 5
  },
  {
    name: '洋蔥燻鮭',
    name_en: 'Smoked Salmon w／ Onion',
    price: 40,
    image: 'https://www.sushiexpress.com.tw/images/Product/5118_s.png',
    categoryId: 5
  },
  {
    name: '酸辣牛五花',
    name_en: 'Beef w／ Lemon Chutney',
    price: 40,
    image: 'https://www.sushiexpress.com.tw/images/Product/6437_s.png',
    categoryId: 5
  }, {
    name: '爭鮮公仔茶凍',
    name_en: 'Jasmin Green Tea Jelly',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/6532_s.png',
    categoryId: 6
  },
  {
    name: '焦糖鹽之花泡芙',
    name_en: 'Salted Caramel Cream Puff',
    price: 40,
    image: 'https://www.sushiexpress.com.tw/images/Product/6654_s.png',
    categoryId: 6
  },
  {
    name: '栗子千層蛋糕',
    name_en: 'Chestnut Mille Crepe Cake',
    price: 60,
    image: 'https://www.sushiexpress.com.tw/images/Product/6652_s.png',
    categoryId: 6
  },
  {
    name: '柚子起士蛋糕',
    name_en: 'Yuzu Cheese Cake',
    price: 60,
    image: 'https://www.sushiexpress.com.tw/images/Product/6706_s.png',
    categoryId: 6
  },
  {
    name: '草莓奶酪',
    name_en: 'Strawberry Panna Cotta',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3944_s.png',
    categoryId: 6
  },
  {
    name: '黑糖奶酪',
    name_en: 'Brown Sugar Panna Cotta',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3945_s.png',
    categoryId: 6
  },
  {
    name: '鮮奶油布蕾',
    name_en: 'Custard Pudding',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3947_s.png',
    categoryId: 6
  },
  {
    name: '可樂',
    name_en: 'Coke',
    price: 30,
    image: 'https://www.sushiexpress.com.tw/images/Product/3565_s.png',
    categoryId: 6
  }
]
const category = [
  '握壽司', '軍艦壽司', '生魚片', '卷類', '小菜', '飲品/甜點'
]

module.exports = { sushiMenu, category }
