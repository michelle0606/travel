const dataPanel = document.getElementById('data-panel')
const info = [
  {
    Id: 'C1_313020000G_000026',
    Name: '宏亞食品巧克力觀光工廠',
    Zone: '',
    Toldescribe:
      '宏亞食品巧克力觀光工廠是一座以巧克力為主題的觀光工廠，建築設計、展場文字、陳列物、戶外景觀及相關造型皆與巧克力密不可分，全棟為綠建築，展場設計依照建築外觀之透光與否進行規劃，節能省碳，此外，展場更提供豐富的巧克力相關知識(含巧克力3500年歷史)為一寓教於樂之專業型廠館，是休閒娛樂絕佳去處。',
    Description:
      '巧克力共和國是一座以巧克力為主題的觀光工廠，建築設計、館內主題設計皆以巧克力為主題，這裡也提供豐富的巧克力相關知識，亦可以DIY創作巧克力，為一寓教於樂、適合親子休閒娛樂的絕佳去處。',
    Tel: '886-3-3656555',
    Add: '桃園縣八德市建國路386號',
    Zipcode: '33451',
    Travellinginfo: '',
    Opentime: '',
    Picture1: '',
    Picdescribe1: '',
    Picture2: '',
    Picdescribe2: '',
    Picture3: '',
    Picdescribe3: '',
    Map: '',
    Gov: '313020000G',
    Px: 121.297187,
    Py: 24.943325,
    Orgclass: '觀光工廠',
    Class1: '1',
    Class2: '14',
    Class3: '',
    Level: '9',
    Website: '',
    Parkinginfo: '',
    Parkinginfo_Px: 121.297187,
    Parkinginfo_Py: 24.943325,
    Ticketinfo: '收費方式請電洽',
    Remarks: '詳細參觀訊息請逕洽廠商網站說明',
    Keyword: '桃園，宏亞，巧克力，觀光工廠',
    Changetime: '2013-07-13T15:00:00+08:00'
  },
  {
    Id: 'C1_313020000G_000105',
    Name: '台灣金屬創意館',
    Zone: '',
    Toldescribe:
      '台灣金屬創意館為第一座金屬造型觀光工廠，來這裡可讓大家看到並觸摸到金屬柔軟的一面，館區內充滿各種金屬的驚奇與創意，是一個極具觀光、休閒、知性與文化的好地方。台灣金屬創意館為志鋼金屬股份有限公司創立之品牌，志鋼金屬是由六位志同道合的的好朋友攜手創立，1995年成立之時，即專注於板金鋼鐵加工上，因而將公司命名為志鋼金屬，十多年來，六人同心協力使公司一路成長茁壯。2010年，本著創新、突破、品牌、回饋之思維，決議推動工廠觀光化，將製造業與服務業結合，打造全國第一座板金觀光工廠。2013年正式通過觀光工廠評鑑，成立台灣金屬創意文化館。志鋼金屬為專業板金製造廠，一貫化生產流程讓參觀者可在志鋼看到完整的流程，由雷射切割、自動沖孔機進行金屬板下料，再由電腦折床進行成形作業，接著由銲接部門已氬銲、CO2銲接或自動銲接系統進行銲接加工與研磨，之後由塗裝部門進行產品塗裝與印刷，最後由組立部門以手動或氣動工具進行產品組裝與包裝',
    Description:
      '台灣金屬創意館為第一座金屬造型觀光工廠，來這裡可讓大家看到並觸摸到金屬柔軟的一面，館區內充滿各種金屬的驚奇與創意，是一個極具觀光、休閒、知性與文化的好地方。',
    Tel: '886-6-2036735#245',
    Add: '台南市永康區永科環路598號',
    Zipcode: '71041',
    Travellinginfo: '',
    Opentime: '',
    Picture1: '',
    Picdescribe1: '',
    Picture2: '',
    Picdescribe2: '',
    Picture3: '',
    Picdescribe3: '',
    Map: '',
    Gov: '313020000G',
    Px: 120.275724,
    Py: 23.045063,
    Orgclass: '觀光工廠',
    Class1: '1',
    Class2: '14',
    Class3: '',
    Level: '9',
    Website: 'http://www.tmcm.com.tw/',
    Parkinginfo: '',
    Parkinginfo_Px: 120.275724,
    Parkinginfo_Py: 23.045063,
    Ticketinfo: '收費方式請電洽',
    Remarks: '詳細參觀訊息請逕洽廠商網站說明',
    Keyword: '台南，志鋼，金屬，觀光工廠',
    Changetime: '2013-07-13T15:00:00+08:00'
  },
  {
    Id: 'C1_313020000G_000136',
    Name: '臺灣菸酒(股)公司林口觀光酒廠',
    Zone: '',
    Toldescribe:
      '林口酒廠為擁有近百年歷史的台北酒廠(1921)、板橋酒廠(1937)、樹林酒廠(1906)合併而成的新酒廠，於民國76年春正式啟用量產。原三酒廠各具有不同產品與文化特色，合併後發展為北部地區產能最大、設備最現代化的米糧釀造酒生產工廠。 林口酒廠成立以來一直是以生產紹興酒為主，民國85年利用原紹興酒生產設備釀製日式清酒，成功推出「玉泉清酒」，為全國唯一生產日式清酒之酒廠。民國93年為解決清酒粕副產物問題，開發「台酒清酒粕面膜」產品，定位為天然護膚保養素材，盛況一時，被喻為「窮人的SKII」。民國94年再創新研發，結合東方紅麴與西方葡萄酒，推出具養生概念且適合台灣人口味的「玉泉紅麴葡萄酒」，深獲社會大眾喜愛，為台灣市佔率最高的葡萄酒品牌。 林口酒廠不但致力各項酒類研發，生產方式也變得更加多元。民國96年將釀酒紅麴與餅乾大廠合作開發「台酒紅麴養生薄餅」，風味獨特造成搶購熱潮，風行海內外，短短1年半內創造超過10億元營業額，成為餅乾界之奇蹟。為朝多角化經營，除從事酒品生產外並設置有展售中心，內設「清酒館」「紅麴館」「酒銀行」等製程展館，開放民眾或外來觀光客參觀，一方面讓參訪者可了解製酒的過程與歷史，一方面也促使林口酒廠與工業區內其他景點(如台塑文物館、竹林寺、台塑醫療園區、華亞科技園區等)以及鄰近之鶯歌鎮產業等連結，形成地方產業文化觀光特色主題，除帶動產業觀光，更提昇桃園縣觀光旅遊系統的豐富性。 林口酒廠為配合公司資產活化政策，結合桃園縣推展航空城計畫以及機場捷運線開通啟用，集酒類生產、產業歷史、市場地利等基礎，結合產業文化、創意藝術、人文等資源以塑造工廠公園化，打造清酒意象文化園區，串聯週邊城廓、名勝、景點及公共設施，建構成北部地區指標性之觀光酒廠，期能吸引北臺灣800萬人口，來廠觀光遊憩進而增裕營收。',
    Description:
      '林口酒廠為北部地區產能最大、設備最現代化的清酒、紅麴葡萄酒生產工廠。廠內有產品推廣中心，開放參觀製酒過程與歷史，與桃園其他景點連結地方文化特色主題，帶動觀光提昇旅遊的豐富性。',
    Tel: '886-3-3283001#430',
    Add: '桃園縣龜山鄉文化一路55號',
    Zipcode: '333',
    Travellinginfo: '',
    Opentime: '',
    Picture1: '',
    Picdescribe1: '',
    Picture2: '',
    Picdescribe2: '',
    Picture3: '',
    Picdescribe3: '',
    Map: '',
    Gov: '313020000G',
    Px: 121.375231,
    Py: 25.056168,
    Orgclass: '觀光工廠',
    Class1: '1',
    Class2: '14',
    Class3: '',
    Level: '9',
    Website: '',
    Parkinginfo: '',
    Parkinginfo_Px: 121.375231,
    Parkinginfo_Py: 25.056168,
    Ticketinfo: '收費方式請電洽',
    Remarks: '詳細參觀訊息請逕洽廠商網站說明',
    Keyword: '林口，菸酒，酒廠，觀光工廠',
    Changetime: '2013-07-13T15:00:00+08:00'
  },
  {
    Id: 'C1_315080500H_000007',
    Name: '水璉、牛山海岸',
    Zone: '',
    Toldescribe:
      '玩賞攻略■能夠踏浪戲水、進行沙灘活動■春天可看見台灣百合開滿整座山坡■能夠露營聽著海浪、看著星空入睡■欣賞獨特會唱歌的換膚海灘水璉位在花蓮縣壽豐鄉海濱，蒼翠的山丘環抱著寬廣的河谷盆地，水璉溪蜿蜒而過，沿著公路邊的小徑往下，水璉濕地牛山海岸彷彿一片臨海的秘密樂園。除了可以踏浪戲水、進行沙灘活動和悠閒的垂釣之外，這片海岸的生態資源也相當豐富，海岸植物林是觀察東海岸生態樣貌的好地點，健行、漫步、賞鳥、觀蝶都是很棒的選擇，徜徉在廣闊的海岸草坪上感受藍天，白雲和陽光，時間彷彿定格。牛山呼庭的由來座落在水璉南方海灘的牛山，阿美族叫做:Huting(呼庭)，意思為大片草地的牧場。牛山擁有特殊地形，最奇特的是南岸貌似梯田的山丘小階，曾是水牛的牧草區，春天滿山坡的台灣百合盛開，可謂野百合的原生勝地。牛山的植物群相豐富，幾乎是東部海岸植物相的縮影，民國79年(1990)已列入台灣沿海保護區計畫中之自然保護區。冬天水璉牛山的海灘會唱歌-換膚海灘春夏，海灘柔細溫潤，赤足漫步在沙灘上，海風徐徐吹拂，彷彿置身「海角一樂園」，閒適自在悠遊自得；當東北季風一起，長長的沙灘，幾番吹送，細沙變成大大小小五顏六色的鵝卵石，依著一定的秩序排列在海灘上，海浪翻湧而來，鵝卵石被推著往岸上跑；當海浪退去，它們順著海灘的斜度，一顆顆滾下，發出高低抑揚不同頻率的聲音，當地人稱:冬天水璉牛山的海灘會唱歌。把心留在海岸線-星光露營牛山這裡也有小木屋提供簡單住宿，也可以選擇露營。躺在星空之下，在眼底刻滿星光，聽著潮水的聲音入眠，一不小心連心都會遺留在海岸線了。',
    Description:
      '水璉位在花蓮縣壽豐鄉海濱，為阿美族世居之地，早在3，500年前即有繩紋陶文化之先民居住於此。而座落在水璉南方海灘的牛山，阿美族稱此地為Hudin(呼定)，意即大片草地的牧場，此地植物群相豐富，幾乎是東部海岸植物相的縮影，已被劃定為自然生態保護區，綿延數公里的沙灘細緻溫潤，更是絕佳美景，彷彿一片臨海的秘密樂園。',
    Tel: '886-3-8601400',
    Add: '花蓮縣974壽豐鄉牛山39之5號',
    Zipcode: '974',
    Travellinginfo:
      '南下:於花蓮火車站前的花蓮客運，搭乘往豐濱、成功方向的海線班車，經花蓮大橋，約40～50分鐘，即可抵達水璉。北上:自台東火車站前，搭乘往花蓮方向的海線班車，經磯崎後、芭崎、蕃薯寮後，在水璉下車。詳細時刻表及車資請洽花蓮客運(查詢電話:03-8338146~8)或鼎東客運海線(查詢電話:089-328629 / 089-333443)',
    Opentime: '每日10:00-18:00',
    Picture1: '',
    Picdescribe1: '',
    Picture2: '',
    Picdescribe2: '',
    Picture3: '',
    Picdescribe3: '',
    Map: '',
    Gov: '315080500H',
    Px: 121.5694,
    Py: 23.76344,
    Orgclass: '',
    Class1: '8',
    Class2: '',
    Class3: '',
    Level: '',
    Website: '',
    Parkinginfo: '',
    Parkinginfo_Px: null,
    Parkinginfo_Py: null,
    Ticketinfo: '牛山呼庭園區需付50元門票，可抵用飲品。',
    Remarks: '東海岸的石頭雖美，但請切勿撿取。走米棧古道，記得帶瓶水解渴。',
    Keyword: '',
    Changetime: '2019-04-01T15:10:28+08:00'
  },
  {
    Id: 'C1_315080500H_000012',
    Name: '石梯坪',
    Zone: '',
    Toldescribe:
      '玩賞攻略■蘊藏豐富的珊瑚礁群與熱帶魚■海蝕壺穴景觀堪稱為臺灣第一■適合觀察潮間帶生態、潛水和磯釣■能夠露營聽著海浪、看著星空入睡■石梯坪港是花蓮出海賞鯨的絕佳地點■距離石梯坪5公里遠的石門洞為電影《沉默》的拍攝地石梯坪擁有經風力和海水雕刻而成的特殊岩岸風景，潮間帶上豐富的自然生態資源:螃蟹、海星、海參、寄居蟹、色彩斑斕的魚群，等待觀察力敏銳的人來一探奧秘。夜晚在海蝕平台上方的石梯坪露營區搭營，隔天就能在營帳前迎接美麗的晨曦，看清晨的陽光破雲而出將海面映照得金黃燦爛。世界級的戶外地質教室石梯坪位在花蓮縣豐濱鄉石梯灣的南側尾端，整個區域是一個面積極大的海岸階地，海蝕地形十分發達，海蝕平台、隆起珊瑚礁、海蝕溝、海蝕崖等舉目皆是，尤其是壺穴景觀堪稱台灣第一。石梯坪海岸蘊藏著豐富的珊瑚礁群和熱帶魚群，潮間帶上與壺穴形成的潮池，生長著各式各樣的海藻、魚蝦、貝類等海洋生物，使石梯坪成為觀察潮間帶豐富生態和潛水、磯釣的絕佳場所。遊客可沿著風景區的環狀步道實地觀察，或是登上17公尺高的單面山，不僅可飽覽石梯坪的地質景觀，太平洋的壯闊浩瀚景象也能盡入眼底。來生態賞鯨吧石梯坪也是個充滿生命力的港口，漁船每日捕撈新鮮的漁獲上岸外，這裡也是台灣賞鯨的發源地，每年夏天鯨豚們總現身外海，吸引遊人們搭上賞鯨船追逐牠們優雅的身影，不妨搭上船一同來個生態賞鯨之旅吧！ 【石梯坪露營區】電話:0922-211336 呂先生網站:http://camping33.pgo.tw/相關資訊:點我',
    Description:
      '石梯坪位在花蓮縣豐濱鄉石梯灣的南側，整個區域是一個面積極大的海岸階地，海蝕地形十分發達，海蝕平台、隆起珊瑚礁、海蝕溝、海蝕崖等比比皆是，尤其是壺穴景觀更是堪稱台灣第一。遊客可在此在此觀察潮間帶豐富生態或從事潛水活動，亦可選擇在設備完善的露營區夜宿。石梯坪主要族群是阿美族，夏天的捕魚祭和豐年祭為此處的主要活動，此處同時也是台灣賞鯨的發源地。【石梯坪工作站】電話:03-8781452   【石梯坪露營區】電話:03-8781599',
    Tel: '886-3-8781452',
    Add: '花蓮縣977豐濱鄉石梯坪52號',
    Zipcode: '977',
    Travellinginfo:
      '南下:由花蓮火車站前搭往成功、靜浦或台東等地的花蓮、鼎東客運海線班車，在石梯坪下車。 北上:由台東火車站前搭往花蓮的鼎東、花蓮客運海線班車，在石梯坪下車。 詳細時刻表及車資請洽花蓮客運(查詢電話:03-8338146~8 )或鼎東客運海線(查詢電話:089-328629 / 089-333443)',
    Opentime: '全天候開放露營電話預約時間:09:00~18:00電話:0922-211336 呂先生',
    Picture1: '',
    Picdescribe1: '',
    Picture2: '',
    Picdescribe2: '',
    Picture3: '',
    Picdescribe3: '',
    Map: '',
    Gov: '315080500H',
    Px: 121.51173,
    Py: 23.48525,
    Orgclass: '',
    Class1: '8',
    Class2: '',
    Class3: '',
    Level: '',
    Website: '',
    Parkinginfo: '',
    Parkinginfo_Px: null,
    Parkinginfo_Py: null,
    Ticketinfo:
      '大型車:假日200元、非假日170元小型車:假日60元、非假日50元機車:假日20元、非假日15元',
    Remarks:
      '1.石梯坪沒有遮陽設施，海邊日照強，要做好防曬；裝備也要齊全，除了遮陽的帽子、長褲、長袖，解渴的開水更不可少。2.初次造訪，建議沿木棧道前行，從第一座木造涼亭旁的石板步道下去，約2...',
    Keyword: '',
    Changetime: '2019-03-18T17:47:56+08:00'
  },
  {
    Id: 'C1_315080500H_000014',
    Name: '長虹橋',
    Zone: '',
    Toldescribe:
      '長虹橋優雅的拱形橋身橫跨在秀姑巒溪出海口處兩岸，在山海交際之處形成一道美麗的虹影，成為東海岸的著名拍照地標，而這裡也是泛舟的終點站，一艘艘疲倦又滿足的泛舟筏在這裡靠岸。沿著步道在溪畔漫步，水鳥輕巧的在河床邊覓食，自行車來來往往，兩旁的植物隨季節變換風景，若是累了，不妨到附近的新太平洋1號店稍作休息，喝杯下午茶，度過悠閒的時光。出海口的奚卜蘭島，又稱作獅球嶼，綠意蒼蒼的小島是當地海岸阿美族的聖地，也是火山集塊岩構成的島嶼，由於溪流阻隔，保有相當天然的生態相貌，在河口覓食的鳥類、洄游魚類和蝦蟹都會在此聚集，是做生態觀察的好地點。',
    Description:
      '長虹橋橫跨秀姑巒溪，連接靜浦與港口兩聚落，亦是秀姑巒溪泛舟的終點站；橋分新舊兩座橋，新橋採鮮艷亮眼的橙紅色，橋面規劃有快慢車道分隔的腳踏車及人行專用步道，並配合泛舟活動，設置了八座觀景台；橋上可遠眺出海囗的奚卜蘭島，因登島不易，島上仍維持原始林樣貌，俯瞰河面可見許多潔白如玉的大岩塊，其為巨型石灰岩，因其石潔白如玉，因而得到了「秀姑漱玉」的美名。',
    Tel: '886-3-8671326',
    Add: '花蓮縣977豐濱鄉台11線68公里處',
    Zipcode: '977',
    Travellinginfo:
      '南下:由花蓮火車站前搭往成功、靜浦或台東等地的花蓮、鼎東客運海線班車，在長虹橋站下車，再依指標前往即可抵達。北上:由台東火車站前搭往花蓮的鼎東、花蓮客運海線班車，在長虹橋站下車，再依指標前往即可抵達。詳細時刻表及車資請洽花蓮客運(查詢電話:03-8338146~8 / 花蓮汽車客運公司)',
    Opentime: '全天候開放',
    Picture1: '',
    Picdescribe1: '',
    Picture2: '',
    Picdescribe2: '',
    Picture3: '',
    Picdescribe3: '',
    Map: '',
    Gov: '315080500H',
    Px: 121.48904,
    Py: 23.46845,
    Orgclass: '',
    Class1: '8',
    Class2: '',
    Class3: '',
    Level: '',
    Website: '',
    Parkinginfo: '',
    Parkinginfo_Px: null,
    Parkinginfo_Py: null,
    Ticketinfo: '免費',
    Remarks: '',
    Keyword: '',
    Changetime: '2019-07-10T16:40:52+08:00'
  },
  {
    Id: 'C1_315080500H_000015',
    Name: '北回歸線',
    Zone: '',
    Toldescribe:
      '台灣一共有三個北回歸線標，分別在嘉義水上鄉、花蓮舞鶴台地、豐濱鄉，而這座北回歸線標碑位於台11線70.5公里處。潔白的地標坐擁海岸山脈與太平洋的美景，常常吸引了許多遊客來此拍照、休憩，但是你知道為什麼這座北回歸線標碑中間會有一條細縫嗎？北回歸線就是指北緯23.5&deg;，象徵著熱帶以及溫帶的分界點，最明顯的就是台灣北回歸線以南主要種植的作物，為熱帶的鳳梨以及釋迦，以北主要的作物就是溫帶作物茶以及水稻，而夏至中午時陽光會正好射入北回歸線標的縫中，此刻，塔旁的遊客即可體驗太陽下無影子的奇觀！所以經過除了來此拍照做個紀念，也可以閱讀解說牌了解四季的奧妙！',
    Description:
      '北回歸線標碑位在北緯23.5度，是太陽直射地球的北界，也是亞熱帶與熱帶的分界。靜浦的北回歸線標碑在台11線公路70.5公里處，是北回歸線途經台灣的最東界。聳立在太平洋旁的白色塔身，十分吸引遊客目光。',
    Tel: '886-3-8671326',
    Add: '花蓮縣977豐濱鄉台11線70.5公里處',
    Zipcode: '977',
    Travellinginfo:
      '南下:由花蓮火車站前搭往成功、靜浦或台東等地的花蓮、鼎東客運海線班車，在北回歸線標碑下車。北上:由台東火車站前搭往花蓮的鼎東、花蓮客運海線班車，在北回歸線標碑下車。詳細時刻表及車資請洽花蓮客運(查詢電話:03-8338146~8 / 花蓮汽車客運公司)',
    Opentime: '全年開放',
    Picture1: '',
    Picdescribe1: '',
    Picture2: '',
    Picdescribe2: '',
    Picture3: '',
    Picdescribe3: '',
    Map: '',
    Gov: '315080500H',
    Px: 121.49617,
    Py: 23.45141,
    Orgclass: '',
    Class1: '8',
    Class2: '',
    Class3: '',
    Level: '',
    Website: '',
    Parkinginfo: '',
    Parkinginfo_Px: null,
    Parkinginfo_Py: null,
    Ticketinfo: '免費',
    Remarks:
      '1.北回歸線位於北緯23.5度，它是太陽直射地球的北界；換言之，夏至時太陽沿著此緯度線東昇西落，這座標碑特地設計一個細縫，讓遊客可以透過這座建築觀察這種現象。2.在北回歸線附近有知...',
    Keyword: '',
    Changetime: '2019-07-10T16:41:14+08:00'
  },
  {
    Id: 'C1_315080500H_000016',
    Name: '金樽',
    Zone: '',
    Toldescribe:
      '玩賞攻略■適合在迷人的沙灘上散步、聽浪聲■約11-12月在金樽漁港舉辦國際衝浪公開賽■品嘗獨一無二的麥飯石咖啡金樽可俯瞰海岸全景，包含金樽漁港、白沙灣海灘以及附近的山澗峽谷，讓秀麗的景色完全盡收眼底，而這裡以臺灣唯一正在形成的陸連島聞名，看似酒杯形狀的海灣，故取名為「金樽」，又因為形狀像船錨，也被稱為「錨島」或「錨狀礁」。金樽擁有綿延達3公里長的純淨又迷人的沙灘，旅人可沿著觀景休憩區及木造階梯到沙灘上散步、聽浪聲、釣魚，近距離感受潔白浪花拍打岸邊的旖旎風情，或是在冬天約11-12月份時，來金樽漁港欣賞國際衝浪公開賽選手們駕馭海浪的英姿！遊玩金樽柔細的沙灘後，可回到觀景休憩區旁的咖啡店，喝上一杯香濃的麥飯石咖啡，十足愜意，也是人生一大享受。',
    Description:
      '金樽擁有臺灣唯一正在形成的陸連島，因看似酒杯，故取名為「金樽」，又因形狀像船錨，也被稱為「錨島」或「錨狀礁」。東管處在此地設有休憩區可俯瞰海岸全景，秀麗的海岸景色完全盡收眼底，還有木棧道通往沙灘，遊客可至綿延達三公里長的純淨沙灘遊玩，再回到觀景休憩區旁的咖啡店喝一杯香濃的麥飯石咖啡，堪稱一大享受。',
    Tel: '886-8-9281530',
    Add: '臺東縣959東河鄉七里橋11號',
    Zipcode: '959',
    Travellinginfo:
      '北上:由台東火車站前搭往成功、靜浦的鼎東客運海線班車，於金樽下車。南下:由花蓮火車站前搭往台東的花蓮客運海線班車，於金樽下車。詳細時刻表及車資請洽花蓮客運(查詢電話:03-8338146~8)或鼎東客運海線(查詢電話:089-328629 / 089-333443)',
    Opentime: '全天候開放',
    Picture1: '',
    Picdescribe1: '',
    Picture2: '',
    Picdescribe2: '',
    Picture3: '',
    Picdescribe3: '',
    Map: '',
    Gov: '315080500H',
    Px: 121.27975,
    Py: 22.9451,
    Orgclass: '',
    Class1: '8',
    Class2: '',
    Class3: '',
    Level: '',
    Website: '',
    Parkinginfo: '',
    Parkinginfo_Px: null,
    Parkinginfo_Py: null,
    Ticketinfo: '免費',
    Remarks:
      '1.為了防止觀光人潮影響到地方環境，到訪的遊客應保持環境清潔，一同維護這塊淨土。2.於夏日天氣炎熱時，請做好防曬措施，以避免被烈日曬傷。3.由於金樽的海灘坡度大，遊客們是禁止下海游...',
    Keyword: '',
    Changetime: '2019-03-26T12:09:16+08:00'
  },
  {
    Id: 'C1_315080500H_000028',
    Name: '加路蘭',
    Zone: '',
    Toldescribe:
      '玩賞攻略■由東海岸藝術家創作的作品是拍照的熱門點■是東海岸藝術節-裝置藝術重要的展示區■臺東最美星空■東海岸最美公車亭加路蘭擁有一大片寬廣的草坪、休憩涼亭、解說站以及觀景台，不但提供了東海岸旅行的最佳休息站，這裡美麗的海岸景觀與獨樹一格的裝置藝術，成為熱門的拍照景點，旅人們可在海邊散步聽浪聲、吹海風，一邊迎著和煦陽光渡過悠閒時光，或是夜晚拜訪毫無光害的加路蘭，仰望浩瀚無垠的星空。來到加路蘭除了欣賞自然美景之外，區內也有不少由漂流木所組成的裝置藝術作品，其中有兩條魚矗立在海邊，取名為「我的好朋友」的裝置藝術作品，上面寫道:「歡迎過路的旅者，有一個輕鬆愉快的旅程！」其他還有「類窗櫺」、「日昇之舞」、「風車組」、「哭泣的露珠」等，連休憩涼亭中的裝飾也可見漂流木的蹤影，讓加路蘭成為最美的藝文海岸遊憩區。▲2014年駐地藝術家-拉飛.邵馬(Lafin Sawmah) 黑髮橋的故事 (作品已於2018年拆除)',
    Description:
      '加路蘭鄰近小野柳風景區，有寬廣的草坪、涼亭、解說站以及觀景台，是東海岸旅行的最佳休息站，區內延續著風化、海蝕景觀，海岸線條紋路特殊，草地上也有不少漂流木裝置藝術作品。每年夏秋之際的加路蘭手創市集，集結一群東海岸藝術創作愛好者以趕集的形式聚集在加路蘭，呈現熱情原味的島嶼海洋風情，是東海岸之旅必遊之地。',
    Tel: '886-8-9281530',
    Add: '臺東縣950臺東市台11線157公里處',
    Zipcode: '950',
    Travellinginfo:
      '北上:由台東火車站前搭往成功、靜浦，或花蓮的鼎東客運、台灣好行海線班車，在加路蘭站下車。南下:由花蓮火車站前搭往台東的花蓮客運海線班車，在加路蘭站下車。詳細時刻表及車資請洽花蓮客運(查詢電話:03-8338146~8)或鼎東客運海線(查詢電話:089-328629 / 089-333443)',
    Opentime: '全天候開放',
    Picture1: '',
    Picdescribe1: '',
    Picture2: '',
    Picdescribe2: '',
    Picture3: '',
    Picdescribe3: '',
    Map: '',
    Gov: '315080500H',
    Px: 121.197,
    Py: 22.8065,
    Orgclass: '',
    Class1: '01',
    Class2: '',
    Class3: '',
    Level: '',
    Website: '',
    Parkinginfo: '',
    Parkinginfo_Px: null,
    Parkinginfo_Py: null,
    Ticketinfo: '免費',
    Remarks:
      '1.為了防止觀光人潮影響到地方環境，到訪的遊客應保持環境清潔，一同維護這塊淨土。2.園區內四周沒有樹木遮陰，因此夏日天氣炎熱時，請做好防曬措施，以避免被烈日曬傷。',
    Keyword: '',
    Changetime: '2019-03-26T12:08:46+08:00'
  },
  {
    Id: 'C1_315080500H_000034',
    Name: '都蘭',
    Zone: '',
    Toldescribe:
      '都蘭是東部海岸南段最大的部落，聳立東台灣的都蘭山，向來是部落族群景仰的「聖山」，不只是民俗、藝術與文化的精神象徵，同時也是遊客可以享受山林野趣的好去處！近來阿美族部落致力推動社區文化，使得歌謠舞蹈更顯精湛，手工藝品亦見創新精緻，而保有清新健康的阿美族風味美食，更是頗值一試。都蘭地區不只擁有縣定遺址「都蘭遺址」、海岸潮間帶及深具阿美族部落特色的生態，更有「水往上流奇觀」、電影「月光下 我記得」拍攝地-「月光小棧」、美麗的海灣「加母子灣」、紅糖文化藝術館「新東糖廠」，還有好山(都蘭聖山)、好水(太平洋)等景點，提供訪客充滿樂趣與驚奇的旅程！東管處沿著台11線興建幾座涼亭，使遊客能從不同角度瞭望都蘭灣之美，仲夏夜遊客更可在涼亭內搭帳棚過夜，在滿天星空下，享受都蘭灣美不勝收的景色！',
    Description:
      '都蘭是東部海岸南段最大的部落，聳立東台灣的都蘭山，向來是部落族群景仰的「聖山」，都蘭地區除了擁有縣定遺址「都蘭遺址」、海岸潮間帶及極具特色的阿美族部落文化外，更有「水往上流奇觀」、電影「月光下 我記得」的拍攝地「月光小棧」、美麗的海灣「加母子灣」、紅糖文化藝術館「新東糖廠」，在好山(都蘭聖山)、好水(太平洋)映襯下，提供訪客充滿樂趣與驚奇的旅程！',
    Tel: '886-8-9896200',
    Add: '臺東縣959東河鄉都蘭61號',
    Zipcode: '959',
    Travellinginfo:
      '北上:由台東火車站前搭往成功、靜浦，或花蓮的鼎東客運、台灣好行海線班車，在接近漁橋處下車或在都蘭站下車，循指標即可抵達。南下:由花蓮火車站前搭往台東的花蓮客運海線班車，在接近漁橋處下車或在都蘭站下車，循指標即可抵達。詳細時刻表及車資請洽花蓮客運(查詢電話:03-8338146~8 )或鼎東客運海線(查詢電話:089-328629 / 089-333443)',
    Opentime: '全天候開放',
    Picture1: '',
    Picdescribe1: '',
    Picture2: '',
    Picdescribe2: '',
    Picture3: '',
    Picdescribe3: '',
    Map: '',
    Gov: '315080500H',
    Px: 121.22765,
    Py: 22.87416,
    Orgclass: '',
    Class1: '8',
    Class2: '',
    Class3: '',
    Level: '',
    Website: '',
    Parkinginfo: '',
    Parkinginfo_Px: null,
    Parkinginfo_Py: null,
    Ticketinfo: '免費',
    Remarks:
      '為了防止觀光人潮影響到部落的安寧，或帶來文化的摩擦，到訪的遊客應尊重當地文化，保持環境清潔，一同維護這塊淨土。',
    Keyword: '',
    Changetime: '2019-03-18T17:49:37+08:00'
  },
  {
    Id: 'C1_315080500H_000042',
    Name: '阿美族民俗中心',
    Zone: '',
    Toldescribe:
      '玩賞攻略■欣賞阿美族特有的旮亙(竹鐘)、鼻笛等傳統樂音■了解阿美族特有的居住文化■適合親子體驗射箭、手作DIY阿美族民俗中心位於東管處都歷處本部旁，佔地約2公頃，園區中設有戶外表演廣場、可供2千人觀賞的戶外看台、射箭體驗區、阿美族傳統家屋等，並目前由Amis旮亙樂團做經營，讓遊客前來當神射手、DIY製作阿美族串珠、傳統樂器排笛，或是欣賞阿美族傳統歌舞表演，不僅成為體驗阿美族文化的好去處，也是親子景點遊樂的好地方。阿美族民俗中心在民國84年(1995)11月興建完成，主要建築之祭屋及家屋，是依據日本民族學家千千岩助太郎在民國32年(1943)於花蓮縣光復鄉調查的手繪圖，仿造花蓮縣太巴塱社的祭司住家搭建，走訪這裡，可看出阿美族特有的居住文化。除了逛逛特色建築，了解阿美族的建築之美以外，民俗中心還有部落文物展、手工藝品、特產展售、美食服務等，最後也不容錯過定時的免費展演，嘹亮的歌聲，搭配以阿美族特有的旮亙(竹鐘)、鼻笛等樂器演奏，重現了阿美族最原味的音樂，下次若有機會拜訪時，不妨等候一下，來欣賞Amis旮亙樂團的表演吧！',
    Description:
      '位於東管處處本部園區內的阿美族民俗中心於1995年11月興建完成，現由知名的「Amis旮亙樂園」駐點經營，走訪這裡，可看出阿美族特有的居住文化，除了阿美族特色建築外，遊客在此還可進行拉鞦韆、射箭及竹炮等阿美族文化體驗，還有「Amis旮亙樂團」定點表演:舞蹈、歌唱、打擊樂器、排笛、鼻笛等，歡迎一起來唱跳。',
    Tel: '886-8-9841751',
    Add: '臺東縣961成功鎮新村路25號',
    Zipcode: '961',
    Travellinginfo:
      '北上:由台東火車站前搭往成功、靜浦，或花蓮的鼎東、花蓮客運海線班車，於東管處都歷處本部站下車。南下:由花蓮火車站前搭往台東等地的花蓮、鼎東客運海線班車，於東管處都歷處本部站下車。詳細時刻表及車資請洽花蓮客運(查詢電話:03-8338146~8)或鼎東客運海線(查詢電話:089-328629 / 089-333443)',
    Opentime: '週一、二、四、五、六、日 09:00~17:00；週三休園',
    Picture1: '',
    Picdescribe1: '',
    Picture2: '',
    Picdescribe2: '',
    Picture3: '',
    Picdescribe3: '',
    Map: '',
    Gov: '315080500H',
    Px: 121.3255,
    Py: 23.01779,
    Orgclass: '',
    Class1: '8',
    Class2: '',
    Class3: '',
    Level: '',
    Website: '',
    Parkinginfo: '',
    Parkinginfo_Px: null,
    Parkinginfo_Py: null,
    Ticketinfo: '定期展演自由樂捐，其他項目請參考網頁底下旅遊叮嚀',
    Remarks:
      '展場開放時間:●週一、二、四、五、六、日 09:00~17:00；週三休園展演活動時間:● 週一、二、四、五、六:11:00、14:00 定時展演(兩場)● 週日:上午演出(預約制...',
    Keyword: '',
    Changetime: '2019-03-18T17:55:39+08:00'
  }
]
const restroom = [
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '礁溪鄉',
    村里: '吳沙村',
    無障礙廁所名稱: '四城火車站無障礙廁所',
    地址: '宜蘭縣礁溪鄉吳沙村站前路24號',
    公廁類型: '無障礙',
    X坐標: '327067',
    Y坐標: '2742380',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '壯圍鄉',
    村里: '東港村',
    無障礙廁所名稱: '大福國小學校南一無障礙廁所',
    地址: '宜蘭縣壯圍鄉東港村大福路1段62巷26號',
    公廁類型: '無障礙',
    X坐標: '329613.081',
    Y坐標: '2741357.06',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '壯圍鄉',
    村里: '過嶺村',
    無障礙廁所名稱: '過嶺國小教學大樓1F男廁',
    地址: '宜蘭縣壯圍鄉過嶺村壯濱路3段261號',
    公廁類型: '無障礙',
    X坐標: '332364.885',
    Y坐標: '2739286.239',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '員山鄉',
    村里: '深溝村',
    無障礙廁所名稱: '深溝國小教學大樓西1F無障礙廁所',
    地址: '宜蘭縣員山鄉深溝村惠民路266號',
    公廁類型: '無障礙',
    X坐標: '323256.172',
    Y坐標: '2735330.713',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '五結鄉',
    村里: '上四村',
    無障礙廁所名稱: '興中國中教學大樓1F無障礙廁所',
    地址: '宜蘭縣五結鄉上四村中正東路50號',
    公廁類型: '無障礙',
    X坐標: '327955.263',
    Y坐標: '2732656.214',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '三星鄉',
    村里: '天山村',
    無障礙廁所名稱: '憲明國小新公廁無障礙廁所',
    地址: '宜蘭縣三星鄉天山村福山街119號',
    公廁類型: '無障礙',
    X坐標: '312598.96',
    Y坐標: '2728431.98',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '三星鄉',
    村里: '義德村',
    無障礙廁所名稱: '三星國小行政大樓1F西邊男廁',
    地址: '宜蘭縣三星鄉義德村三星路5段86號',
    公廁類型: '無障礙',
    X坐標: '315860.84',
    Y坐標: '2728969.57',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '三星鄉',
    村里: '義德村',
    無障礙廁所名稱: '三星國小行政大樓1F西邊女廁',
    地址: '宜蘭縣三星鄉義德村三星路5段86號',
    公廁類型: '無障礙',
    X坐標: '315860.84',
    Y坐標: '2728969.57',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '宜蘭市',
    村里: '負郭里',
    無障礙廁所名稱: '光復國小卓越樓1F無障礙廁所',
    地址: '宜蘭縣宜蘭市負郭里泰山路60號',
    公廁類型: '無障礙',
    X坐標: '325629.56',
    Y坐標: '2738822.74',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '羅東鎮',
    村里: '成功里',
    無障礙廁所名稱: '東光國中東光樓1F男廁(含無障礙)',
    地址: '宜蘭縣羅東鎮成功里興東南路201號',
    公廁類型: '無障礙',
    X坐標: '327676.57',
    Y坐標: '2729636.97',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '礁溪鄉',
    村里: '德陽路',
    無障礙廁所名稱: '湯圍溝公園無障礙廁所',
    地址: '宜蘭縣礁溪鄉德陽路99之11號',
    公廁類型: '無障礙',
    X坐標: '327838.42',
    Y坐標: '2747005.96',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '蘇澳鎮',
    村里: '南建里',
    無障礙廁所名稱: '豆腐岬風景區男廁',
    地址: '宜蘭縣蘇澳鎮南建里造船路6號',
    公廁類型: '無障礙',
    X坐標: '',
    Y坐標: '',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '礁溪鄉',
    村里: '玉石村',
    無障礙廁所名稱: '礁溪溫泉會館遊客中心1F北側無障礙廁所',
    地址: '宜蘭縣礁溪鄉玉石村公園路16號',
    公廁類型: '無障礙',
    X坐標: '328488.45',
    Y坐標: '2747247.606',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '宜蘭市',
    村里: '負郭里',
    無障礙廁所名稱: '光復國小創意新樓1F無障礙廁所',
    地址: '宜蘭縣宜蘭市負郭里泰山路60號',
    公廁類型: '無障礙',
    X坐標: '325629.56',
    Y坐標: '2738822.74',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '礁溪鄉',
    村里: '大忠村',
    無障礙廁所名稱: '五峰旗風景區男廁含無障礙廁所',
    地址: '宜蘭縣礁溪鄉大忠村五峰路',
    公廁類型: '無障礙',
    X坐標: '',
    Y坐標: '',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '冬山鄉',
    村里: '得安村',
    無障礙廁所名稱: '梅花湖風景特定區男廁',
    地址: '宜蘭縣冬山鄉得安村環湖路',
    公廁類型: '無障礙',
    X坐標: '',
    Y坐標: '',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '大同鄉',
    村里: '太平村',
    無障礙廁所名稱: '鳩之澤溫泉男廁(含無障礙)',
    地址: '宜蘭縣大同鄉太平村25號',
    公廁類型: '無障礙',
    X坐標: '',
    Y坐標: '',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '蘇澳鎮',
    村里: '東澳里',
    無障礙廁所名稱: '東澳加油站男廁',
    地址: '宜蘭縣蘇澳鎮東澳里蘇花路3段210號',
    公廁類型: '無障礙',
    X坐標: '334431.58',
    Y坐標: '2712916.7',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '五結鄉',
    村里: '福興村',
    無障礙廁所名稱: '五結加油站男廁',
    地址: '宜蘭縣五結鄉福興村五結路3段565號',
    公廁類型: '無障礙',
    X坐標: '328965.847',
    Y坐標: '2730818.897',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '南澳鄉',
    村里: '南澳村',
    無障礙廁所名稱: '南興加油站男女廁',
    地址: '宜蘭縣南澳鄉南澳村蘇花路2段45號',
    公廁類型: '無障礙',
    X坐標: '330176.65',
    Y坐標: '2706410.16',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '羅東鎮',
    村里: '集祥里',
    無障礙廁所名稱: '羅東中山公園男廁',
    地址: '宜蘭縣羅東鎮集祥里公園路13號',
    公廁類型: '無障礙',
    X坐標: '',
    Y坐標: '',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '蘇澳鎮',
    村里: '聖湖里',
    無障礙廁所名稱: '蘇澳運動公園男廁(含無障礙)',
    地址: '宜蘭縣蘇澳鎮聖湖里聖愛路',
    公廁類型: '無障礙',
    X坐標: '',
    Y坐標: '',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '大同鄉',
    村里: '太平村',
    無障礙廁所名稱: '太平山國家森林遊樂區男廁(含無障礙)',
    地址: '宜蘭縣大同鄉太平村58-1號',
    公廁類型: '無障礙',
    X坐標: '',
    Y坐標: '',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '大同鄉',
    村里: '英士村',
    無障礙廁所名稱: '明池森林遊樂區無障礙廁所',
    地址: '宜蘭縣大同鄉英士村明池巷33號',
    公廁類型: '無障礙',
    X坐標: '',
    Y坐標: '',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '三星鄉',
    村里: '大隱村',
    無障礙廁所名稱: '大隱國小教學1F無障礙廁所',
    地址: '宜蘭縣三星鄉大隱村大埔路129號',
    公廁類型: '無障礙',
    X坐標: '',
    Y坐標: '',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '大同鄉',
    村里: '太平村',
    無障礙廁所名稱: '大同國中男廁(含無障礙)',
    地址: '宜蘭縣大同鄉太平村泰雅路四段35號',
    公廁類型: '無障礙',
    X坐標: '298407.19',
    Y坐標: '2718707.5',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '礁溪鄉',
    村里: '六結村',
    無障礙廁所名稱: '礁溪鄉公所2F男廁含無障礙廁所',
    地址: '宜蘭縣礁溪鄉六結村中山路2段3號',
    公廁類型: '無障礙',
    X坐標: '327958.691',
    Y坐標: '2746456.1',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '冬山鄉',
    村里: '得安村',
    無障礙廁所名稱: '三清宮停車場男廁',
    地址: '宜蘭縣冬山鄉得安村三清路123號',
    公廁類型: '無障礙',
    X坐標: '323971.628',
    Y坐標: '2726029.926',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '羅東鎮',
    村里: '成功里',
    無障礙廁所名稱: '東光國中教學A棟1F男廁2(含無障礙)',
    地址: '宜蘭縣羅東鎮成功里興東南路201號',
    公廁類型: '無障礙',
    X坐標: '327676.57',
    Y坐標: '2729636.97',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '蘇澳鎮',
    村里: '永榮里',
    無障礙廁所名稱: '文化國中新大樓1F教職員男廁(含無障礙)',
    地址: '宜蘭縣蘇澳鎮永榮里新馬路2號',
    公廁類型: '無障礙',
    X坐標: '334321.587',
    Y坐標: '2723709.406',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '蘇澳鎮',
    村里: '蘇西里',
    無障礙廁所名稱: '蘇澳國小活動中心1F無障礙廁所',
    地址: '宜蘭縣蘇澳鎮蘇西里中山路1段366號',
    公廁類型: '無障礙',
    X坐標: '335200.63',
    Y坐標: '2721374.12',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '礁溪鄉',
    村里: '六結村',
    無障礙廁所名稱: '礁溪鄉公所1F女廁含無障礙廁所',
    地址: '宜蘭縣礁溪鄉六結村中山路2段3號',
    公廁類型: '無障礙',
    X坐標: '327958.691',
    Y坐標: '2746456.1',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '宜蘭市',
    村里: '孝廉里',
    無障礙廁所名稱: '力行國小樹人樓1F男廁',
    地址: '宜蘭縣宜蘭市孝廉里力行街2號',
    公廁類型: '無障礙',
    X坐標: '',
    Y坐標: '',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '羅東鎮',
    村里: '竹林里',
    無障礙廁所名稱: '山隆復興加油站男女廁',
    地址: '宜蘭縣羅東鎮竹林里純精路3段259號',
    公廁類型: '無障礙',
    X坐標: '327628.32',
    Y坐標: '2731206.88',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '羅東鎮',
    村里: '集祥里',
    無障礙廁所名稱: '特力屋無障礙廁所',
    地址: '宜蘭縣羅東鎮集祥里民生路6號',
    公廁類型: '無障礙',
    X坐標: '328020.645',
    Y坐標: '2730188.849',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '羅東鎮',
    村里: '集祥里',
    無障礙廁所名稱: '民生市場2樓無障礙廁所',
    地址: '宜蘭縣羅東鎮集祥里民生路6號',
    公廁類型: '無障礙',
    X坐標: '328020.645',
    Y坐標: '2730188.849',
    備註: '',
    最後更新時間: '20181002'
  },
  {
    資源彙整機關: '宜蘭縣政府',
    鄉鎮市區: '五結鄉',
    村里: '協和村',
    無障礙廁所名稱: '冬山河親水公園-遊客中心無障礙廁所',
    地址: '宜蘭縣五結鄉協和村親河路2段18號',
    公廁類型: '無障礙',
    X坐標: '332156.522',
    Y坐標: '2729715.618',
    備註: '',
    最後更新時間: '20181002'
  }
]
const schedule = JSON.parse(localStorage.getItem('schedule')) || []

