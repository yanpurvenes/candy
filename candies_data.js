const candiesData = [
  {
    "name": "Адмирал. Кораблик",
    "composition": "горький шоколад, ром Club Especial (Куба), экстракт мадагаскарской ванили",
    "price": 850,
    "image": "images/admiral-korablik.jpg"
  },
  {
    "name": "ВЕЛИКИЙ ПУШКИН ТРЮФЕЛЬ",
    "composition": "тёмный шоколад, ваниль, семилетний коньяк",
    "price": 646,
    "image": "images/velikiy-pushkin-tryufel.jpg"
  },
  {
    "name": "ГАТЧИНА ТРЮФЕЛЬ",
    "composition": "тёмный шоколад, сок малины",
    "price": 555,
    "image": "images/gatchina-tryufel.jpg"
  },
  {
    "name": "ГОРОД БЕЛЫХ НОЧЕЙ ТРЮФЕЛЬ",
    "composition": "черничный ликер",
    "price": 675,
    "image": "images/gorod-belykh-nochey-tryufel.jpg"
  },
  {
    "name": "Грильяж в шоколаде",
    "composition": "тёмный шоколад, миндаль",
    "price": 590,
    "image": "images/grilyazh-v-shokolade.jpg"
  },
  {
    "name": "ЕКАТЕРИНА II ТРЮФЕЛЬ",
    "composition": "молочный трюфель с малиной в тёмном шоколаде",
    "price": 675,
    "image": "images/ekaterina-ii-tryufel.jpg"
  },
  {
    "name": "ЖАР - ПТИЦА",
    "composition": "конфеты миндальное пралине, тёмный шоколад, миндаль, кофе, сгущёное молоко, водка",
    "price": 680,
    "image": "images/zhar-ptitsa.jpg"
  },
  {
    "name": "Желе-суфле в шоколаде ассорти",
    "composition": "клубника, клюква, малина, лимон, малина, апельсин, черная смородина",
    "price": 335,
    "image": "images/zhele-sufle-v-shokolade-assorti.jpg"
  },
  {
    "name": "Марципан в шоколаде",
    "composition": "горький шоколад, ваниль, миндаль измельченый",
    "price": 615,
    "image": "images/martsipan-v-shokolade.jpg"
  },
  {
    "name": "Миндальное пралине",
    "composition": "тёмный шоколад, миндаль, сгущёное молоко",
    "price": 680,
    "image": "images/mindalnoe-praline.jpg"
  },
  {
    "name": "Морская столица",
    "composition": "фундучно-арахисовая халва",
    "price": 675,
    "image": "images/morskaya-stolitsa.jpg"
  },
  {
    "name": "НА НЕВСКОМ ТРЮФЕЛЬ",
    "composition": "в тёмном шоколаде, кофе, молочный шоколад, ваниль",
    "price": 675,
    "image": "images/na-nevskom-tryufel.jpg"
  },
  {
    "name": "ПЁТР I ТРЮФЕЛЬ",
    "composition": "тёмный шоколад, ваниль, морская соль, перец кенийский",
    "price": 675,
    "image": "images/pyotr-i-tryufel.jpg"
  },
  {
    "name": "Петра творенье",
    "composition": "марципан в тёмном шоколаде",
    "price": 675,
    "image": "images/petra-tvorene.jpg"
  },
  {
    "name": "Помадно-желейные в тёмном шоколаде",
    "composition": "сливочная помадка, желе-малина, черная смородина, клубника, лимон",
    "price": 380,
    "image": "images/pomadno-zheleynye-v-tyomnom-shokolade.jpg"
  },
  {
    "name": "Пралине из арахиса с роялтином",
    "composition": "молочный шоколад, роялтин, арахис жаренный",
    "price": 580,
    "image": "images/praline-iz-arakhisa-s-royaltinom.jpg"
  },
  {
    "name": "Пралине из фундука",
    "composition": "молочный шоколад, фундук дроблёный",
    "price": 580,
    "image": "images/praline-iz-funduka.jpg"
  },
  {
    "name": "Пралиново-вафельные",
    "composition": "шоколадно-ореховое пралине, арахис, кофе молотый, вафли, тёмный шоколад",
    "price": 550,
    "image": "images/pralinovo-vafelnye.jpg"
  },
  {
    "name": "Суфле в шоколаде ассорти",
    "composition": "суфле & шоколад кофе, суфле & шоколад чёрная смородина",
    "price": 467,
    "image": "images/sufle-v-shokolade-assorti.jpg"
  },
  {
    "name": "Трюфели «Адмирал»",
    "composition": "горький шоколад, брусника, ваниль, джин Barrister Russian Gin",
    "price": 850,
    "image": "images/tryufeli-admiral.jpg"
  },
  {
    "name": "Трюфели «Аурум» (Aurum)",
    "composition": "горький шоколад, ликёр Cointreau, чёрная смородина / джин",
    "price": 850,
    "image": "images/tryufeli-aurum-aurum.jpg"
  },
  {
    "name": "Трюфели «Барбара Blue»",
    "composition": "горький шоколад, порто, сыр Дор Блю",
    "price": 850,
    "image": "images/tryufeli-barbara-blue.jpg"
  },
  {
    "name": "Трюфели «Барбара Green»",
    "composition": "горький шоколад, кальвадос Pere Magloire Fine V.S., яблоко, экстракт корицы",
    "price": 850,
    "image": "images/tryufeli-barbara-green.jpg"
  },
  {
    "name": "Трюфели «Барбара Red»",
    "composition": "горький шоколад, апельсиновая цедра, чили, джин Barrister Orange Gin",
    "price": 850,
    "image": "images/tryufeli-barbara-red.jpg"
  },
  {
    "name": "Трюфели «Барбара Yellow»",
    "composition": "горький шоколад, ликёр Limoncello, имбирь, итальянский лимон",
    "price": 850,
    "image": "images/tryufeli-barbara-yellow.jpg"
  },
  {
    "name": "Трюфели «Божественные»",
    "composition": "курага, пекан, вино / инжир, пекан, амаро / чернослив, пекан, коньяк / изюм, пекан, ром",
    "price": 850,
    "image": "images/tryufeli-bozhestvennye.jpg"
  },
  {
    "name": "Трюфели «Гагарин»",
    "composition": "горький шоколад, ликёр Cointreau (Франция), цедра испанского апельсина",
    "price": 850,
    "image": "images/tryufeli-gagarin.jpg"
  },
  {
    "name": "Трюфели «Золотое детство»",
    "composition": "белый шоколад, ваниль, вишня, сироп вишнёвый Monin, баблгам",
    "price": 850,
    "image": "images/tryufeli-zolotoe-detstvo.jpg"
  },
  {
    "name": "Трюфели «Золотой телёнок»",
    "composition": "горький шоколад, ликёр Merrys Salted Caramel, кусочки карамели, розовая гималайская соль",
    "price": 850,
    "image": "images/tryufeli-zolotoy-telyonok.jpg"
  },
  {
    "name": "Трюфели «Ильич маленький»",
    "composition": "горький, молочный шоколад, ваниль, крем-брюле",
    "price": 850,
    "image": "images/tryufeli-ilich-malenkiy.jpg"
  },
  {
    "name": "Трюфели «Ильич»",
    "composition": "горький шоколад, водка «Царская Золотая», экстракт мадагаскарской ванили",
    "price": 850,
    "image": "images/tryufeli-ilich.jpg"
  },
  {
    "name": "Трюфели «Исаакиевская площадь»",
    "composition": "горький шоколад, ваниль, ликер Fruko Schulz Amaretto",
    "price": 850,
    "image": "images/tryufeli-isaakievskaya-ploshchad.jpg"
  },
  {
    "name": "Трюфели «Мин херц бальзам»",
    "composition": "горький, молочный шоколад, бальзам Riga Black Balsam (Латвия)",
    "price": 850,
    "image": "images/tryufeli-min-kherts-balzam.jpg"
  },
  {
    "name": "Трюфели «Президент»",
    "composition": "горький шоколад, водка «Царская», имбирь, экстракт мадагаскарской ванили",
    "price": 850,
    "image": "images/tryufeli-prezident.jpg"
  },
  {
    "name": "Трюфели «Сердце Екатерины лаванда»",
    "composition": "горький, молочный шоколад, цветки лаванды, виски Loch Lomond Reserve (Шотландия)",
    "price": 850,
    "image": "images/tryufeli-serdtse-ekateriny-lavanda.jpg"
  },
  {
    "name": "Трюфели «Сердце Екатерины сливки»",
    "composition": "горький, молочный шоколад, сливки, виски, ликер",
    "price": 850,
    "image": "images/tryufeli-serdtse-ekateriny-slivki.jpg"
  },
  {
    "name": "Трюфели «Царские классические»",
    "composition": "коньяк Favaraud (Франция), экстракт мадагаскарской ванили",
    "price": 850,
    "image": "images/tryufeli-tsarskie-klassicheskie.jpg"
  },
  {
    "name": "Трюфели Экстра «Город искусств»",
    "composition": "сгущеное молоко, ваниль, тёмный шоколад, коньяк",
    "price": 890,
    "image": "images/tryufeli-ekstra-gorod-iskusstv.jpg"
  },
  {
    "name": "Трюфели без сахара в ассортименте",
    "composition": "цукаты апельсина, вишня, кешью, кофе, янтарь",
    "price": 680,
    "image": "images/tryufeli-bez-sakhara-v-assortimente.jpg"
  },
  {
    "name": "Трюфель классический",
    "composition": "горький шоколад, слив. помадка, ваниль",
    "price": 570,
    "image": "images/tryufel-klassicheskiy.jpg"
  },
  {
    "name": "Трюфель с апельсином",
    "composition": "темный шоколад, цедра апельсина",
    "price": 720,
    "image": "images/tryufel-s-apelsinom.jpg"
  },
  {
    "name": "Трюфель с вишней",
    "composition": "темный шоколад, вишня сушеная, мармелад",
    "price": 770,
    "image": "images/tryufel-s-vishney.jpg"
  },
  {
    "name": "Трюфель с кайенским перцем",
    "composition": "горький, молочный шоколад, кофе, коньяк, корица, перец",
    "price": 570,
    "image": "images/tryufel-s-kayenskim-pertsem.jpg"
  },
  {
    "name": "Трюфель с кедровым орехом без сахара",
    "composition": "темный, молочный шоколад",
    "price": 837,
    "image": "images/tryufel-s-kedrovym-orekhom-bez-sakhara.jpg"
  },
  {
    "name": "Трюфель с коньяком",
    "composition": "горький шоколад, ваниль, сгущеное молоко, коньяк",
    "price": 570,
    "image": "images/tryufel-s-konyakom.jpg"
  },
  {
    "name": "Трюфель с кофе и кардамоном",
    "composition": "горький шоколад, слив. помадка, кардамон молотый, кофе растворимый",
    "price": 570,
    "image": "images/tryufel-s-kofe-i-kardamonom.jpg"
  },
  {
    "name": "Трюфель с лавандой",
    "composition": "горький шоколад, помадка сахарная, эфирное масло лаванды",
    "price": 570,
    "image": "images/tryufel-s-lavandoy.jpg"
  },
  {
    "name": "Трюфель с маракуйей",
    "composition": "горький шоколад, пюре маракуйи",
    "price": 570,
    "image": "images/tryufel-s-marakuyey.jpg"
  },
  {
    "name": "Трюфель с пряностями",
    "composition": "горький шоколад, слив. помадка, имбирь, корица, бадьян, гвоздика, кардамон, перец душистый, перец черный",
    "price": 570,
    "image": "images/tryufel-s-pryanostyami.jpg"
  },
  {
    "name": "Фрукты в шоколаде",
    "composition": "тёмный шоколад, чернослив, абрикос",
    "price": 597,
    "image": "images/frukty-v-shokolade.jpg"
  },
  {
    "name": "Хозяин льдов",
    "composition": "арахисовое пралине, вафли, тёмный шоколад",
    "price": 555,
    "image": "images/khozyain-ldov.jpg"
  },
  {
    "name": "ШОКОЛАДНЫЕ КОНФЕТЫ С КОНЬЯКОМ",
    "composition": "тёмный, молочный шоколад, коньяк",
    "price": 835,
    "image": "images/shokoladnye-konfety-s-konyakom.jpg"
  }
];