function displayData(data) {
  dataPanel.innerHTML = ''
  data.forEach(function(item, index) {
    dataPanel.innerHTML += `
          <div class="col-6 col-sm-4 col-md-4">
            <div class="card mb-2" data-id="${
              item.Id
            }" data-toggle="modal" data-target="#show-movie-modal">
              <img class="card-img-top" style="filter: brightness(0.6);" src="https://picsum.photos/300/200" alt="Card image cap" data-id="${
                item.Id
              }" data-toggle="modal" data-target="#show-movie-modal">
              <div class="card-body justify-content-between pt-4" style="position: relative;">
              <div class="add">
              <i class="fas fa-plus" aria-hidden="true" data-id="${
                item.Id
              }"></i>
              </div>
                <h6 class="card-title" style="font-family:monospace; font-size:22px;">${
                  item.Name
                }</h6>
                <div>
                  <small>${item.Add}</small>
                </div>
              </div>
            </div>
          </div>
        `
  })
}

function displayResults(data) {
  dataPanel.innerHTML = ''
  data.forEach(function(item, index) {
    dataPanel.innerHTML += `
          <div class="col-6 col-sm-4 col-md-4">
            <div class="card mb-2" data-id="${
              item.Id
            }" data-toggle="modal" data-target="#show-movie-modal">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.2522043476847!2d121.76054481490367!3d24.786816084088688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3467fb2051e01787%3A0x6bd23fea4b10b7c!2zMjYy5a6c6Jit57ij56SB5rqq6YSJ56uZ5YmN6LevMjTomZ8!5e0!3m2!1szh-TW!2stw!4v1563882302676!5m2!1szh-TW!2stw" width="100%" height="auto" frameborder="0" style="border:0" allowfullscreen></iframe>
            <div class="p-4">
                <h6 class="card-title" style="font-family:monospace; font-size:22px;">${
                  item.無障礙廁所名稱
                }</h6>
                <div>
                  <small>${item.地址}</small>
                </div>
              </div>
              </div>
            </div>
          </div>
        `
  })
}

function showInfo(id) {
  const modalBody = document.querySelector('.modal-body')

  const data = info.filter(x => x.Id == id)
  modalBody.innerHTML = `
                <div class="row">
                    <div class="col-sm-6" id="modal-image">
                        <img src='https://picsum.photos/300/200' class="card-img-top" alt="..." >
                    </div> 
                    <div class="col-sm-6" id="modal-description">
                        <h4>${data[0].Name}</h4>
                        <p>${data[0].Toldescribe}</p>
                        <br>
                        <p>地址：${data[0].Add}</p>
                        <p>電話：${data[0].Tel}</p>
                    </div> 
                </div>
            `
}

function addAttraction(detail) {
  const id = detail.dataset.id

  const list = JSON.parse(localStorage.getItem('schedule')) || []
  const place = info.find(item => item.Id == id)
  if (list.some(item => item.Id == id)) {
    alert(`${place.Name}已
經在行程表中！`)
  } else {
    list.push(place)
    alert(`成功將 ${place.Name} 加入行程表!`)
    detail.querySelector('.fa-plus').classList.remove('fa-plus')
    detail.querySelector('.fas').classList.add('fa-check')
    detail.querySelector('.add').classList.add('scheduled')
  }
  localStorage.setItem('schedule', JSON.stringify(list))
}

dataPanel.addEventListener('click', e => {
  if (e.target.matches('.add') || e.target.matches('.fa-plus')) {
    addAttraction(e.target.closest('.card'))
    e.stopPropagation()
  } else {
    showInfo(e.target.dataset.id)
  }
})

const searchBox = document.querySelector('form.form-inline')

searchBox.addEventListener('keyup', e => {
  let results = []
  let input = document.querySelector('input[type=search]').value
  results = restroom.filter(search => search.鄉鎮市區.match(input))

  displayResults(results)
})

const home = document.querySelector('.choose')

home.addEventListener('click', () => {
  displayData(info)
})

displayData(info)
